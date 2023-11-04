'use client'

import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const isInvalid = React.useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true;
    }, [email]);

    function confirmPassword_check(password, confirmPassword) {
        if (password === ' ' || confirmPassword === ' ') {
            return
        } else if (password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    const handleSignUp = () => {
        if (confirmPassword_check(password, confirmPassword)) {
            // router.push("/pages/verify")
            console.log(confirmPassword_check(password, confirmPassword))
        } else {
            return null;
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-5 p-3'>
            <div className='lg:w-1/3 md:w-1/2 shadow-lg w-full rounded-2xl bg-white flex flex-col gap-[28px] border-2 border-primary-color py-10 px-10'>
                <h2 className='font-semibold text-text-color text-2xl'>Hello, {username ? username : "dear!"}</h2>
                <Input
                    label='Username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    classNames={{
                        inputWrapper: [
                            'border-2 border-primary-color bg-white'
                        ]
                    }}
                />
                <Input
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={isInvalid && "Please enter a valid email"}
                    label='Email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    classNames={{
                        inputWrapper: [
                            'border-2 border-primary-color bg-white'
                        ]
                    }}
                />
                <Input
                    label="Password"
                    variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "border-2",
                            "border-primary-color",

                        ],
                    }}
                    required
                    value={password}
                    onValueChange={setPassword}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                />
                <Input
                    label="Confirm password" variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "border-2",
                            "border-primary-color",

                        ],
                    }}
                    value={confirmPassword}
                    onValueChange={setConfirmPassword}
                    required
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    isInvalid={confirmPassword && !trueAuth(confirmPassword)}
                    color={confirmPassword && trueAuth(confirmPassword) ? "success" : "danger"}
                    errorMessage={confirmPassword && !trueAuth(confirmPassword) && "Password does not match."}
                    type={isVisible ? "text" : "password"}
                />
                {
                    passwordError ? (
                        <p className='text-red-700 font-normal'>Can not register, Try again</p>
                    ) : (null)
                }
                <Button type='submit' className='bg-white text-text-color h-[54px] border-1 border-primary-color font-semibold flex gap-5'>
                    <img src='/asset/google_logo.png' width={20} />
                    <p>Continue with google</p>
                </Button>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-full h-0.5 bg-text-color rounded-md'></div>
                    <div>or</div>
                    <div className='w-full h-0.5 bg-text-color rounded-md'></div>
                </div>
                {
                    !isLoading ? (
                        <Button type='submit' onClick={handleSignUp} className='bg-primary-color text-white h-[54px] font-semibold'>register</Button>
                    ) : (
                        <Button isLoading type='submit' className='bg-primary-color text-white h-[54px] font-semibold'>Registering</Button>
                    )
                }

                <span className='text-text-color'>Alrady have an account? <Link href='/pages/login' className='text-primary-color font-semibold'>Login</Link></span>
            </div>
        </div>
    )
}
