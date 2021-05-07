import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import { useState } from 'react';

function Item ({brand, model, price}) {

    // Hook used to store the wish list status
    const [wishedItem, setwishedItem] = useState(false)

    function handleWishClick () {
        console.log(brand, model, price)
    }

    return (
        <section className='itemPage'>
                <div className="item-section_carouselAndInfo">
                    <div className="item-carousel">
                        <img src="products/adidas/adidas1/adidas1_1.jpeg" alt="product" className='carousel-img'/>
                    </div>

                    <div className="item-info">
                        <h2>Shoe name {model} </h2>
                        <p>Category: {brand} </p>
                        <p>Price: {price} </p>
                        <p>Sizes: </p>
                        <button className='btn-primary'>Add to cart</button>
                        <Icon icon={heartSolid} className={wishedItem ? 'wished' : 'notWished'} onClick={() => handleWishClick()}/>
                    </div>
                </div>

                <div className='item-description'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati ipsum earum fugiat maiores mollitia ipsa a voluptates modi dolore quam vel dolorum quibusdam totam facilis, voluptate dolorem tenetur ea aperiam rem deleniti! Labore at eos debitis dignissimos totam dolores dicta ea nemo asperiores vel ipsum cupiditate omnis, rem aperiam, sunt soluta. Magni, odio dolorum sequi nisi obcaecati temporibus dolores ipsum nihil aliquid sed odit itaque laudantium quas. Voluptas enim, vitae soluta repellendus esse veniam provident modi eligendi officiis ducimus excepturi tenetur itaque labore mollitia cum deleniti laborum impedit ratione dicta. Nobis sed unde provident ipsa, quasi velit magnam eum.</p>
                </div>

                <div className='item-otherOptions'>
                    
                </div>
        </section>
    )
}

export default Item