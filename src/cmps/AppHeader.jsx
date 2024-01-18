'use client'
import Link from "next/link"
import '@/styles/cmps/AppHeader.scss'
import { usePathname } from "next/navigation"
import Image from "next/image"
import logoImg from '../../public/images/logo.png'



const links = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/posts',
        title: 'Posts'
    },
]

const AppHeader = () => {
    const pathName = usePathname()
    return (
        <nav>
            <Link href='/' className="logo-link"><Image src={logoImg} alt="logo" className="logo-image" /></Link>
            <section>
                {links.map(link =>
                    <Link href={link.path} key={link.title} className={pathName === link.path ? 'active' : ''}>{link.title}</Link>
                )}
            </section>
        </nav>
    )
}

export default AppHeader