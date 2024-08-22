import React from 'react'
import { NavLink } from 'react-router-dom'
import campus from '../assets/techno-campus.jpg'
import logo from '../assets/logo.png'

const Explore = () => {
    return (
        <>
            <div className='h-auto w-full overflow-hidden bg-slate-950 flex items-center justify-center flex-col'>
                <div className='phone:h-14 sm:h-20 lg:h-32 phone:w-80% flex justify-center items-center border-b-2 border-red-500'>
                    <img className='phone:h-60% hover:rotate-3 duration-200 ease-in-out cursor-pointer' src={logo} alt="" />
                </div>

                <div className='phone:h-10 sm:h-12 md:h-14 xl:h-20 w-80% text-white flex justify-between items-center'>
                <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/">Home</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/explore">Explore</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/academics">Academics</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/research">Research</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/facility">Facilities</NavLink>
                    <NavLink className='phone:text-s md:text-sm xl:text-2xl cursor-pointer hover:text-red-500 hover:-translate-y-2 hover:font-semibold ease-in-out duration-300' to="/campuslife">Campus Life</NavLink>
                </div>

                <div className='w-full phone:h-32 sm:h-48 md:h-72 xl:h-96 bg-slate-950 overflow-hidden'>
                    <img className='h-full w-full object-cover opacity-30 hover:scale-110 hover:opacity-80 duration-300 ease-in-out' src={campus} alt="" />
                </div>

                <div className='phone:h-auto w-full bg-slate-950 flex flex-col justify-center items-center'>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>The Experience</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Ever since its inception, Techno Main Salt Lake has earned its rightful place in the field of academics. Established in the year 2001, this nationally acclaimed institute has set itself apart from other educational organizations by virtue of its visionary objectives and novel endeavors. Situated in the heart of the city of the joy, Techno Main Salt Lake has grown in leaps and bounds over the past 17 years with its growing emphasis on research infrastructure, hands-on-training opportunities and holistic skill development in aspirants. This institute encourages its students to thrive in an academic albeit wholesome ambience that paves the way for skilled human resources in the future. Faculty development programs, soft skill development initiatives coupled with a multitude of seminars and workshops constitute the highlights of the academic initiatives undertaken by Techno Main Salt Lake.</p>
                    </div>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-96 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Mission</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>
                            1. To identify individual potential, capabilities and skills to achieve confidence and competence

                            <br></br>2. To practice innovative and modern methods of pedagogy encouraging holistic education and research.

                            <br></br>3. To enhance employability skills through collaborative ventures with the industry.

                            <br></br>4. To build leaders and entrepreneurs with integrity and ethics fosteringgrowth and sustainability.
                        </p>

                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Vision</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>
                            Emerge as a centre of excellence for engineering and management studiesencouraging research andbuilding leaders contributing towards individual and social empowerment.
                        </p>
                    </div>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Principal's Explore</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>
                            Techno Main Salt Lake is a top institute in West Bengal, affiliated with MAKAUT. It offers quality education with highly qualified faculty, focusing on both practical and theoretical learning. The college has a strong academic reputation built over 20 years, producing students who excel in higher studies, government exams, and MNC placements. Located in Kolkata's IT hub, it's an ideal place for pursuing high-value academia.

                            <br></br><br></br>Best Wishes!

                            <br></br>Prof. Dr. Avijit Kar

                            <br></br>Ex Professor, Jadavpur University
                            Principal, Techno Main Saltlake.
                        </p>
                    </div>

                    <div className='phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Faculty</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The faculty members of Techno India Group constitute experienced professors from prestigious institutes such as IITs, NITs, ISI, Jadavpur University and IIEST Shibpur. Majority of the professors hold doctoral degrees from renowned national colleges and universities. <b>Faculty development programs organized in collaboration with IITs and NITs serve as platforms for grooming and guiding the young faculty members.</b>

                        <br></br><br></br> Faculty members here are provided innumerable privileges and facilities for pursuing quality research studies. While majority of the professors have authored research papers published in reputed international journals and conferences, many others are involved in research projects funded by national and international bodies such as NASA, ISRO and DST.</p>
                    </div>
                </div>

                <div className='bg-gray-900 phone:h-120 lg:h-125 w-full flex items-center flex-col mt-10'>
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

            </div>
        </>
    )
}

export default Explore
