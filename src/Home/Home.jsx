import React from 'react'
import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router';
import Trending from '../Components/Trending/Trending';

const Home = () => {
  const data = useLoaderData();
  return (
    <div className='mt-20'>
        <Banner></Banner>
        <Trending data={data}></Trending>
    </div>
  )
}

export default Home