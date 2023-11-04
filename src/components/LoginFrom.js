"use client"

import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import SubmitPopover from "./Modal";

export default function LoinForm() {
    const variants = ["flat", "bordered", "underlined", "faded"];
    const [isVisible, setIsVisible] = React.useState(false);
    const [value, setValue] = React.useState({ email: "", password: "" });
    const validateEmail = (value) => value.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex flex-col gap-4 w-1/3">
            <div key={
                variants[1]
            }
                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    color="{}"
                    isRequired
                    value={value.email}
                    onValueChange={(newEmail) => setValue({ ...value, email: newEmail })}
                    type="email"
                    label="Email"
                    isInvalid={isInvalid}
                    colors={isInvalid ? "danger" : "success"}
                    errorMessage={isInvalid && "Please enter a valid email"}
                    className='border-0 ring-0'
                />
            </div>
            <Input
                color="{}"
                isRequired
                value={value.password}
                onValueChange={(newPassword) => setValue({ ...value, password: newPassword })}
                label="password"
                className='border-0 ring-0'
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
            <SubmitPopover />

            <p>The Result: </p>
            <p>Email: {value.email}</p>
            <p>password: {value.password}</p>
        </div>


    )
}
