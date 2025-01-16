function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="hidden md:block text-xl font-semibold text-green-500">
              LeWallet
            </span>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={() => alert("User Profile Clicked")}
              className="flex items-center space-x-2"
            >
              <img
                src="https://www.w3schools.com/howto/img_avatar.png" // Avatar image URL
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-gray-700">User Name</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
