export default function StatsPage() {
    return (
      <div className="text-white p-6 w-full">
        <h1 className="text-3xl font-bold mb-4">📊 Storage Stats</h1>
        <p className="text-lg text-gray-400">View your storage usage details here.</p>
  
        <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-cyan-400">Total Storage Used</h2>
          <div className="w-full bg-gray-800 h-4 rounded-lg mt-2">
            <div className="bg-cyan-400 h-4 rounded-lg" style={{ width: "60%" }}></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">60GB of 100GB used</p>
        </div>
  
        <div className="mt-4 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-400">File Breakdown</h2>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-300">📂 Documents: 25GB</li>
            <li className="text-gray-300">🎵 Music: 10GB</li>
            <li className="text-gray-300">📸 Photos: 15GB</li>
            <li className="text-gray-300">🎥 Videos: 10GB</li>
          </ul>
        </div>
      </div>
    );
  }
  