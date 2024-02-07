'use client'

import Footer from "@/cmps/Footer"
import Image from "next/image"
import travelImg from '../../public/images/solotravel.jpg'
import relaxingImg from '../../public/images/relaxing.jpg'
import foodImg from '../../public/images/food.jpg'
import { useEffect, useState } from 'react'


const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`home ${isVisible ? 'visible' : ''} flex`}>
      <section className="home-container flex">
        <p>
          <span> Welcome to Reut's Lifestyle Blog</span> <br />
          Discover, share, and explore the wonderful world of lifestyle and tips!
          Here, you'll find inspiration, advice, and stories to enhance your everyday life.
          Feel free to explore the various categories and don't forget to share your own experiences with our community.<br />
          <span className='end-p'>Let's embark on this lifestyle journey together and read our top 3 posts of the week</span>

        </p>
        <div className="pic-container">
          <Image src={travelImg} alt="travel" className='pic' />
          <h2>10 reasons why you should travel alone</h2>
          <button>Read more +</button>
        </div>
        <div className="pic-container">
          <Image src={relaxingImg} alt="relaxing" className='pic' />
          <h2>Meditation and inner peace</h2>
          <button>Read more +</button>

        </div>
        <div className="pic-container">
          <Image src={foodImg} alt="food" className='pic' />
          <h2>More then just breakfast</h2>
          <button>Read more +</button>

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home






