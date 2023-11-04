"use client";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function NavbarKQuick() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname()

    const menuItems = [
        {
            id: 1,
            path: '/pages/features',
            page: 'Features'
        },
        {
            id: 1,
            path: '/pages/tutorials',
            page: 'Tutorails'
        },
        {
            id: 1,
            path: '/pages/aboutus',
            page: 'About us'
        },
        {
            id: 1,
            path: '/pages/contactus',
            page: 'Contact us'
        },
    ];
    const router = useRouter()

    const varlidNavPath = ["/pages/login", "/pages/signup"]

    if (pathname === varlidNavPath[1] || pathname === varlidNavPath[0]) return null; else return (
        <nav className={"w-full bg-[#FBFBFB] shadow-sm py-[5px] lg:px-[50px] md:px-[10px] px-[10px] flex fixed z-40 justify-between items-center"}>
            <Navbar onMenuOpenChange={setIsMenuOpen} className="w-auto">
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href="/" className="flex gap-5 justify-center items-center">
                            <span>logo</span>
                            <span className="text-primary-color font-semibold text-lg">K-QuickSight</span>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarMenu className="py-[60px]">
                    {menuItems.map(item => (
                        <Link href={item.path} key={item.id} className="hover:text-primary-color font-normal hover:font-semibold hover:bg-blue-300 hover:px-3 hover:py-5 py-3 hover:rounded-lg transition-all">{item.page}</Link>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="lg:flex md:flex hidden justify-center items-center gap-10 transition-all">
                {menuItems.map(item => (
                    <Link href={item.path} key={item.id} className={pathname == item.path ? "hover:bg-blue-300 hover:text-primary-color text-primary-color hover:font-semibold bg-blue-300 px-3 py-1 rounded-lg font-semibold hover:px-3 hover:py-1 hover:rounded-lg transition-all" : "hover:text-primary-color font-normal hover:font-semibold hover:bg-blue-300 hover:px-3 hover:py-1 hover:rounded-lg transition-all"}>{item.page}</Link>
                ))}
            </div>
            <Button onClick={() => router.push('/pages/login')} className='text-white px-7 bg-primary-color font-normal'>
                Log in
            </Button>
        </nav>
    );;


}
