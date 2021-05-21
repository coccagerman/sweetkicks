import Img0 from '../../assets/about/about0.webp'
import Img1 from '../../assets/about/about1.webp'
import Img2 from '../../assets/about/about2.webp'
import Img3 from '../../assets/about/about3.webp'
import Img4 from '../../assets/about/about4.webp'
import Img5 from '../../assets/about/about5.webp'
import { Link } from "react-router-dom";

function About ({productsDataBase, setProductsArray}) {

    return (
        <>
        <section className='aboutUs'>
            <h1>About us</h1>
            <article>
                <Link to='/gallery' onClick={() => setProductsArray(productsDataBase.filter(item => (item.brand === 'Adidas')))}>
                    <div className='img-container'>
                        <img src={Img0} alt="Adidas shoes."/>
                        <p>See our <br/><span>Adidas</span><br/> collection</p>
                    </div>
                </Link>
                <div className='text'>
                    <p>Sweetkicks was born in 2008 with the solely purpose of bringing the hottest kicks in the world to your hands, or to your feet actually...</p> 
                </div>
            </article>

            <article >
                <div className='text'>
                    <p>We are a Buenos Aires based company created by a group of friends and shoes junkies. We love shoes, and most of all, we love spreading the shoe love all around.</p>
                </div>
                <Link to='/gallery' onClick={() => setProductsArray(productsDataBase.filter(item => (item.category === 'Basketball')))}>
                    <div className='img-container' >
                        <img src={Img1} alt="A basketball and five pairs of feet."/>
                        <p>See our <br/><span>Basketball</span><br/> collection</p>
                    </div>
                </Link>

            </article>

            <article>
                <Link to='/gallery' onClick={() => setProductsArray(productsDataBase.filter(item => (item.brand === 'Jordan')))}>
                    <div className='img-container'>
                        <img src={Img2} alt="Jordan shoes."/>
                        <p>See our <br/><span>Jordan</span><br/> collection</p>
                    </div>
                </Link>
                <div className='text'>
                    <p>So now you know, when you wanna dress your kicks, there's nothing better than SweetKicks. ;)</p>
                </div>
            </article>

            <div className='links'>
                <Link to='/gallery' onClick={() => setProductsArray(productsDataBase.filter(item => (item.discount !== 0)))}>
                    <div className='link-img-container'>
                        <img src={Img3} alt="Converse shoes."/>
                        <p>See our <br/><span>on sale</span><br/> collection</p>
                    </div>
                </Link>
                <Link to='/gallery' onClick={() => setProductsArray([productsDataBase[Math.floor(Math.random() * productsDataBase.length)]])}>
                    <div className='link-img-container'>
                        <img src={Img4} alt="A bunch of Nike shoes."/>
                        <p>I'm<br/><span>feeling lucky</span><br/></p>
                    </div>
                </Link>
                <Link to='/gallery' onClick={() => setProductsArray(productsDataBase.filter(item => (item.brand === 'Nike')))}>
                    <div className='link-img-container'>
                        <img src={Img5} alt="A Nike shoe."/>
                        <p>See our <br/><span>Nike</span><br/> collection</p>
                    </div>
                </Link>
            </div>

        </section>
        </>
    )
}

export default About