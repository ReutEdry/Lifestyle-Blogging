'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export function AuthLinks() {
    const pathName = usePathname()
    const isUserLogin = true

    const links = [
        {
            path: '/logout',
            title: 'Logout'
        },
        {
            path: '/new',
            title: 'Create post'
        },
    ]

    return (
        <>
            {isUserLogin ? (
                <>
                    {links.map(link =>
                        <Link href={link.path} key={link.title} className={pathName === link.path ? 'active' : ''}>{link.title}</Link>
                    )}
                </>
            ) : (
                <Link href='/login' className={pathName === 'login' ? 'active' : ''}>Login</Link>
            )}
        </>
    )
}