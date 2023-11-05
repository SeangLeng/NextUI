"use client"

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

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
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <h2 className='text-center font-semibold text-3xl text-primary-color tracking-widest m-5'>Authentication</h2>
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter verification code"
                />
                {errorMessage && (
                    <div className="text-red-500 mb-4 w-full ">{errorMessage}</div>
                )}
                <Button type='submit' className='bg-primary-color py-5 w-full text-white font-normal text-lg'>Register</Button>
            </form>
        </div>
    );
};

export default Verify;