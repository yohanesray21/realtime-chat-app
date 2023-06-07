import Image from 'next/image';
import React from 'react';
import Google from '/public/Google.svg';

const Navbar = () => {
  return (
    <div className="flex h-12 items-center justify-between bg-gray-700 p-3">
      <span>Yohanes Chat</span>
      <div className="flex items-center gap-2">
        <Image src={Google} alt="user" width={20} height={20} />
        <span>Yohanes</span>
        <button className="border p-1">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
