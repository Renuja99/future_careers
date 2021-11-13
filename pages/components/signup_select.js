import React from "react";
import Link from 'next/link'

export default function Home() {

    
    
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">Our pricing plan</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Create your account as
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think
                        </p>
                        
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />

                        <Link href={'/components/user_profile_form'}>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Job Seeker</h2>
                                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">FREE</p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                        </div>
                        </Link>
                        <Link href={'/components/user_profile_form'}>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-10 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Company/Employer/Hirer</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                        $18<span className="font-normal text-base">/mo</span>
                                    </p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Custom dashboard with supported features for best experience</p>
                            </div>
                        </div>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
