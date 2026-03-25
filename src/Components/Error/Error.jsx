import React from 'react';
import errorImg from '../../assets/error-404.png';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">

      <img
        className="w-64 sm:w-80 md:w-md lg:w-lg animate-bounce mb-4"
        src={errorImg}
        alt="404 error"
      />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
        Oops!! Page Not Found
      </h2>
      <p className="text-gray-400 mt-2 text-sm sm:text-base">
        The page you are looking for is not available
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-6 py-2 rounded-lg text-white font-semibold 
        bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
        hover:opacity-90 transition"
      > Go Back
      </button>
    </div>
  );
};

export default Error;