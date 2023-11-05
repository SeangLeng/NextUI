"use client"


import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Handle_error() {
    const router = useRouter();
    return (
        <div className="flex justify-center h-screen items-center">
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <img
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md text-red-600 font-semibold">Server no respone</p>
                        <p className="text-small text-default-500">kquickSight.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className='text-red-700 font-semibold'>Seems like, you have authentcate</p>
                </CardBody>
                <Divider />
                <CardFooter className='flex justify-center items-center'>
                    <Button onClick={() => router.back()} className=''>Back then </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
