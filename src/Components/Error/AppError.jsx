import React from 'react';
import AppErrorImg from '../../assets/App-Error.png';
import { NavLink } from 'react-router';

const AppError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center ">
      
      <img className="w-64 sm:w-80 md:w-96 mb-4" src={AppErrorImg} alt="App Not Found"/>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">App Not Found</h2>
      <p className="text-gray-400 mt-2 text-sm sm:text-base"> Please go back to the apps page
      </p>
      <NavLink
        to="/apps"
        className="mt-4 px-6 py-2 mb-10 rounded-lg text-white font-semibold 
        bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
        hover:opacity-90 transition "
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default AppError;