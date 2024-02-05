import Image from "next/image"
import logoImg from '../../public/images/logo.png'
import lifestyleImg from '../../public/images/footerpic.jpg'
import facebookImg from '../../public/images/facebook.png'
import githubkImg from '../../public/images/github.png'
import linkdinImg from '../../public/images/linkdin.png'

export default function Footer() {
    return (
        <footer>
            <section className="footer-top">
                <div className="lifetyle-container">
                    <Image src={lifestyleImg} alt="lifestyle" className="lifestyle-img" />
                </div>
                <div className="logo-container">
                    <Image src={logoImg} className="logo-image " alt="logo" />
                </div>
                <div className="contact">
                    <a href="https://www.facebook.com/reut.edry.10" target="_blank" rel="noopener noreferrer">
                        <div><Image src={facebookImg} alt="facebook" className="img" /> </div>
                    </a>
                    <a href="https://www.linkedin.com/in/reut-edry-a34306228" target="_blank" rel="noopener noreferrer">
                        <div><Image src={githubkImg} alt="linkdin" className="img" /></div>
                    </a>
                    <a href="https://github.com/ReutEdry" target="_blank" rel="noopener noreferrer">
                        <div><Image src={linkdinImg} alt="github" className="img" /></div>
                    </a>
                </div>
            </section>
            <p className="footer-bottom">©2024 Reut's blog. All rights reserved.</p>
        </footer>
    )
}


