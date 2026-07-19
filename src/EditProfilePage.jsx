
import React from 'react';
import {
    Edit,
    MoreVert,
    CameraAlt,
    Language,
    LocationOn,
    AccessTime,
    NorthEast,
} from "@mui/icons-material";

export default function EditProfilePage() {
    return (
        <div className="w-full bg-[#f5f5f7] min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

                {/* Cover Image */}
                <div className="relative h-[220px] md:h-[280px] w-full">
                    <img
                        src="landing-page-background.png"
                        alt="background image"
                        className="w-full h-full object-cover"
                    />

                    {/* Top Right Actions */}
                    <div className="absolute top-4 right-4 flex gap-3">
                        <button className="w-12 h-12 rounded-full bg-gray-200/90 flex items-center justify-center hover:bg-gray-300 transition">
                            <Edit fontSize="small" />
                        </button>

                        <button className="w-12 h-12 rounded-full bg-gray-200/90 flex items-center justify-center hover:bg-gray-300 transition">
                            <MoreVert fontSize="small" />
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative px-6 md:px-10 pb-10">

                    {/* Profile Image */}
                    <div className="absolute -top-24 left-6 md:left-10">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-full border-8 border-white overflow-hidden bg-pink-100">
                                <img
                                    src="vikash.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Camera Button */}
                            <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
                                <CameraAlt />
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="pt-24 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {/* Left Side */}
                        <div className="flex-1">

                            <h1 className="text-4xl font-semibold text-gray-900">
                                Mark Wilson
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-500 text-xl">
                                <span>Product Designer</span>
                                <span>|</span>
                                <span>Pimjo</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mt-5">

                                <div className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium">
                                    <LocationOn sx={{ fontSize: 18 }} />
                                    <span>San Fransisco, USA</span>
                                </div>

                                <div className="flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium">
                                    <Language sx={{ fontSize: 18 }} />
                                    <span>pimjo.com</span>
                                </div>

                                <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium">
                                    <AccessTime sx={{ fontSize: 18 }} />
                                    <span>Joined 25 Jun 2025</span>
                                </div>
                            </div>

                            {/* About */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    About
                                </h2>

                                <p className="text-gray-600 leading-8 text-lg max-w-4xl">
                                    I'm a product designer passionate about creating intuitive
                                    and user-friendly digital experiences. With a strong eye for
                                    detail and a focus on functionality, I transform ideas into
                                    elegant solutions that drive engagement.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Buttons */}
                        <div className="flex flex-wrap gap-4 lg:mt-6">

                            <button className="flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-2xl text-gray-800 font-medium hover:bg-gray-50 transition">
                                <Edit />
                                Edit Profile
                            </button>

                            <button className="flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-2xl text-gray-800 font-medium hover:bg-gray-50 transition">
                                <NorthEast />
                                Copy link
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



