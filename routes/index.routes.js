const express=require('express');
const router=express.Router();
const { v4: uuidv4 } = require('uuid'); // Import UUID library
const upload=require('../config/multer.config')
const fileModel=require('../models/files.model')
const supabase=require('../config/supabase.config')
const authMiddleware=require('../middlewares/authe')


router.get('/home',authMiddleware,async (req,res)=>{
    const userFiles=await fileModel.find({
        user:req.user.userId
    })
    console.log(userFiles)
    res.render('home',{
        files:userFiles
    });
})

// Endpoint for file uploads
router.post('/upload',authMiddleware, upload.single('file'), async (req, res) => {
    console.log('User ID:', req.user.userId); // Debug log to verify user ID
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Generate a unique name for the file
        const uniqueFileName = `${uuidv4()}-${file.originalname}`;
        console.log('File:', file);
        console.log('Unique File Name:', uniqueFileName);
        // Upload the file to Supabase
        const { originalname, buffer } = file;
        const { data, error } = await supabase.storage
            .from('user-data') // Your bucket name
            .upload(uniqueFileName, file.buffer, {
                cacheControl: '3600',
                upsert: false, // Set to true if you want to overwrite files with the same name
            });

        if (error) {
            throw error;
        }
        // Get public URL for the uploaded file
        // const { publicUrl } = supabase.storage.from('user-data').getPublicUrl(uniqueFileName);
        // res.status(200).json({
        //     message: 'File uploaded successfully',
        //     fileUrl: publicUrl,
        // });
        const newFile=await fileModel.create({
            path:uniqueFileName,
            originalname:req.file.originalname,
            user:req.user.userId
        })
        res.json(newFile)

    } catch (error) {
        console.error('Error uploading file:', error.message);
        res.status(500).json({ error: error.message });
    }

    
});

router.get('/download/:path', authMiddleware, async (req, res) => {
    try {
        const { path } = req.params;
        console.log(path);
        
        if (!path) {
            return res.status(400).json({ error: 'File name is required' });
        }

        // Download the file from Supabase storage
        const { data, error } = await supabase.storage
            .from('user-data') // Replace with your bucket name
            .download(path);

        if (error) {
            throw error;
        }

        // Convert Blob to Buffer
        const arrayBuffer = await data.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Set appropriate headers
        res.setHeader('Content-Type', data.type); // Preserve original content type
        res.setHeader('Content-Disposition', `attachment; filename="${path}"`); // Force download

        // Send the buffer as response
        return res.send(buffer);

    } catch (error) {
        console.error('Error downloading file:', error.message);
        res.status(500).json({ error: error.message });
    }
});




module.exports=router;