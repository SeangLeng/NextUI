'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter()
    return (
        <main className="flex flex-col items-center justify-between py-36 gap-5">
            <section className='flex justify-center items-start '>
                <div className='lg:w-1/2 sm:w-1/2 w-full flex flex-col justify-between'>
                    <h1 className='text-text-color font-bold text-[44px]'>
                        Discover, Analyze and Decide With <p className='text-primary-color'>K-QuickSight</p>
                    </h1>
                    <p className='text-description-color text-base mt-[26px] mb-[36px]'>
                        Catalyze your data journey with our powerful tools for discovery, analysis, and informed decision-making. Explore your data full potential and drive success with confidence.
                    </p>
                    <div className='flex gap-[21px]'>
                        <Button onClick={() => router.push('/pages/login')} className='text-white px-7 bg-primary-color font-normal'>
                            Get started
                        </Button>
                        <Button className='bg-white border-2 border-gray-300 w-[200px]  '>
                            <span className='mr-2'>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.83671C0 0.817437 0.95939 -0.0088501 2.14286 -0.0088501H17.8571C19.0406 -0.0088501 20 0.817437 20 1.83671V15.3709C20 16.3901 19.0406 17.2164 17.8571 17.2164H2.14286C0.95939 17.2164 0 16.3901 0 15.3709V1.83671ZM7.07703 5.70797V11.6719C7.07763 11.7716 7.10886 11.8695 7.16753 11.9556C7.2262 12.0416 7.31024 12.1128 7.41114 12.1618C7.51203 12.2109 7.62619 12.2361 7.74204 12.2349C7.8579 12.2337 7.97133 12.2062 8.07083 12.1551L14.0016 9.1731C14.1015 9.12341 14.1844 9.05196 14.242 8.96595C14.2997 8.87992 14.33 8.78234 14.33 8.68302C14.33 8.58369 14.2997 8.48612 14.242 8.40009C14.1844 8.31407 14.1015 8.24262 14.0016 8.19292L8.07083 5.22479C7.97133 5.17368 7.8579 5.14613 7.74204 5.14494C7.62619 5.14376 7.51203 5.16897 7.41114 5.21801C7.31024 5.26707 7.2262 5.33823 7.16753 5.42427C7.10886 5.51031 7.07763 5.60819 7.07703 5.70797Z" fill="#0346A5" />
                                </svg>
                            </span>
                            <span>Watch Tutorials</span>
                        </Button>
                    </div>
                </div>
                <img src={'/asset/first_home_page.png'} alt='homepage' className='w-1/4' />
            </section>
        </main>
    )
}
