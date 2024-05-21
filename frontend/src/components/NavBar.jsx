import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function App() {
  const [isDirectory, setIsDirectory] = useState(true);
    const navigate = useNavigate() 
  const handleDirectoryClick = () => {
    setIsDirectory(true);
    navigate('/')
  };

  const handleCommunityClick = () => {
    setIsDirectory(false);
    navigate('/community')
  };

  return (
    <div>
      <div className="flex justify-end bg-black pt-4 pr-2 gap-2 ">
        <button
          onClick={handleDirectoryClick}
          className={`border-none rounded-b-none ${isDirectory ? 'text-black bg-white' : 'text-white'}`}
        >
          Directory
        </button>
        <button
          onClick={handleCommunityClick}
          className={`border-none rounded-b-none ${!isDirectory ? 'text-black bg-white' : 'text-white'}`}
        >
          Community
        </button>
      </div>
    </div>
  );
}
