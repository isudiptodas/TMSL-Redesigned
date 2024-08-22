import CountUp from 'react-countup'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineArrowSmallRight } from "react-icons/hi2"
import logo from '../assets/logo.png'
import newspaper from '../assets/newspaper.png'
import ap1 from '../assets/Approvals/approval1.png'
import ap2 from '../assets/Approvals/approval2.png'
import ap3 from '../assets/Approvals/approval3.png'
import bs from '../assets/Buzzing/business-studies.jpg'
import computer from '../assets/Buzzing/computer.jpg'
import ce from '../assets/Buzzing/ce.jpg'
import me from '../assets/Buzzing/me.jpg'
import cse from '../assets/Buzzing/cse.jpg'
import ee from '../assets/Buzzing/ee.jpg'
import ft from '../assets/Buzzing/food-technology.jpg'
import mediaScience from '../assets/Buzzing/media-science.jpg'
import vr from '../assets/Today/vr-lab.jpg'
import sap from '../assets/Today/tig-sap.jpg'
import training from '../assets/Today/training-germany.jpg'
import placement from '../assets/Today/placement.jpg'
import campus from '../assets/techno-campus.jpg'
import ragging from '../assets/Glance/antiragging.jpg'
import innovation from '../assets/Glance/glance_Innovation.jpg'
import orientation from '../assets/Glance/glance_orientation.jpg'
import seminar from '../assets/Glance/tig-seminar.jpg'
import conference from '../assets/Glance/tig-ieee-conference.jpg'
import React, { useState } from 'react'
import img1 from '../assets/Recognition/dr-himani-saini.jpg'
import img2 from '../assets/Recognition/dr-mainak-chauduri.jpg'
import img3 from '../assets/Recognition/dr-shalabh-bhatnagar.jpg'
import img4 from '../assets/Recognition/dr-sutanu-chakraborti.jpg'
import img5 from '../assets/Recognition/mr-gulzar-azad.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const LandingPage = () => {

    const cards = [
        { id: 1, img: img1, name: "Dr. Himani Saini", role: "Scientist (ISRO)" },
        { id: 2, img: img2, name: "Dr. Mainak Chauduri", role: "IEEE Member, IIT Kanpur" },
        { id: 3, img: img3, name: "Dr. Shalabh Bhatnagar", role: "Professor and Chairman, Dept of CSA, IIS Bangalore" },
        { id: 4, img: img4, name: "Dr. Sutanu Chakraborti", role: "Dept of CSE, IIT Madras" },
        { id: 5, img: img5, name: "Mr. Gulzar Azad", role: "Country Head for Connectivity, Google, India" },
    ]

    let [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        )
    }

    const openFacebook = () => {
        window.open('https://www.facebook.com/tigkolkata', '_blank');
    }

    const openTwitter = () => {
        window.open('https://x.com/tiukolkata', '_blank');
    }

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/company/techno-india-group/?originalSubdomain=in', '_blank');
    }

    const openInstagram = () => {
        window.open('https://www.instagram.com/technoindiauniversity/', '_blank');
    }

    const engineeringBrochure = () => {
        window.open('https://drive.google.com/file/d/1BqrjHirRduRQ1wRDrwU1PBjwXl_3zfol/view', '_blank');
    }
    const scienceHumanitiesBrochure = () => {
        window.open('https://drive.google.com/file/d/1HLLKNfG7IZG4ZU57X23qQIjFsj5gbQ15/view', '_blank');
    }
    const managementBrochure = () => {
        window.open('https://drive.google.com/file/d/1ZeEt2YqgmcGUKM0cjxf2HghgMZyknosW/view', '_blank');
    }
    const placementBrochure = () => {
        window.open('https://drive.google.com/file/d/1pFsH5s5T06eZI1UosyOCQnQp_SWYZNgC/view', '_blank');
    }
    const informationBrochure = () => {
        window.open('https://drive.google.com/file/d/1a78hY0G4g3JrKqMlY5WKqDosAj_yz159/view', '_blank');
    }
    const corporateBrochure = () => {
        window.open('https://drive.google.com/file/d/1PdDGRGsK3qezs-5JjN4gDqfLCk8DDV5_/view', '_blank');
    }



    return (

        <>
            <div className='h-auto w-full overflow-hidden flex flex-col justify-center items-center bg-slate-950'>
                <div className='phone:h-14 sm:h-20 lg:h-32 phone:w-80% flex justify-center items-center border-b-2 border-red-500'>
                    <img className='phone:h-60% hover:rotate-3 duration-200 ease-in-out cursor-pointer' src={logo} alt="" />
                </div>

                <div className='phone:h-10 sm:h-12 md:h-14 xl:h-20 w-80% text-white flex justify-between items-center'>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/">Home</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/explore">Explore</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/academics">Academics</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/research">Research</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/facility">Facilities</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:font-semibold hover:underline ease-in-out duration-300' to="/campuslife">Campus Life</NavLink>
                </div>

                <div className='phone:h-44 sm:h-56 md:h-60 lg:h-100 xl:h-115 w-80% flex flex-col items-start justify-center md:items-center'>
                    <h2 className='phone:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-white'>Elevate your career at</h2>
                    <h1 className='phone:text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-Montserrat font-bold bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text'>Techno Main Salt Lake</h1>
                    <div className='phone:h-10% md:h-15% lg:h-20% w-full flex justify-start md:justify-center items-center phone:mt-2 phone:gap-3 lg:gap-10'>
                        <button className='bg-white cursor-pointer phone:text-xs lg:text-s xl:text-lg phone:px-2 phone:py-1 md:px-3 md:py-2 lg:px-5 lg:py-3 lg:rounded-3xl xl:px-10 xl:py-4 rounded-xl flex items-center justify-evenly gap-2 hover:border-4 hover:border-red-500 ease-in-out duration-150'>Apply Online <FaArrowRight /></button>
                        <p className='phone:text-xs md:text-s lg:text-sm xl:text-lg hover:underline text-white lg:font-semibold font-Montserrat cursor-pointer'>visit our admission office</p>
                    </div>
                </div>

                <div className='phone:h-32 sm:h-48 md:h-60 lg:h-80 xl:h-96 w-80% flex flex-col justify-center items-center gap-1 xl:gap-4'>
                    <h3 className='phone:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-yellow-300'>Approvals <span className='text-white'>& </span>Affiliations</h3>
                    <p className='text-center phone:text-s md:text-sm lg:text-lg text-white'>Techno Main Saltlake has earned statutory approvals from government bodies</p>
                    <div className='phone:h-30% w-full flex justify-center items-center phone:gap-1 lg:gap-4 lg:mt-3'>
                        <img className='phone:h-60% md:h-70% xl:h-80% cursor-pointer hover:-translate-y-3 duration-200 ease-in-out' src={ap1} />
                        <img className='phone:h-60% md:h-70% xl:h-80% cursor-pointer hover:-translate-y-3 duration-200 ease-in-out' src={ap2} />
                        <img className='phone:h-60% md:h-70% xl:h-80% cursor-pointer hover:-translate-y-3 duration-200 ease-in-out' src={ap3} />
                    </div>
                </div>

                <div className='phone:h-44 sm:h-60 md:h-72 lg:h-120 xl:h-145 w-full bg-gray-900 flex flex-col justify-center items-center md:gap-4 lg:gap-6'>
                    <h3 className='phone:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-white'>What's <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold'>buzzing</span> at Techno Main</h3>
                    <div className='phone:h-60% lg:h-70% w-80% overflow-hidden flex flex-wrap phone:gap-1 items-center justify-center lg:gap-3'>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-30% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={cse} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>CSE & AI/ML<br />CSE IoT<br />CSE Cyber Securty</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-20% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-1 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={ce} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Civil Engineering</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-15% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={mediaScience} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Media Science</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-30% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={computer} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Computer Applications</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-40% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={me} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Mechanical Engineering</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-15% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={ft} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Food Technology</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-25% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={bs} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Business Studies</p>
                        </div>
                        <div className='phone:h-40% lg:h-30% bg-gray-300 phone:w-15% phone:rounded-sm phone:text-xs md:text-s lg:text-sm flex justify-center items-center font-Montserrat text-center flex-wrap px-2 cursor-pointer relative group overflow-hidden sm:rounded-md'>
                            <img className='absolute h-full w-full object-top opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out' src={ee} alt="" />
                            <p className='z-30 group-hover:opacity-0 transition-opacity ease-in-out duration-200'>Electrical Engineering</p>
                        </div>
                    </div>
                </div>

                <div className='phone:h-40 sm:h-52 lg:h-64 w-80% flex flex-col justify-center items-center'>
                    <h3 className='phone:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-white'>Download Brochures</h3>
                    <p className='text-center phone:text-s md:text-sm lg:text-lg text-white phone:mb-2'>Delve into the glorious history of Techno India Group. Rediscover yourself through our quality programs.</p>
                    <div className='h-auto w-full flex flex-wrap justify-center items-center phone:gap-1 md:gap-3 lg:mt-3'>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={engineeringBrochure}>Engineering Brochure <FaArrowRight /></button>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={managementBrochure}>Management Brochure <FaArrowRight /></button>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={informationBrochure}>Information Brochure <FaArrowRight /></button>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={scienceHumanitiesBrochure}>Science & Humnities Brochure <FaArrowRight /></button>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={placementBrochure}>Placement Brochure <FaArrowRight /></button>
                        <button className='bg-gray-300 phone:text-xs lg:text-s flex justify-center items-center phone:px-1 phone:py-1 gap-2 phone:rounded-sm sm:px-2 sm:py-2 sm:rounded-md md:px-3 md:py-3' onClick={corporateBrochure}>Corporate Brochure <FaArrowRight /></button>
                    </div>
                </div>

                <div className='phone:h-52 sm:h-64 md:h-72 lg:h-96 xl:h-125 w-80% flex flex-col justify-center items-center lg:gap-3'>
                    <h3 className='phone:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat text-white'>Where we are Today</h3>
                    <div className='phone:h-70% w-full flex flex-wrap justify-center items-center phone:gap-3 lg:gap-5'>
                        <div className='h-40% w-40% md:w-30% xl:w-40% bg-gray-300 rounded-sm md:rounded-md group relative flex justify-center items-center overflow-hidden'>
                            <p className='flex justify-center items-center font-Montserrat phone:text-s md:text-sm lg:text-lg group-hover:text-opacity-0 duration-200 transition-opacity ease-in-out'>VR Labs</p>
                            <img className='h-full w-full absolute object-cover opacity-0 group-hover:opacity-100 duration-200 transition-opacity ease-in-out' src={vr} alt="" />
                        </div>

                        <div className='h-40% w-40% md:w-30% xl:w-40% bg-gray-300 rounded-sm md:rounded-md group relative flex justify-center items-center overflow-hidden'>
                            <p className='flex justify-center items-center font-Montserrat phone:text-s md:text-sm lg:text-lg group-hover:text-opacity-0 duration-200 transition-opacity ease-in-out text-center'>Training Program at Germany</p>
                            <img className='h-full w-full absolute object-cover opacity-0 group-hover:opacity-100 duration-200 transition-opacity ease-in-out' src={training} alt="" />
                        </div>

                        <div className='h-40% w-40% md:w-30% xl:w-40% bg-gray-300 rounded-sm md:rounded-md group relative flex justify-center items-center overflow-hidden'>
                            <p className='flex justify-center items-center font-Montserrat phone:text-s md:text-sm lg:text-lg group-hover:text-opacity-0 duration-200 transition-opacity ease-in-out text-center'>SAP University Alliances</p>
                            <img className='h-full w-full absolute object-cover opacity-0 group-hover:opacity-100 duration-200 transition-opacity ease-in-out' src={sap} alt="" />
                        </div>

                        <div className='h-40% w-40% md:w-30% xl:w-40% bg-gray-300 rounded-sm md:rounded-md group relative flex justify-center items-center overflow-hidden'>
                            <p className='flex justify-center items-center font-Montserrat phone:text-s md:text-sm lg:text-lg group-hover:text-opacity-0 duration-200 transition-opacity ease-in-out text-center'>Placement</p>
                            <img className='h-full w-full absolute object-cover opacity-0 group-hover:opacity-100 duration-200 transition-opacity ease-in-out' src={placement} alt="" />
                        </div>
                    </div>
                </div>

                <div className='phone:h-56 md:h-60 lg:h-96 xl:h-115 w-full bg-slate-950 flex flex-wrap justify-center items-center phone:gap-3 phone:py-5 relative'>
                    <img className='h-full w-full absolute opacity-30' src={campus} alt="" />
                    <h2 className='w-80% z-50 phone:text-xl lg:text-3xl xl:text-4xl text-center font-Montserrat border-b-2 text-white'>The Experience</h2>
                    <div className='h-30% w-40%  font-Montserrat text-white flex justify-center items-center px-7 text-center phone:text-sm md:text-lg lg:text-2xl xl:text-3xl'>
                        <p className='z-50'><CountUp end={300} duration={2} />+ Teachers</p>
                    </div>
                    <div className='h-30% w-40%  font-Montserrat text-white flex justify-center items-center px-7 text-center phone:text-sm md:text-lg lg:text-2xl xl:text-3xl'>
                        <p className='z-50'><CountUp end={55000} duration={3} separator="," />+ Alumni</p>
                    </div>
                    <div className='h-30% w-40%  font-Montserrat text-white flex justify-center items-center px-7 text-center phone:text-sm md:text-lg lg:text-2xl xl:text-3xl leading-5'>
                        <p className='z-50'><CountUp end={8000} duration={3.5} separator="," />+ Student Base</p>
                    </div>
                    <div className='h-30% w-40%  font-Montserrat text-white flex justify-center items-center px-7 text-center phone:text-sm md:text-lg lg:text-2xl xl:text-3xl'>
                        <p className='z-50'><CountUp end={7800000} duration={4.5} separator="," />+<br></br> Sq.Ft Built Up Area</p>
                    </div>
                </div>

                <div className='phone:h-32 md:h-52 lg:h-72 xl:h-80 w-80% flex flex-col justify-center items-center overflow-hidden md:gap-5'>

                    <div className='phone:h-40% w-full relative flex justify-center items-center'>
                        <div className='h-full w-20% bg-gradient-to-r from-slate-950 to-transparent absolute z-50 left-0'></div>
                        <div className=' phone:h-50% w-full flex justify-center items-center overflow-hidden gap-2 md:gap-5 animate-leftScroll'>
                            <div className='phone:h-full w-30% bg-gray-300 rounded-sm flex justify-center items-center font-bold phone:text-xs md:text-sm md:rounded-md'>
                                Tech Fest
                            </div>
                            <div className='phone:h-full w-30% bg-gray-300 rounded-sm flex justify-center items-center font-bold phone:text-xs md:text-sm md:rounded-md'>
                                TIG Talent Tank
                            </div>
                            <div className='phone:h-full w-30% bg-gray-300 rounded-sm flex justify-center items-center font-bold phone:text-xs md:text-sm md:rounded-md'>
                                Hands On Training
                            </div>
                            <div className='phone:h-full w-30% bg-gray-300 rounded-sm flex justify-center items-center font-bold phone:text-xs md:text-sm md:rounded-md'>
                                Industrial Training
                            </div>
                        </div>
                        <div className='h-full w-20% bg-gradient-to-l from-slate-950 to-transparent absolute z-50 right-0'></div>
                    </div>
                </div>

                <div className='phone:h-20 w-80% flex flex-col justify-center items-center'>
                    <h2 className='font-semibold font-Montserrat text-white md:text-xl lg:text-3xl xl:text-4xl'>At A Glance</h2>
                    <p className='text-white text-center phone:text-s md:text-sm lg:text-lg xl:text-xl'>Scroll through the outstanding highlights of Techno India Group</p>
                </div>

                <div className='h-auto w-90% flex flex-col gap-2'>
                    <div className='phone:h-32 sm:h-44 lg:h-60 xl:h-72 w-full flex items-center justify-center'>
                        <div className='h-80% phone:w-40% lg:w-30% bg-green-300 phone:rounded-sm sm:rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={ragging} alt="" />
                        </div>
                        <div className='h-80% phone:w-60% lg:w-70%  flex flex-col px-2 sm:px-4 lg:px-7 xl:px-14 font-Montserrat justify-center items-start sm:gap-2 text-white'>
                            <h4 className='phone:text-s sm:text-sm lg:text-lg xl:text-2xl font-semibold'>Anti Ragging Cell</h4>
                            <p className='phone:text-xxxs lg:text-s font-Montserrat'>Techno India Group strictly prohibits ragging within the campus and hostel premises. An anti-ragging
                                cell comprising senior faculty members has been established in the premises which attends to every
                                ragging related issue. The campus is under CCTV surveillance 24x7 that strictly disallows students
                                from engaging in notorious activities. Failing to abide by these regulations results into harsh
                                measures being taken against the candidates (including expulsion and imprisonment). Techno India
                                Group ascertains the apt academic ambience by following the norms formulated by AICTE and UGC</p>
                        </div>
                    </div>

                    <div className='phone:h-32 sm:h-44 lg:h-60 xl:h-72 w-full flex items-center justify-center'>

                        <div className='h-80% phone:w-60% lg:w-70% flex flex-col px-2 sm:px-4 lg:px-7 xl:px-14 font-Montserrat justify-center items-end sm:gap-2 text-white'>
                            <h4 className='phone:text-s sm:text-sm lg:text-lg xl:text-2xl font-semibold'>Seminars & Workshops</h4>
                            <p className='phone:text-xxxs lg:text-s font-Montserrat text-end'>Seminars and workshops play a pivotal role in the efficient grooming of students at Techno India.
                                Seminars allow industry professionals and field experts to come under one umbrella and discuss
                                about the current budding issues in the concerned fields. Workshops gradually prepare promising
                                students by inculcating proper problem solving and technical skills much needed to survive in a
                                professional ambience</p>
                        </div>
                        <div className='h-80% phone:w-40% lg:w-30% bg-green-300 phone:rounded-sm sm:rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={seminar} alt="" />
                        </div>
                    </div>

                    <div className='phone:h-32 sm:h-44 lg:h-60 xl:h-72 w-full flex items-center justify-center'>
                        <div className='h-80% phone:w-40% lg:w-30% bg-green-300 phone:rounded-sm sm:rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={conference} alt="" />
                        </div>
                        <div className='h-80% phone:w-60% lg:w-70% flex flex-col px-2 sm:px-4 lg:px-7 xl:px-14 font-Montserrat justify-center items-start sm:gap-2 text-white'>
                            <h4 className='phone:text-s sm:text-sm lg:text-lg xl:text-2xl font-semibold'>IEEE International Conference</h4>
                            <p className='phone:text-xxxs lg:text-s font-Montserrat'>Techno India Group believes that in order to develop an in-depth knowledge on the desired field of
                                study, merely going through the books specified in the curriculum is not sufficient. Students and
                                faculty members need to come under one umbrella and exchange their knowledge and creative
                                thoughts in order to generate better and smarter solutions to real-world tasks</p>
                        </div>
                    </div>

                    <div className='phone:h-32 sm:h-44 lg:h-60 xl:h-72 w-full flex items-center justify-center'>

                        <div className='h-80% phone:w-60% lg:w-70% flex flex-col px-2 sm:px-4 lg:px-7 xl:px-14 font-Montserrat justify-center items-end sm:gap-2 text-white'>
                            <h4 className='phone:text-s sm:text-sm lg:text-lg xl:text-2xl font-semibold'>Orientation Program</h4>
                            <p className='phone:text-xxxs lg:text-s font-Montserrat text-end'>Techno Main Salt Lake organizes an extensive orientation program for incoming students every year
                                to help them acclimate to their new surroundings and understand the academic and administrative
                                systems. The program includes interactive sessions with faculty members and senior students,
                                campus tours, and briefings on the academic curriculum, campus facilities, and student services.</p>
                        </div>
                        <div className='h-80% phone:w-40% lg:w-30% bg-green-300 phone:rounded-sm sm:rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={orientation} alt="" />
                        </div>
                    </div>

                    <div className='phone:h-32 sm:h-44 lg:h-60 xl:h-72 w-full flex items-center justify-center'>
                        <div className='h-80% phone:w-40% lg:w-30% bg-green-300 phone:rounded-sm sm:rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={innovation} alt="" />
                        </div>
                        <div className='h-80% phone:w-60% lg:w-70% flex flex-col px-2 sm:px-4 lg:px-7 xl:px-14 font-Montserrat justify-center items-start sm:gap-2 text-white'>
                            <h4 className='phone:text-s sm:text-sm lg:text-lg xl:text-2xl font-semibold'>Innovation Cell</h4>
                            <p className='phone:text-xxxs lg:text-s font-Montserrat'>Techno Main Salt Lake has established an Innovation Council to foster a culture of innovation and
                                entrepreneurship among students and faculty. The council aims to identify and nurture innovative
                                ideas that have the potential to solve real-world problems and create social impact. It provides a
                                platform for students to showcase their innovative ideas and receive mentorship and support from
                                experienced faculty members and industry experts</p>
                        </div>
                    </div>
                </div>

                <div className='phone:h-36 sm:h-52 md:h-72 xl:h-96 w-full bg-slate-900 relative overflow-hidden flex flex-col justify-center items-center phone:gap-2'>
                    <img className='opacity-10 object-center absolute hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out h-full w-full object-cover' src={newspaper} alt="" />

                    <div className='h-full w-30% absolute right-0 flex justify-center items-center text-white'>
                        <HiOutlineArrowSmallRight className='z-50 text-black bg-white rounded-full sm:text-2xl xl:text-4xl cursor-pointer' onClick={handlePrev} />
                    </div>

                    <h2 className='text-white font-Montserrat phone:text-sm md:text-lg xl:text-3xl w-80% text-center border-b-[1px] border-white'>Wall Of Recognition</h2>
                    <div className='phone:h-60% w-50% overflow-hidden'>
                        <div className='overflow-hidden h-full w-full flex flex-col justify-center items-center sm:gap-2 sm:py-3'>
                            <img className='h-50% object-cover rounded-full border-2 border-white' src={cards[currentIndex].img} alt="" />
                            <p className='phone:text-s md:text-sm xl:text-xl text-white font-Montserrat italic'>{cards[currentIndex].name}</p>
                            <p className='text-white font-Poppins phone:text-xs md:text-sm xl:text-xl'>{cards[currentIndex].role}</p>
                        </div>
                    </div>

                    <div className='h-full w-30% absolute left-0 flex justify-center items-center text-white'>
                        <HiOutlineArrowSmallRight className='rotate-180 z-50  text-black bg-white rounded-full sm:text-2xl xl:text-4xl cursor-pointer' onClick={handleNext} />
                    </div>
                </div>

                <div className='phone:h-52 xl:h-72 w-80% flex flex-col items-center phone:py-5 sm:py-8 xl:py-12 gap-4'>
                    <h2 className='text-white font-Montserrat phone:text-sm md:text-lg xl:text-3xl w-80% text-center'>Connect with <span className='text-red-500 font-bold italic'>Techno india</span></h2>
                    <div className='w-full h-60% flex flex-wrap phone:gap-3 md:gap-7 lg:gap-12 justify-center items-center phone:py-3 phone:px-2'>
                        <button className='bg-blue-500 text-white phone:text-sm phone:px-2 phone:py-1 lg:px-4 lg:py-3 rounded-md hover:bg-blue-800 flex justify-center items-center gap-2 group' onClick={openFacebook}><FaFacebookF className='group-hover:rotate-[360deg] duration-500 ease-in-out transition-all' />Facebook
                        </button>
                        <button className='bg-gray-200 text-black phone:text-sm phone:px-2 phone:py-1 lg:px-4 lg:py-3 rounded-md flex justify-center items-center gap-2 group' onClick={openTwitter}><FaXTwitter className='group-hover:rotate-[360deg] duration-500 ease-in-out transition-all' />Twitter
                            
                        </button>
                        <button className='bg-blue-800 text-white phone:text-sm phone:px-2 phone:py-1 lg:px-4 lg:py-3 rounded-md hover:bg-blue-950 flex justify-center items-center gap-2 group' onClick={openLinkedIn}><FaLinkedin className='group-hover:rotate-[360deg] duration-500 ease-in-out transition-all' />LinkedIn
                            
                        </button>
                        <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 text-white phone:text-sm phone:px-2 phone:py-1 lg:px-4 lg:py-3 rounded-md hover:bg-b flex justify-center items-center gap-2 group' onClick={openInstagram}><FaInstagram className='group-hover:rotate-[360deg] duration-500 ease-in-out transition-all' />Instagram
                           
                        </button>
                    </div>
                </div>

                <div className='bg-gray-900 phone:h-120 lg:h-125 w-full flex items-center flex-col'>
                    <div className='phone:h-14 sm:h-20 lg:h-32 phone:w-80% flex justify-center items-center border-b-[1px] border-white'>
                        <img className='phone:h-60% hover:rotate-3 duration-200 ease-in-out cursor-pointer' src={logo} alt="" />
                    </div>

                    <div className='h-80% w-full md:h-60%  phone:mt-2 md:mt-12 flex phone:flex-col sm:flex-wrap items-center gap-2 sm:pt-4 sm:px-8'>
                        <div className='phone:h-20% w-80% sm:w-30% sm:h-30% lg:h-40% lg:w-50%  flex flex-col items-center phone:pt-3 phone:px-4 phone:gap-2'>
                            <h4 className='text-red-500 font-Montserrat phone:text-s lg:text-sm'>Admission Office</h4>
                            <p className='text-white phone:text-xs text-center lg:text-s'>
                                1. TECHNO INDIA CHINGRIGHATA CAMPUS - LB
                                Z0, EM Bypass, Sector 3,Chingrighata, Kolkata
                                700098, WB
                            </p>
                            <p className='text-white phone:text-xs text-center lg:text-s'>
                            2. TECHNO INDIA (2nd Floor)- EM-4/Z, Sector-V, 
                            Salt Lake, Kolkata-70009Z, WB
                            </p>
                        </div>

                        <div className='phone:h-15% w-80% sm:w-30% sm:h-15% lg:h-25%  flex flex-col items-center phone:pt-3 phone:px-4 phone:gap-2'>
                            <h4 className='text-red-500 font-Montserrat phone:text-s lg:text-sm'>Campus Address</h4>
                            <p className='text-white phone:text-xs lg:text-s text-center'>
                            EM-4/Z, Sector-V, Salt Lake, Kolkata-70009Z, WB
                            </p>
                        </div>

                        <div className='phone:h-20% w-80% sm:w-30% sm:h-25%  flex flex-col items-center phone:pt-3 phone:px-4 phone:gap-2'>
                            <h4 className='text-red-500 font-Montserrat phone:text-s lg:text-sm'>Helpline Number</h4>
                            <p className='text-white phone:text-xs text-center lg:text-s'>
                            9836544416<br></br>
                            9836544417<br></br>
                            9836544418<br></br>
                            9836544419<br></br>
                            </p> 
                        </div>

                        <div className='phone:h-20% w-80% sm:w-30% sm:h-25% lg:h-30%  flex flex-col items-center phone:pt-3 phone:px-4 phone:gap-2'>
                            <h4 className='text-red-500 font-Montserrat phone:text-s lg:text-sm'>Contact Number</h4>
                            <p className='text-white phone:text-xs text-center lg:text-s'>
                            033-23575683 <br></br>
                            033-23575684 <br></br>
                            033-23575686 <br></br>
                            </p> 
                        </div>

                        <div className='phone:h-15% w-80% sm:w-30% sm:h-25% lg:h-30% flex flex-col items-center phone:pt-1 phone:px-4 phone:gap-2'>
                            <h4 className='text-red-500 font-Montserrat phone:text-s lg:text-sm'>Contact Number</h4>
                            <p className='text-white phone:text-xs text-center lg:text-s'>
                            info@ticollege.ac.in <br></br>
                            principal@ticollege.ac.in <br></br>
                            </p> 
                        </div>
                    </div>
                </div>



            </div >
        </>
    )
}

export default LandingPage
