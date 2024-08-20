import React from 'react'
import { NavLink } from 'react-router-dom'
import campus from '../assets/techno-campus.jpg'
import logo from '../assets/logo.png'

const CampusLife = () => {
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

                <div className=' phone:h-36  md:h-48 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-60% border-b-[1px] lg:border-b-2 border-white text-center'>Fresher's Welcome</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The Freshers' Welcome organised by Techno Main Salt Lake is a highly anticipated occasion that is eagerly awaited by all new students joining the institution. The event is typically organised with great enthusiasm and energy, with the aim of making the new students feel welcome and comfortable in their new surroundings. Various activities are planned for the day, such as introductory speeches, games, and performances by senior students. The event also provides an opportunity for new students to interact with each other and make new friends. The students end up forming bonds that shall last them a lifetime and create connections and build networks that shall stand them in good stead in their professional lives. Overall, the Freshers' Welcome is a memorable experience that sets the tone for a fulfilling academic journey for new students.</p>
                </div>
                <div className=' phone:h-48 md:h-52 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-60% border-b-[1px] lg:border-b-2 border-white text-center'>Student Life</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno Main Salt Lake is the best private college that fosters academic, intellectual and social development of students. Excellent modes of imparting knowledge on the latest technology through comprehensive classroom teaching, practical, hands on training and participation in conferences allow students to thrive academically and professionally, in future. Utmost care is taken to endorse them on their journey towards career development and professional success. Most of our students are presently working in prestigious roles at highly reputed organizations not only in India, but also all over the world. Integrated procedures of grooming and extensive sessions on Communicative English prepare our students to reach greater heights in their academic as well as professional career. Inspite of the rigorous, disciplined academic curricula, Techno Main Salt Lake provides the students with endless possibilities for their creative outlet in various fests, co-curricular activities and regular workshops. We encourage our students to participate actively in state and national level competitions, which provide them with an extra edge in their professional, technical, managerial and cultural sectors.</p>
                </div>
                <div className=' phone:h-36 md:h-44 xl:h-52 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-40% border-b-[1px] lg:border-b-2 border-white text-center'>Sports</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Holistic grooming of students is paid utmost importance at Techno Main Salt Lake. A variety of sports activities such as table tennis, badminton, cricket etc are organized at this institute. Students here participate in national and international collegiate events where they have been known to perform exceptionally well; majority of them have bagged prizes and medals for their distinguished performance.</p>
                </div>
                <div className=' phone:h-36 md:h-44 xl:h-52 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-60% border-b-[1px] lg:border-b-2 border-white text-center'>Cultural Activities</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The overflowing enthusiasm of the students is reflected in their involvement in various cultural clubs such as dramatics, dance, music, photography, fine arts, debating and literary arts. Techno India Salt Lake students have been known to outperform their peers at notable Inter-collegiate festivals. Annual Concerts, Talent Hunts, professional performances by renowned artists, art exhibitions and workshops constitute just the tip of the iceberg of the various co-curricular activities that the students remain engrossed in every year.</p>
                </div>
                <div className=' phone:h-36 md:h-44 xl:h-52 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                    <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-40% border-b-[1px] lg:border-b-2 border-white text-center'>Tech Fest</h2>
                    <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno India’s annual tech meet known as Techfest has managed to capture media attention in the last few years. Techfest harbors Inter-collegiate events and competitions focused on recent technological innovations as well as lectures by distinguished personalities in the fields of science, technology and management. Packed with intriguing workshops on current eco-friendly technologies, Techfest has managed to enthrall youth from across the country.</p>
                </div>
        </div>
    </>
  )
}

export default CampusLife
