import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

export default function App() {
    const data = useLoaderData();
    // console.log(data)
    const [filtered, setFiltered] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const result = data.filter(applist =>
            applist.title.toLowerCase().includes(value)
        );

        setFiltered(result);
    };

    return (
        <div className='text-center px-10'>
            
            <p className='text-3xl md:text-5xl mt-6 font-bold '>
                Our All <br />
                <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                    Applications
                </span>
            </p>

            <p className='text-sm mt-4 md:mt-6 text-gray-400 font-bold'>
               Explore All Apps on the Market developed by us. We code for Millions
            </p>


            <div className='flex flex-col md:flex-row items-center justify-between gap-4 my-10 '>
                
                <p className='font-bold text-lg md:text-xl border-b-2 border-gray-600'>
                    ({filtered.length}) Apps Found
                </p>

                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Your Desire Apps......"
                    className='w-full md:w-64 lg:w-75 rounded-lg p-2 bg-base-300 border-2 outline-none'
                />
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 justify-items-center mb-10'>
                {filtered.map(singleData => (
                    <AppCard key={singleData.id} singleData={singleData} />
                ))}
            </div>

        </div>
    );
}