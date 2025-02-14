export default function SettingsPage() {
    return (
      <div className="text-white p-6 w-full">
        <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>
        <p className="text-lg text-gray-400">Customize your preferences.</p>
  
        <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-cyan-400">Account Settings</h2>
          <div className="mt-4">
            <label className="text-gray-300 block mb-2">📧 Email</label>
            <input type="email" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="your.email@example.com" />
          </div>
          <div className="mt-4">
            <label className="text-gray-300 block mb-2">🔒 Change Password</label>
            <input type="password" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="New password" />
          </div>
          <button className="mt-4 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500">Save Changes</button>
        </div>
  
        <div className="mt-4 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-400">Theme Settings</h2>
          <div className="flex items-center mt-4">
            <span className="text-gray-300 mr-2">🌙 Dark Mode</span>
            <input type="checkbox" className="toggle-checkbox hidden" id="dark-mode-toggle" />
            <label htmlFor="dark-mode-toggle" className="cursor-pointer w-12 h-6 bg-gray-800 rounded-full relative flex items-center">
              <span className="w-6 h-6 bg-cyan-400 rounded-full absolute left-0 transition-transform transform scale-90"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
  