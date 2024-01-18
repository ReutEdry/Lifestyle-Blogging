import Image from "next/image"
import logoImg from '../../public/images/logo.png'
import lifestyleImg from '../../public/images/footerpic.jpg'
import facebookImg from '../../public/images/facebook.png'
import githubkImg from '../../public/images/github.png'
import linkdinImg from '../../public/images/linkdin.png'
import '@/styles/cmps/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <section className="footer-top">
                <div className="lifetyle-container">
                    <Image src={lifestyleImg} alt="lifestyle" className="lifestyle-img" />
                </div>
                <div className="logo-container">
                    <Image src={logoImg} className="logo-image " alt="logo" />
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis saepe velit earum </p> */}
                </div>
                <div className="contact">
                    <div><Image src={facebookImg} alt="facebook" className="img" /> </div>
                    <div><Image src={githubkImg} alt="linkdin" className="img" /></div>
                    <div><Image src={linkdinImg} alt="github" className="img" /></div>
                </div>
            </section>
            <p className="footer-bottom">©2024 Reut's blog. All rights reserved.</p>
        </footer>
    )
}

export default Footer