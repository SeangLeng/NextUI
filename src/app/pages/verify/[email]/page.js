"use client"

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Verify = ({ params }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        const data = {
            email: decodeURIComponent(params.email),
            verification_code: verificationCode,
        };

        axios
            .post(`${process.env.NEXT_PUBLIC_BASE_URL}accounts/verify/`, data)
            .then(function (response) {
                console.log(response);
                router.push("/pages/login")
            })
            .catch(function (error) {
                console.log(error);
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('An error occurred. Please try again.');
                }
            });
    };


    return (
        <div className="lg:flex md:flex justify-around items-center h-screen lg:pageLayout md:pageLayout px-5 py-[20%]">
            <form onSubmit={handleSubmit} className='flex flex-col gap-7 lg:w-1/3 md:w-1/2 w-full'>
                <h2 className='text-center font-semibold text-3xl text-primary-color tracking-wide m-5'>Authentication</h2>
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full h-12 text-center border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                    placeholder="Enter verification code"
                />
                {errorMessage && (
                    <div className="text-red-500 mb-4 w-full ">{errorMessage}</div>
                )}
                <Button type='submit' className='bg-primary-color py-6 w-full text-white font-normal text-lg'>Register</Button>
                <div className='flex justify-center items-center gap-5'>
                    <div className='h-0.5 bg-gray-600 w-full rounded-xl'></div>
                    <div>Or</div>
                    <div className='h-0.5 bg-gray-600 w-full rounded-xl'></div>
                </div>
                <Button onClick={() => { router.back() }} type='button' className='backSignup bg-secondary-color text-primary-color py-6 text-lg'>Sign up again</Button>
                <span className='text-text-color'>Already have an account? <Link href={'/pages/login'} className='text-primary-color font-semibold'>Log-in</Link></span>
            </form>
            <img src='/asset/5847181.webp' />
        </div>
    );
};

export default Verify;