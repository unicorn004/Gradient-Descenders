// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [userInfo, setUserInfo] = useState(null);

//     const navigate = useNavigate();

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             const response = await fetch('http://127.0.0.1:8000/api/token/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }

//             const data = await response.json();
//             setUserInfo(data);
//             localStorage.setItem('userInfo', JSON.stringify(data));
//             navigate('/NewNavBar');
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div className="mt-20 w-1/2 h-96px mx-auto">
//                 <div>
//                     <form className="max-w-md mx-auto" onSubmit={submitHandler}>
//                         <h2 className="text-3xl font-bold text-center mb-10">Sign In</h2>
//                         <div className="relative z-0 w-full mb-5 group">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="floating_email"
//                                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                                 placeholder=""
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <label
//                                 htmlFor="floating_email"
//                                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                                 Email address
//                             </label>
//                         </div>
//                         <div className="relative z-0 w-full mb-5 group">
//                             <input
//                                 type="password"
//                                 name="password"
//                                 id="floating_password"
//                                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                                 placeholder=" "
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <label
//                                 htmlFor="floating_password"
//                                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                             >
//                                 Password
//                             </label>
//                         </div>
//                         <button
//                             type="submit"
//                             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                             disabled={loading}
//                         >
//                             {loading ? 'Loading...' : 'Submit'}
//                         </button>
//                         {error && <p className="text-red-500 mt-2">Incorrect Credentials</p>}
//                         <br />
//                         <Link to="/signup" className="text-sm text-blue-600">Don't have an account? Create a new account</Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import {useNa} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { loginProject } from '../actions/projecctActions';
import { Link, useNavigate } from "react-router-dom";
import { loginProject } from '../actions/projectActions';



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const auth = useSelector((state) => state.userLogin);
    const { loading, error, userInfo,isAuthenticated } = auth;

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Requesting")
        dispatch(loginProject(email, password));
        console.log("Successfully submitted")
    };

    if(isAuthenticated){
      navigate('/')
      return;
  }

    // console.log(isAuthenticated)


    return (
        <div>

            <div className="mt-20 w-1/2 h-96px mx-auto">
                <div>
                    <form className="max-w-md mx-auto" onSubmit={submitHandler}>
                        <h2 className="text-3xl font-bold text-center mb-10">Sign In</h2>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                        {/* {error && <p className="text-red-500 mt-2">Incorrect Credintials !!</p>} */}
                        <br />
                        <Link to={"/signup"} className='text-sm text-blue-600'>Not have a account? Creat new account</Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

