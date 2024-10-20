//import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails, logoutProject } from "../actions/projectActions";
import { useEffect } from "react";

const NavBar = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.userLogin);
    const { loading, error, userInfo,isAuthenticated } = auth;
    console.log(userInfo)

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;
    console.log(user)
    

    useEffect(() => {
      if (userInfo) {
          try {
            const token = userInfo.access;
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const decodedPayload = JSON.parse(atob(base64));
            const userId = decodedPayload.user_id; // Adjust this key based on your token's structure
            console.log(userId) // Use this userId for further API calls or other operations
            console.log(userInfo.access)


            dispatch(getUserDetails(userInfo.access,userId))
    
            
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        }
  }, [dispatch, userInfo]);

    const logoutHandler = () => {
      dispatch(logoutProject());
    };

    const authlinks = (
      <div className='flex items-center justify-between gap-4'>
        <h1>Hii {user?.name}</h1>
          <button type="button" onClick={logoutHandler} className=
              "text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">LogOut
          </button>
      </div>
  )
  

  const guestlinks = (
      <div>
          <Link to={"/signin"}>
              <button type="button" className=
                  "text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">Sign In</button>

          </Link>
          <Link to={"/signup"}>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
          </Link>
      </div>
  )

 
    
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GradientDescenders</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          
              {
                isAuthenticated? authlinks : guestlinks
              }
              
              
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
