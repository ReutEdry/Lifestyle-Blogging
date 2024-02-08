'use client'

import Link from "next/link"
import Image from "next/image"
import logoImg from '../../public/images/logo.png'
import { useState } from "react"
import { NavLinks } from "./NavLinks"
import { AuthLinks } from "./AuthLinks"
import { usePathname } from "next/navigation"


export function AppHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const pathName = usePathname()

    const links = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/posts',
            title: 'Posts'
        },
    ]

    console.log('isOpen:', isOpen);
    return (
        <nav>
            <Link href='/' className="logo-link"><Image src={logoImg} alt="logo" className="logo-image" /></Link>
            <section className="web-nav">
                {links.map(link =>
                    <Link href={link.path} key={link.title} className={pathName === link.path ? 'active' : ''}>{link.title}</Link>
                )}
                <AuthLinks />
            </section>

            <section className="mobile-nav">
                <label htmlFor="burger" className="burger">
                    <input id="burger" type="checkbox" onClick={() => setIsOpen(!isOpen)} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </section>
            {isOpen && (
                <section className="open-mobile-nav flex">
                    {links.map(link =>
                        <Link href={link.path} key={link.title} className={pathName === link.path ? 'active' : ''}>{link.title}</Link>
                    )}
                    <AuthLinks />
                </section>
            )}
        </nav>
    )
}