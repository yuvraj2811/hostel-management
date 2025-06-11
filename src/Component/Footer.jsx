 
 import { NavLink } from 'react-router-dom'

 import React from 'react'
 
 const Footer = () => {
   return (
     <div className=' bg-blue-400'>

      
     
      <div className='h-full w-full flex justify-around items-center flex-wrap'>
     
     <div className='h-4/5 max-w-1/4 min-w-52'>
     <p className='text-2xl text-white text-center  p-2.5'>About Us</p>
     <p className='text-left text-white'>Saraswati Nivas Hostel offers comfortable and secure accommodation for students with essential amenities and a supportive environment for academic focus.</p>
     </div>


     <div className='h-4/5 max-w-1/6 min-w-52'>
     <div className='text-center text-2xl text-white p-2.5'>Quick Links</div>
     <div className='text-center text-white hover:text-2xl duration-500 ease-in-out'><NavLink to="/">Home</NavLink></div>
     <div className='text-center text-white hover:text-2xl duration-500 ease-in-out'><NavLink>Student</NavLink></div>
     <div className='text-center text-white hover:text-2xl duration-500 ease-in-out'><NavLink>Details</NavLink></div>
     <div className='text-center text-white hover:text-2xl duration-500 ease-in-out'><NavLink>Rooms</NavLink></div>
     
     
     </div>
     <div className='h-4/5 max-w-1/4 min-w-52'>
     <div className=' text-white text-center text-2xl p-2.5'>Contact Us</div>
     <div className=' text-white text-center hover:text-2xl duration-500 ease-in-out'><i class="fa-solid fa-location-dot"></i> <a href="https://www.google.co.in/maps/place/Saraswati+boys+hostel/@25.6148543,85.0948826,15z/data=!4m10!1m2!2m1!1ssaraswati+hostel!3m6!1s0x39ed59c9d3b49b11:0x7b5a1e3800798f0d!8m2!3d25.6148543!4d85.113937!15sChBzYXJhc3dhdGkgaG9zdGVsWhIiEHNhcmFzd2F0aSBob3N0ZWySAQtib3lzX2hvc3RlbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSWGFtSlRORkpSRUFFqgFPEAEqFCIQc2FyYXN3YXRpIGhvc3RlbCgAMh8QASIb8Eekzl_-_Un5KrdBhIz0eYq91i-EUPIeRXIHMhQQAiIQc2FyYXN3YXRpIGhvc3RlbOABAPoBBAgUEEM!16s%2Fg%2F11n63zxv7c?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target='_blank'> Saraswati Nivas</a> </div>
     <div className=' text-white text-center hover:text-2xl duration-500 ease-in-out'><i class="fa-solid fa-phone"></i><a href="tel:+91 9965482235"> +91 9965482235</a></div>
     <div className=' text-white text-center hover:text-2xl duration-500 ease-in-out'><i class="fa-solid fa-envelope"></i><a href="mailto:saraswati120@gmail.com"> saraswati120@gmail.com</a></div>
     </div>
     <div className='h-4/5 max-w-1/4 p-2.5 min-w-52'>
      <div className=' text-white text-2xl text-center'>Follow Us</div>
      <div className='text-white text-center text-[1.2rem] p-1 hover:text-3xl duration-500 ease-in-out'><a href="https://www.facebook.com/" target='_blank' ><i class="fa-brands fa-facebook"></i></a></div>
      <div className='text-white text-center text-[1.2rem] p-1 hover:text-3xl duration-500 ease-in-out'><a href="https://www.instagram.com/?hl=en" target='_target'><i class="fa-brands fa-instagram"></i></a></div>
      <div className='text-white text-center text-[1.2rem] p-1 hover:text-3xl duration-500 ease-in-out'><a href="https://x.com/"><i class="fa-brands fa-square-twitter"></i></a></div>
     </div>
    
      <div className='text-white text-center p-3.5'>© 2025 Design with by Gaurav Yuvraj | Saraswati Nivas - [Hostel]. All Rights ReservedHodte.</div>

      </div>
     </div>
   )
 }
 
 export default Footer