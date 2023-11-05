"use client"

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@nextui-org/react';

const OtpForm = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && index >= 0 && index <= 5) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value.slice(0, 1);
            setOtp(updatedOtp);
            if (index < 5 && value) {
                const nextInput = document.getElementById(`otp${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        const otpValue = otp.join('');
        axios
            .post('/verify-otp', { otp: otpValue })
            .then(function (response) {
                console.log(response);
                // Handle successful response
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
                <div className="flex gap-5 ">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            id={`otp${index}`}
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleOtpChange(e, index)}
                            className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    ))}
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-4 w-full ">{errorMessage}</div>
                )}
                <Button type='submit' className='bg-primary-color py-5 w-full text-white font-normal text-lg'>Register</Button>
            </form>
        </div>
    );
};

export default OtpForm;