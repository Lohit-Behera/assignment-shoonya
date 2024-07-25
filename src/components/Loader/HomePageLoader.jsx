import React from "react";

function HomePageLoader() {
  return (
    <div className="space-y-4">
      <div className="w-full h-80 bg-neutral-400/50 animate-pulse rounded-lg"></div>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 justify-between">
        <div className="flex flex-col w-ful md:w-[50%] md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 ">
          <div className="w-full md:w-[30%] h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
          <div className="w-full md:w-[30%] h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
          <div className="w-full md:w-[10%] h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
        </div>
        <div className="w-full md:w-[50%] h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full h-96 bg-[#e0d9cf]/50 p-4 rounded-lg space-y-1 "
          >
            <div className="w-full h-52 bg-neutral-400/50 animate-pulse rounded-lg"></div>
            <div className="w-full h-6 bg-neutral-400/50 animate-pulse rounded-lg"></div>
            <div className="w-full h-6 bg-neutral-400/50 animate-pulse rounded-lg"></div>
            <div className="w-full h-6 bg-neutral-400/50 animate-pulse rounded-lg"></div>
            <div className="w-full h-6 bg-neutral-400/50 animate-pulse rounded-lg"></div>
            <div className="w-full h-6 bg-neutral-400/50 animate-pulse rounded-lg"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        <div className="w-28 h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
        <div className="w-28 h-9 bg-neutral-400/50 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
}

export default HomePageLoader;
