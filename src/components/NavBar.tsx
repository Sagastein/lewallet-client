import { AvatarWithUserDropdown } from "./ui/Avatar";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <span className="hidden md:block text-xl font-semibold text-green-500">
              LeWallet
            </span>
          </div>

          <div className="relative flex items-center">
            <AvatarWithUserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
