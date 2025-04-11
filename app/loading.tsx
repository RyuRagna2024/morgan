import React from "react";
import { RefreshCw } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="flex flex-col items-center gap-6 p-8 rounded-xl">
        {/* Animated spinner */}
        <div className="relative">
          <RefreshCw className="text-blue-600 animate-spin" size={48} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Loading</h2>
          <div className="flex justify-center items-center">
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mx-1 animate-bounce"></span>
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mx-1 animate-bounce animation-delay-200"></span>
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mx-1 animate-bounce animation-delay-400"></span>
          </div>
          <p className="text-gray-600 mt-4 max-w-xs text-center">
            We&apos;re preparing something amazing for you. Just a moment...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
