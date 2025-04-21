import React from 'react';

function Notification({ message, show }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 bg-gray-700 text-white font-semibold px-4 py-2 rounded-md shadow-lg text-sm z-50 transition-opacity duration-300">
      {message}
    </div>
  );
}

export default Notification;
