import React from 'react'
import { NavLink } from 'react-router-dom'
import campus from '../assets/techno-campus.jpg'
import logo from '../assets/logo.png'

const Facilities = () => {
  return (
    <>
        <div className='h-auto w-full overflow-hidden bg-slate-950 flex items-center justify-center flex-col'>
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

                <div className='w-full phone:h-32 sm:h-48 md:h-72 xl:h-96 bg-slate-950 overflow-hidden'>
                    <img className='h-full w-full object-cover opacity-30 hover:scale-110 hover:opacity-80 duration-300 ease-in-out' src={campus} alt="" />
                </div>

                <div className=' phone:h-32  md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Libraries</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno Main Salt Lake provides state-of-the-art research facilities owing to which this institute has created a repute of its own in the field of academics and education. Well equipped laboratories with top notch facilities serve as an added boon for the aspirants which help them in exploring their subjects at a greater depth. A variety of laboratories are yet to be opened at this institute to motivate and inspire even more students to enhance their expertise in their respective fields.</p>
                </div>
                <div className=' phone:h-32  md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Laboratory</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno Main Salt Lake provides state-of-the-art research facilities owing to which this institute has created a repute of its own in the field of academics and education. Well equipped laboratories with top notch facilities serve as an added boon for the aspirants which help them in exploring their subjects at a greater depth. A variety of laboratories are yet to be opened at this institute to motivate and inspire even more students to enhance their expertise in their respective fields.</p>
                </div>
                <div className=' phone:h-32 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Smart Class</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The first rate infrastructure of Techno Main Salt lake includes Air-Conditioned well furnished ,spacious classrooms guaranteeing full comfort of the students.The classrooms have the provision of smart boards facilitating advanced techniques in the teaching- learning procedure.Techno Main Salt lake has successfully established a learning environment of premier quality prioritizing the students’development and contributing in the consolidation of their future.</p>
                </div>
                <div className=' phone:h-36 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Soft Skill Development</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno Main Salt Lake organizes soft skills development program for its students. Techno Main firmly believes that in order to make someone's presence felt in corporate environments, he/she needs to be fluent or proficient in communicating his/her thoughts and ideas. Experienced faculty members and experts here guide the students to aptly express themselves, respond to colleagues in a professional environment and convince customers/clients in business-based conversations. Audio and video learning tools are also provided to ensure that the students grasp all the essential communication skills with ease.</p>
                </div>
                <div className=' phone:h-32 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>SAP University Alliances</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The introduction of SAP Labs at Techno Main Salt Lake has been a ground-breaking step that has gone from strength to strength in these years. The SAP Training that is given to students at TMSL has revolutionised the paradigm of Research and Development. Besides providing software solutions to a wide range of complex problems, SAP University Alliances has been creating opportunities for growth and learning for the student community. It caters to integrate business with the IT concepts that leads to a creation of thriving culture, consisting of data scientists, strategists and entrepreneurs. Techno India endorses the latest SAP technologies in the college curriculum that makes TMSL students the ablest of professionals in modern times.</p>
                </div>
                <div className=' phone:h-32 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>VR Lab</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Virtual Reality (VR) is a transformative technology with wide-ranging applications in fields like engineering, medicine, architecture, and manufacturing. Techno India, committed to staying at the forefront of innovation, has established a VR lab on campus, encouraging students to explore this technology for research and development. The institute hosts seminars and workshops with top universities and industries to discuss the impact and future of VR. These initiatives reflect Techno India's dedication to inspiring students to pursue cutting-edge research and innovation.</p>
                </div>
                <div className=' phone:h-32 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-60% border-b-[1px] lg:border-b-2 border-white text-center'>Grooming Session</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno India houses students who come from various regions and are accustomed to their own languages and culture. To prepare these students to join the corporate world, Techno India has a dedicated, in-house team which undertakes year-round efforts in order to groom their soft skills. Special care is taken so that nervous speakers get rid of their stage fright, students get ample opportunities to be in group discussions, and receive proper guidance with regards to professional etiquette. In these grooming classes, students are provided tips on how to crack interviews, given workshops and masterclasses on emerging technology, and afforded opportunites to learn in state-of-the-art communication laboratories.</p>
                </div>
                <div className=' phone:h-32 md:h-40 xl:h-56 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-60% border-b-[1px] lg:border-b-2 border-white text-center'>Seminars & Workshops</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Seminars and workshops play a prominent role in the efficient grooming of students at Techno Main Salt Lake. Seminars allow professionals and field experts to come under one umbrella and discuss about budding issues in various academic fields. Workshops gradually prepare promising students to work in industries by inculcating proper problem solving, strategic and technical skills. Techno Main Salt Lake organizes seminars and workshops which motivates the aspirants to dream bigger and participate in demanding tasks in their respective fields of study.</p>
                </div>

                <div className='bg-gray-900 phone:h-120 lg:h-125 w-full flex items-center flex-col mt-24'>
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

export default Facilities
