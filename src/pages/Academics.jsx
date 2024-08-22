import React from 'react'
import { NavLink } from 'react-router-dom'
import campus from '../assets/techno-campus.jpg'
import logo from '../assets/logo.png'

const Academics = () => {
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
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Academic Program</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The different programs at Techno India are designed to ameliorate the academic profile of students by inculcating the technical knowledge required to excel in industry and research oriented fields. Instead of relying on the traditional teaching methods, this reputed organization focuses on strengthening the knowledge base of the students by employing riveting state-of- the-art teaching tools and enthralling industry-oriented curriculum. Techno India has inevitably captivated the attention of numerous meritorious students across the country through the enlisted academic courses in the fields of Engineering and Technology, Science, Computer Applications and Management.</p>
                    </div>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-50% border-b-[1px] lg:border-b-2 border-white text-center'>Interactive Learning</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Techno India provides virtual interactive learning facilities to its students; such repositories can be accessed anytime and anywhere that ensure that students get hassle free access to digital library, online journals and digital notes 24x7. The digital repositories comprise a vast collection of e-books, publications, notes as well as case-studies from renowned foreign authors and industry experts. As an academic institute of repute, Techno Main strives towards making the learning experience promising for the aspirants so that the location or venue is never a barrier.</p>
                    </div>

                    <div className=' phone:h-32 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Internal Quality Assurance Cell (IQAC)</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>Internal Quality Assurance Cell (IQAC)  is an internal quality assurance mechanism that aims to establish a systematic approach that is deliberate, regular, and effective in enhancing the academic and administrative performance of the institution.</p>
                    </div>

                    <div className='phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Academic Commitee</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The Academic Committee of Techno Main Salt Lake is a distinguished body that holds the responsibility of maintaining the high standard of education imparted at the institution. The committee monitors the quality of education offered to the students, evaluates various research proposals put forth by scholars and professors, and ensures the smooth functioning of research activities within the institution. Additionally, the committee oversees any changes to the syllabi and curriculum, ensuring that they are in line with the current industry requirements and academic trends. The committee plays a pivotal role in shaping the academic landscape of Techno Main Salt Lake and strives to maintain its reputation as a leading institution of higher learning.</p>
                    </div>

                    <div className='phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Grievance Cell</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The Internal Complaints Committee (ICC) of Techno Main Salt Lake is a crucial body responsible for ensuring a safe and inclusive environment for all students and staff members. The ICC functions as the Anti-Sexual Harassment Cell of the institution and aims to sensitize students and staff members on matters of gender and what constitutes sexual harassment. The committee is responsible for processing complaints of sexual harassment and works towards finding appropriate resolutions to such grievances. The ICC operates in strict adherence to the guidelines laid down by the University Grants Commission (UGC) and is committed to upholding the dignity and rights of all individuals. The committee plays an integral role in maintaining the institution's commitment to fostering a safe and supportive campus community.</p>
                    </div>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Disciplinary Commitee</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The Disciplinary Committee of Techno Main Salt Lake is a crucial body that ensures the maintenance of overall discipline within the campus. The committee operates as an effective mechanism for processing issues and complaints related to discipline, and strives to uphold the rules and regulations of the institution. The committee comprises faculty members, staff members and student representatives, who work in close coordination to maintain a harmonious and conducive environment for learning. The Disciplinary Committee operates in strict adherence to the institution's code of conduct and takes appropriate measures to address any violations of the same. The committee plays a vital role in upholding the institution's commitment to discipline and order, and ensures a safe and secure environment for all members of the campus community.</p>
                    </div>

                    <div className=' phone:h-44 sm:h-48 md:h-60 xl:h-72 w-80% flex flex-col items-center justify-center phone:gap-2 xl:gap-7'>
                        <h2 className='font-Montserrat text-white phone:text-sm sm:text-xl md:text-3xl xl:text-5xl w-80% border-b-[1px] lg:border-b-2 border-white text-center'>Examination Commitee</h2>
                        <p className='text-white phone:text-xs md:text-s xl:text-sm text-center'>The Examination Committee of Techno Main Salt Lake is a significant body that plays a critical role in the smooth conduct of examinations. The committee is responsible for the logistical functioning of all exams, including the preparation of exam schedules, allocation of examination centers, and management of exam-related activities. The committee works closely with faculty members, staff members, and external stakeholders to ensure the efficient and fair conduct of all examinations. The committee is committed to upholding the highest standards of academic integrity and ensures the timely release of examination results. The Examination Committee plays a vital role in maintaining the academic rigor and credibility of the institution's examination system, and is dedicated to ensuring a seamless examination process for all students.</p>
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

export default Academics
