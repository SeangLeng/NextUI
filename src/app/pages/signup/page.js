"use client"

import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon';
import { ErrorMessage, Field, Form, Formik, useField, useFormikContext } from 'formik';
import React, { use, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
// import './globals.css'

export default function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [error_email, setError_email] = useState(false);
    const [error_password, setError_password] = useState(false);
    const [error_con_password, setError_con_password] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const router = useRouter();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [showPassword_con, setShowPassword_con] = useState(false);

    const toggle_ConPasswordVisibility = () => {
        setShowPassword_con(!showPassword_con);
    };
    const [isLoading, setLoading] = useState(false);

    const inputStyle = "border-2 border-primary-color px-5 py-4 rounded-xl w-full";
    const showPassword_icon = {
        show: <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.492 8.21558C23.1383 3.62313 18.4785 0.51593 13.143 0.51593C7.80754 0.51593 3.14651 3.62531 0.794084 8.21602C0.694797 8.41242 0.643066 8.62941 0.643066 8.84948C0.643066 9.06955 0.694797 9.28654 0.794084 9.48294C3.14782 14.0754 7.80754 17.1826 13.143 17.1826C18.4785 17.1826 23.1396 14.0732 25.492 9.48251C25.5913 9.28611 25.643 9.06912 25.643 8.84905C25.643 8.62897 25.5913 8.41198 25.492 8.21558ZM13.143 15.0993C11.9069 15.0993 10.6985 14.7327 9.67073 14.0459C8.64292 13.3592 7.84184 12.3831 7.3688 11.241C6.89575 10.099 6.77198 8.84233 7.01313 7.62995C7.25429 6.41757 7.84955 5.30392 8.72362 4.42985C9.5977 3.55577 10.7113 2.96051 11.9237 2.71936C13.1361 2.4782 14.3928 2.60197 15.5348 3.07502C16.6769 3.54806 17.653 4.34914 18.3397 5.37695C19.0265 6.40476 19.393 7.61313 19.393 8.84926C19.3934 9.67014 19.2321 10.483 18.9181 11.2415C18.6042 12 18.1438 12.6891 17.5634 13.2696C16.9829 13.85 16.2938 14.3104 15.5353 14.6243C14.7768 14.9383 13.9639 15.0997 13.143 15.0993ZM13.143 4.6826C12.7711 4.68779 12.4016 4.74312 12.0445 4.84709C12.3389 5.24713 12.4801 5.73941 12.4427 6.23466C12.4052 6.72991 12.1915 7.19533 11.8403 7.54653C11.4891 7.89772 11.0237 8.11143 10.5284 8.1489C10.0332 8.18636 9.5409 8.04511 9.14087 7.75074C8.91308 8.58997 8.9542 9.4795 9.25844 10.2941C9.56269 11.1088 10.1147 11.8075 10.8369 12.292C11.559 12.7764 12.4149 13.0222 13.2841 12.9947C14.1532 12.9673 14.9919 12.668 15.6821 12.1389C16.3722 11.6098 16.879 10.8777 17.1312 10.0454C17.3835 9.21322 17.3684 8.32287 17.0881 7.49969C16.8077 6.67651 16.2763 5.96195 15.5687 5.4566C14.861 4.95125 14.0126 4.68055 13.143 4.6826Z" fill="black" />
        </svg>
        ,
        Unshow: <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4999 16.125C9.53702 16.125 7.13859 13.8316 6.91788 10.9254L2.82023 7.75857C2.28156 8.43436 1.78585 9.14881 1.38585 9.93006C1.29649 10.1068 1.24994 10.3021 1.24994 10.5002C1.24994 10.6982 1.29649 10.8935 1.38585 11.0703C3.50421 15.2035 7.69796 18 12.4999 18C13.5511 18 14.5652 17.8437 15.5425 17.5914L13.5155 16.023C13.1808 16.0877 12.8408 16.1218 12.4999 16.125ZM24.7585 18.3945L20.4402 15.057C21.7519 13.9515 22.8308 12.5962 23.614 11.0699C23.7033 10.8931 23.7499 10.6978 23.7499 10.4998C23.7499 10.3017 23.7033 10.1064 23.614 9.92967C21.4956 5.79646 17.3019 2.99998 12.4999 2.99998C10.4888 3.00242 8.51031 3.50872 6.74523 4.47264L1.7757 0.631621C1.71089 0.581194 1.63679 0.544031 1.55762 0.522256C1.47844 0.50048 1.39576 0.494519 1.31428 0.504713C1.2328 0.514906 1.15413 0.541055 1.08277 0.581665C1.0114 0.622274 0.948736 0.676549 0.898353 0.741387L0.131556 1.7285C0.0298368 1.85935 -0.015743 2.02525 0.00484145 2.1897C0.0254259 2.35416 0.110489 2.5037 0.241322 2.60545L23.2241 20.3683C23.2889 20.4188 23.363 20.4559 23.4422 20.4777C23.5214 20.4995 23.6041 20.5054 23.6856 20.4952C23.767 20.4851 23.8457 20.4589 23.9171 20.4183C23.9884 20.3777 24.0511 20.3234 24.1015 20.2586L24.8687 19.2715C24.9703 19.1406 25.0159 18.9746 24.9952 18.8102C24.9745 18.6457 24.8894 18.4962 24.7585 18.3945ZM17.5819 12.8476L16.0468 11.6609C16.1761 11.2873 16.2447 10.8953 16.2499 10.5C16.2575 9.92118 16.1293 9.34865 15.8755 8.8284C15.6217 8.30814 15.2495 7.85465 14.7886 7.50436C14.3278 7.15407 13.7912 6.91674 13.2221 6.81144C12.6529 6.70614 12.0669 6.73579 11.5112 6.89803C11.7468 7.21721 11.8742 7.60329 11.8749 7.99998C11.8691 8.13198 11.8489 8.26296 11.8148 8.39061L8.93937 6.16834C9.93819 5.33365 11.1982 4.87594 12.4999 4.87498C13.2387 4.87457 13.9704 5.01978 14.653 5.30232C15.3356 5.58486 15.9559 5.99918 16.4783 6.52159C17.0007 7.044 17.415 7.66426 17.6976 8.3469C17.9801 9.02954 18.1253 9.76118 18.1249 10.5C18.1249 11.3449 17.9183 12.1324 17.5819 12.848V12.8476Z" fill="black" />
        </svg>

    }

    const handle_register = (values) => {
        const data = {
            username: values.username,
            email: values.email,
            password: values.password
        }
        setLoading(true);
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}accounts/register/`, data)
            .then(function (response) {
                // console.log(response);
                console.log(response.data.data)
                router.push(`/pages/verify/${response.data.data.email}`)
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessage(error?.response?.data?.errors)
                setLoading(false);
            });
    }

    return (
        <div className='flex justify-center items-center min-h-screen px-4'>
            <a href='/' className='fixed top-5 right-10'>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 4.3125C12.6958 4.3125 4.3125 12.6958 4.3125 23C4.3125 33.3042 12.6958 41.6875 23 41.6875C33.3042 41.6875 41.6875 33.3042 41.6875 23C41.6875 12.6958 33.3042 4.3125 23 4.3125ZM29.7661 27.7339C29.9052 27.866 30.0165 28.0247 30.0933 28.2005C30.1701 28.3763 30.2109 28.5658 30.2134 28.7576C30.2159 28.9495 30.1799 29.1399 30.1076 29.3176C30.0353 29.4954 29.9282 29.6568 29.7925 29.7925C29.6568 29.9282 29.4954 30.0353 29.3176 30.1076C29.1399 30.1799 28.9495 30.2159 28.7576 30.2134C28.5658 30.2109 28.3763 30.1701 28.2005 30.0933C28.0247 30.0165 27.866 29.9052 27.7339 29.7661L23 25.0332L18.2661 29.7661C17.9944 30.0243 17.6325 30.1662 17.2576 30.1614C16.8828 30.1566 16.5246 30.0055 16.2596 29.7404C15.9945 29.4754 15.8434 29.1172 15.8386 28.7424C15.8338 28.3675 15.9757 28.0056 16.2339 27.7339L20.9668 23L16.2339 18.2661C15.9757 17.9944 15.8338 17.6325 15.8386 17.2576C15.8434 16.8828 15.9945 16.5246 16.2596 16.2596C16.5246 15.9945 16.8828 15.8434 17.2576 15.8386C17.6325 15.8338 17.9944 15.9757 18.2661 16.2339L23 20.9668L27.7339 16.2339C28.0056 15.9757 28.3675 15.8338 28.7424 15.8386C29.1172 15.8434 29.4754 15.9945 29.7404 16.2596C30.0055 16.5246 30.1566 16.8828 30.1614 17.2576C30.1662 17.6325 30.0243 17.9944 29.7661 18.2661L25.0332 23L29.7661 27.7339Z" fill="url(#paint0_linear_92_5055)" />
                    <defs>
                        <linearGradient id="paint0_linear_92_5055" x1="23" y1="4.3125" x2="23" y2="41.6875" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFA561" />
                            <stop offset="1" stop-color="#FD6D00" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>
            <Formik
                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                        setError(true);
                    } else {
                        setError(false);
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                        setError_email(true);
                    } else {
                        setError_email(false);
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be at least 8 characters long';
                        setError_password(true);
                    } else {
                        setError_password(false);
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = 'Required';
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = 'Passwords do not match';
                        setError_con_password(true);
                    } else {
                        setError_con_password(false);
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        handle_register(values);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='lg:w-1/3 md:w-2/3 shadow-lg w-full rounded-2xl justify-center items-start bg-white flex flex-col gap-[28px] border-2 border-primary-color py-10 px-10'>
                        <h2 className='font-semibold text-text-color text-2xl'>Hello, dear!</h2>
                        <div className="inputStyleWidth">
                            <Field
                                placeholder="Username"
                                type="text"
                                name="username"
                                id="username"
                                className={`${inputStyle} ${error ? "bg-red-300/50 border-2 border-red-600" : ""}`}
                            />
                            <p className='text-red-600 font-normal'>{errorMessage?.username}</p>
                            <ErrorMessage name="username" component="div" className="text-red-500 mt-1" />
                        </div>


                        <div className="inputStyleWidth w-full">
                            <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                                id="email"
                                className={`${inputStyle} ${error_email ? "bg-red-300/50 border-2 border-red-600" : ""}`}
                            />
                            <p className='text-red-600 font-normal'>{errorMessage?.email}</p>
                            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="inputStyleWidth">
                            <div className='flex relative'>
                                <Field
                                    placeholder="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    className={`${inputStyle} ${error_password ? "bg-red-300/50 border-2 border-red-600" : ""}`}
                                />
                                <button className='absolute right-5 translate-x-[50%] h-full w-50' onClick={togglePasswordVisibility} >{showPassword ? showPassword_icon.show : showPassword_icon.Unshow}</button>
                            </div>
                            <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
                        </div>

                        <div className="inputStyleWidth">
                            <div className='flex relative'>
                                <Field
                                    placeholder="confirm password"
                                    type={showPassword_con ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className={`${inputStyle} ${error_con_password ? "bg-red-300/50 border-2 border-red-600" : ""}`}
                                />
                                <button className='absolute right-5 translate-x-[50%] h-full' onClick={toggle_ConPasswordVisibility} >{showPassword_con ? showPassword_icon.show : showPassword_icon.Unshow}</button>
                            </div>
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1" />
                        </div>
                        <Button type='button' className='bg-white w-full text-text-color h-[54px] border-1 border-primary-color font-semibold flex gap-5'>
                            <img src='/asset/google_logo.png' width={20} />
                            <p>Continue with google</p>
                        </Button>
                        <div className='flex justify-center items-center gap-5 w-full'>
                            <div className='h-0.5 bg-gray-600 w-full rounded-xl'></div>
                            <div>Or</div>
                            <div className='h-0.5 bg-gray-600 w-full rounded-xl'></div>
                        </div>
                        {
                            isLoading ? (
                                <Button
                                    isLoading
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-4 bg-primary-color text-white font-semibold rounded-xl px-5 py-5 focus:outline-none hover:bg-blue-600"
                                >
                                    Register
                                </Button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-4 bg-primary-color text-white font-semibold rounded-xl px-5 py-4 focus:outline-none hover:bg-blue-600"
                                >
                                    Register
                                </button>
                            )
                        }
                        <span className='text-text-color'>Already have an account? <Link href={'/pages/login'} className='text-primary-color font-semibold'>Log-in</Link></span>
                    </Form>
                )}
            </Formik>
        </div>
    );
}