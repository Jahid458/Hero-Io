import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router';

const AppCard = ({ singleData }) => {
    const { id, title, image, downloads, ratingAvg } = singleData;

    return (
        <Link 
            to={`/apps/${id}`} 
            className="hover:scale-105 transition-transform duration-300 p-3 bg-gray-300 rounded-2xl shadow-md w-64"
        >
            <img 
                src={image} 
                alt={title} 
                className="w-full h-52 object-cover rounded-xl bg-gray-300" 
            />
            <h3 className="font-bold text-lg mt-3 mb-2">{title}</h3>
            <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-lg">
                    <IoMdDownload /> {downloads}
                </span>
                <span className="flex items-center gap-1 bg-orange-100 text-orange-500 text-sm font-medium px-3 py-1 rounded-lg">
                    <FcRating /> {ratingAvg}
                </span>
            </div>
        </Link>
    );
};

export default AppCard;