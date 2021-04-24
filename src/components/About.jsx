import Img0 from '../assets/about/about0.webp'
import Img1 from '../assets/about/about1.webp'
import Img2 from '../assets/about/about2.webp'
import Img3 from '../assets/about/about3.webp'
import Img4 from '../assets/about/about4.webp'
import Img5 from '../assets/about/about5.webp'


// import Img2 from '../assets/about/about2.webp'

function About () {
    
    return (
        <>
        <section className='aboutUs'>
            <h1>About us</h1>
            <article>
                <div className='img-container'>
                    <img src={Img0} alt="A basketball and five pairs of feet."/>
                </div>
                <div className='text'>
                    <p>Sweetkicks was born in 2008 with the solely purpose of bringing the hottest kicks in the world to your hands, or to your feet actually...</p> 
                </div>
            </article>

            <article >
                <div className='text'>
                    <p>We are a Buenos Aires based company created by a group of friends and shoes junkies. We love shoes, and most of all, we love spreading the shoe love all around.</p>
                </div>
                <div className='img-container'>
                    <img src={Img1} alt="A basketball and five pairs of feet."/>
                </div>

            </article>

            <article>
                <div className='img-container'>
                    <img src={Img2} alt="A basketball and five pairs of feet."/>
                </div>
                <div className='text'>
                    <p>So now you know, when you wanna dress your kicks, there's nothing better than SweetKicks. ;)</p>
                </div>
            </article>

            <div className='links'>
                <div className='link-img-container'>
                    <img src={Img3} alt=""/>
                </div>
                <div className='link-img-container'>
                    <img src={Img4} alt=""/>
                </div>
                <div className='link-img-container'>
                    <img src={Img5} alt=""/>
                </div>
            </div>

        </section>
        </>
    )
}

export default About