import { useState } from "react";

export default function FilesPage() {
  const [files, setFiles] = useState([
    { id: 1, name: "Document.pdf", size: "2.1 MB", type: "PDF" },
    { id: 2, name: "Presentation.pptx", size: "4.5 MB", type: "PPT" },
    { id: 3, name: "Image.png", size: "1.2 MB", type: "Image" },
  ]);

  return (
    <div className="w-full p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">📁 Your Files</h1>

      {/* Upload Button */}
      <div className="flex justify-between items-center mb-6">
        <input type="file" className="hidden" id="fileUpload" />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition"
        >
          Upload File ⬆️
        </label>
      </div>

      {/* File List */}
      <div className="bg-gray-900 p-4 rounded-lg">
        {files.length === 0 ? (
          <p className="text-gray-400 text-center">No files uploaded yet.</p>
        ) : (
          <ul className="space-y-3">
            {files.map((file) => (
              <li
                key={file.id}
                className="flex justify-between items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <span className="flex-1">{file.name}</span>
                <span className="text-gray-400">{file.size}</span>
                <button className="text-red-400 hover:text-red-300">
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
