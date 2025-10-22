import React from 'react';
import Banner from '../components/Banner';
import Status from '../components/Status';
import { Link } from 'react-router';
import AppsCard from '../components/AppsCard';
import useApps from '../Hooks/useApps';

const Home = () => {
    const {apps}= useApps()
    const trendingApps = apps.slice(0, 8)
    return (
        <div>
            <Banner></Banner>
            <Status></Status>
            <div className='p-6 md:p-10 lg:p-20 space-y-8 md:space-y-10'>
                <div className='space-y-4'>
                <h1 className="text-[#001931] font-bold text-4xl lg:text-5xl text-center">Trending Apps</h1>
                <p className="text-sm lg:text-xl text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
               {
                trendingApps.map(app => (
                    <AppsCard key={app.id} app={app}></AppsCard>
                ))
               }
            </div>
            <div className='flex justify-center items-center'>
            <Link to='/apps' className='btn  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </div>
            </div>
        </div>
    );
};

export default Home;