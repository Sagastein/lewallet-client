import { useState } from "react";
import { AvatarWithUserDropdown } from "./ui/Avatar";
import NotificationPanel from "../components/Dashboard/NotificationPanel";
import { Bell } from "lucide-react";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: "New message received", timestamp: "10:00 AM" },
    {
      id: 2,
      message: "Your transaction was successful",
      timestamp: "09:30 AM",
    },
    // Add more notifications as needed
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <span className="hidden md:block text-xl font-semibold text-green-500">
              Wallet
            </span>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="mr-4 relative"
            >
              <Bell className="h-6 w-6 text-gray-500" />
            </button>
            <AvatarWithUserDropdown />
          </div>
        </div>
      </div>
      {showNotifications && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
