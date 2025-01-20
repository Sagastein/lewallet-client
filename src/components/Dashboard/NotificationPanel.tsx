import React from "react";
import { XCircle } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

interface NotificationPanelProps {
  notifications: Notification[];
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  notifications,
  onClose,
}) => {
  return (
    <div className="fixed z-30 top-16 right-6 md:right-28 bg-white shadow-lg rounded-lg p-4 max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <XCircle className="h-5 w-5" />
        </button>
      </div>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="mb-2 cursor-pointer hover:bg-gray-100 border-b"
          >
            <div className="flex items-center">
              <div className="text-gray-500 text-sm">
                {notification.timestamp}
              </div>
              <div className="ml-2 text-gray-700">{notification.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
