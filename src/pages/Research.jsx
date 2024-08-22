import React from 'react'
import { NavLink } from 'react-router-dom'
import campus from '../assets/techno-campus.jpg'
import logo from '../assets/logo.png'

const Research = () => {
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
                    <img className='h-full w-full object-cover opacity-30 hover:opacity-80 hover:scale-110 duration-300 ease-in-out' src={campus} alt="" />
                </div>

                <div className=' phone:h-100 sm:h-72 md:h-115 xl:h-130 w-80% flex flex-col items-center justify-center phone:gap-4 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% md:w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Research & Development</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno Main Salt Lake has the privilege of boasting faculty who are drawn from the premier institutes of the country like IITs, NITs, JU and other distinguished institutions. Almost all faculty members hold doctorates and all of them are dedicated towards furthering the cause of cutting-edge research in their respective domains and departments. Students are provided rigorous academic training and are encouraged to publish academic papers in top journals. Some of the publishers which regularly publish our research work include IEEE, Springer, Taylor and Francis, Elsevier and ACM among many other prestigious publication houses. TMSL also organises a yearly international academic conference (ICCECE) which attracts top academic talent from all over the world and provides students a great opportunity to learn from the best in their fields.</p>
                    <p className='text-white phone:text-s md:text-s xl:text-sm text-center'><b>Highlights :</b></p>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>1. The impressive list of research projects funded by national and international organizations like ISRO (Indian Space Research Organization) reflect the remarkable quality of research work conducted at this reputed institute

                        <br></br><br></br>2. Techno India Group organizes the IEEE Conference i.e. International Conference on Computer, Electrical & Communication Engineering (ICCECE) every year, seeking submission from Industry, Government and Academia focusing on offbeat Interdisciplinary Research Papers on practical as well as theoretical aspects of Computing, Electrical and Communication Engineering.

                        <br></br><br></br>3. Techno India Group has also established a Radio Astronomy Laboratory where the students have communicated with the planet Jupiter, capturing the sounds of its rotation.

                        <br></br><br></br>4. Students of the institute have been sent for Robotics training in Germany where they have acquired various opportunities to setup their vision for their next future step</p>
                </div>

                <div className=' phone:h-52 sm:h-48 md:h-60 xl:h-80 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-90% border-b-[1px] lg:border-b-2 border-white text-center'>We want to be a part of your growth</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>
                    Consultancy is an integral part of Techno India Group: our elite faculty members and renowned experts have been carrying forward 32+ glorious years of expertise in the field of academics for guiding innumerable students.<br></br><br></br>
                    We are extremely proud of our vibrant alumni base who have proved their mettle over time across premier MNCs since the past few decades. As an academic group that believes in imparting quality education, Techno India exploits the industry experience of our alumni and utilizes their exposure to corporate assignments in framing the academic curricula. Incorporating these problem solving approaches and task handling strategies gives aspirants a new perspective to grasp concepts and practices. Through the apt blend between the field of academics and industry, students are trained in sync with industry requirements.<br></br><br></br>
                    We have been a part of the professional journey of a multitude of students: let us guide you to reach the pinnacle of success and prosperity.
                    </p>
                </div>

                <div className='bg-gray-900 phone:h-120 lg:h-125 w-full flex items-center flex-col mt-72'>
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

export default Research
