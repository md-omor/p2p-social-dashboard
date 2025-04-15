"use client";
import Image from "next/image";
// Remove unused imports
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { X as XIcon } from "lucide-react";

// Notifications data remains the same
const notifications = [
  {
    avatar: "/images/user/user-01.jpg",
    name: "Musharof",
    action: "requests permission to change Project",
    time: "5 min ago",
    status: "online"
  },
  {
    avatar: "/images/user/user-02.jpg",
    name: "Katy",
    action: "requests permission to change Project",
    time: "8 min ago",
    status: "online"
  },
  {
    avatar: "/images/user/user-03.jpg",
    name: "David",
    action: "requests permission to change Project",
    time: "15 min ago",
    status: "offline"
  },
  {
    avatar: "/images/user/user-04.jpg",
    name: "John",
    action: "requests permission to change Project",
    time: "1 hr ago",
    status: "online"
  }
];

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] w-[330px] rounded-2xl border border-gray-800/50 bg-gray-900/95 p-4 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800/50">
          <h3 className="text-lg font-medium text-white/90">Notification</h3>
          <button onClick={closeDropdown} className="text-gray-400 hover:text-gray-300">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      
        <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative">
                <Image
                  src={notification.avatar}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white/90">{notification.name}</span>
                  {" "}{notification.action}
                </p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      
        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-gray-300 transition-colors rounded-lg hover:bg-white/5 hover:text-gray-200">
          View All Notifications
        </button>
      </Dropdown>
    </div>
  );
}
