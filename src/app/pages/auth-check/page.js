"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CheckAuth() {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center h-screen items-center p-44 gap-3">
            <img src={'/asset/maintenance.svg'} className="lg:w-1/3 md:w-2/3" alt='auth-check' />
            <h1 className="lg:text-5xl text-text-color text-center md:text-3xl text-2xl font-bold">Under Maintenance</h1>
            <p className="text-lg text-center lg:w-2/3 md:w-2/3 mt-4 text-description-color">Sorry for the inconvenience but we are performing some maintenance at the moment. If you need to you can always <Link href={'/pages/contactus'} className='text-blue-500 font-medium'>contact us</Link>, otherwise we will be back online shortly!.</p>
            <button onClick={() => router.back()} type="button" className="text-white mt-5 flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1322 12.5739L16.2884 17.7302C16.3879 17.8263 16.4673 17.9412 16.5219 18.0683C16.5765 18.1954 16.6052 18.3321 16.6064 18.4704C16.6076 18.6087 16.5813 18.7459 16.5289 18.8739C16.4765 19.0019 16.3992 19.1182 16.3013 19.216C16.2035 19.3138 16.0872 19.3912 15.9592 19.4436C15.8312 19.4959 15.694 19.5223 15.5557 19.5211C15.4174 19.5199 15.2807 19.4911 15.1536 19.4366C15.0266 19.382 14.9116 19.3026 14.8155 19.2031L8.92281 13.3104C8.72753 13.1151 8.61783 12.8502 8.61783 12.5739C8.61783 12.2977 8.72753 12.0328 8.92281 11.8375L14.8155 5.94478C14.9116 5.84529 15.0266 5.76593 15.1536 5.71134C15.2807 5.65675 15.4174 5.62801 15.5557 5.62681C15.694 5.62561 15.8312 5.65196 15.9592 5.70434C16.0872 5.75672 16.2035 5.83406 16.3013 5.93187C16.3992 6.02967 16.4765 6.14598 16.5289 6.27399C16.5813 6.40201 16.6076 6.53918 16.6064 6.67749C16.6052 6.8158 16.5765 6.95249 16.5219 7.07957C16.4673 7.20666 16.3879 7.3216 16.2884 7.4177L11.1322 12.5739Z" fill="white" />
                </svg>
                Go to home</button>
        </div>
    )
}
