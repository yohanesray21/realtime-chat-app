import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chat from './Chat';

const Sidebar = () => {
  return (
    <div className="border-r-1 flex-1 bg-gray-500">
      <Navbar />
      <Search />
      <Chat />
    </div>
  );
};

export default Sidebar;
