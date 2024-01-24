import React from 'react';
import { IoEarthSharp } from 'react-icons/io5';

const Loading = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <div className="animate-pulse  text-7xl text-gray-500">
      <IoEarthSharp />
    </div>
  </div>
);

export default Loading;
