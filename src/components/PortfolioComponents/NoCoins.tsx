import React from "react";

const NoCoins = () => {
  return (
    <div className="text-center space-y-4 text-sm md:text-base lg:text-lg">
      <h2 className="text-lg md:text-xl">You currently have no coins saved.</h2>
      <p className="text-indigo-900/70 dark:text-gray-400">
        You can use this feature to track the value of asset you&apos;ve
        purchased over time
      </p>
      <p>Add a coin by pressing the add button.</p>
    </div>
  );
};

export default NoCoins;
