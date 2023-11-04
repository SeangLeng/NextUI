"use client"

import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { useRouter } from 'next/navigation';

export default function LoginQuick() {
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const trueAuth = (value) => value === password;

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-5 p-3'>
            <div className='lg:w-1/3 md:w-1/2 shadow-lg w-full rounded-2xl bg-white flex flex-col gap-[28px] border-2 border-primary-color py-10 px-10'>
                <h2 className='font-semibold text-text-color text-2xl'>Hello, dear!</h2>
                <Input type="text" label="Username" isRequired required variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "border-2",
                            "border-primary-color",
                            "h-[50px]"
                        ],
                    }} />
                <Input type="email" label="email" isRequired required variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "border-2",
                            "border-primary-color",
                            "h-[50px]"
                        ],
                    }} />
                <Input
                    label="Password"
                    variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "border-2",
                            "border-primary-color",
                            "h-[50px]"
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
                            "h-[50px]"
                        ],
                    }}
                    value={confirmPass}
                    onValueChange={setConfirmPass}
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
                    isInvalid={confirmPass && !trueAuth(confirmPass)}
                    color={confirmPass && trueAuth(confirmPass) ? "success" : "danger"}
                    errorMessage={confirmPass && !trueAuth(confirmPass) && "Password does not match."}
                    type={isVisible ? "text" : "password"}
                />
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-full h-0.5 bg-text-color rounded-md'></div>
                    <div>or</div>
                    <div className='w-full h-0.5 bg-text-color rounded-md'></div>
                </div>
                <Button type='submit' className='bg-white text-text-color h-[54px] border-1 border-primary-color font-semibold flex gap-5'>
                    <img src='/asset/google_logo.png' width={20} />
                    <p>Continue with google</p>
                </Button>
                <Button type='submit' onClick={() => router.push("/")} className='bg-primary-color text-white h-[54px] font-semibold'>Login</Button>
            </div>
        </div>
    );
}