import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import { addInstallApps } from '../../Js/AddDb';
import AppError from '../Error/AppError';

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const app = data.find((a) => a.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  if (!app) return <AppError />;

  const {
    title,
    image,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    companyName,
    ratings,
  } = app;

  const handleInstall = (id) => {
    setInstalled(true);
    toast.success('App Installed Successfully!');
    addInstallApps(id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start pb-8 border-b">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover bg-gray-200"
        />

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>

          <p className="text-sm text-gray-500">
            Developed by
            <span className="text-green-500 font-medium">
              {companyName}
            </span>
          </p>

          <div className="grid grid-cols-3 gap-4 md:flex md:gap-10 mt-4">
            <div>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-xl md:text-2xl font-bold">
                {downloads}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Ratings</p>
              <p className="text-xl md:text-2xl font-bold">
                {ratingAvg}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Reviews</p>
              <p className="text-xl md:text-2xl font-bold">
                {reviews}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleInstall(id)}
            disabled={installed}
            className={`mt-4 px-6 py-2 rounded-lg font-semibold w-full sm:w-56 transition ${
              installed
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {installed
              ? 'Installed'
              : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="py-8 border-b">
        <h2 className="text-xl font-bold mb-6 text-center md:text-left">
          Ratings
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart layout="vertical" data={[...ratings].reverse()}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={40} />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>


      <div className="py-8">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;