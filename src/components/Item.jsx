import Foto from '../assets/products/adidas/adidas1/adidas1_1.jpeg'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';


function Item ({brand, model, color, price, stock, imgUrl, wishListcounter, setwishListcounter}) {

    // Regex used to insert thousand separator in forms' numeric inputs.
    function numberThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Hook used to store the wish list status
    const [wishedItem, setwishedItem] = useState(false)

    function handleWishClick () {
        setwishedItem(!wishedItem)
        wishedItem === false ? setwishListcounter(wishListcounter+1) : setwishListcounter(wishListcounter-1)
    }

    return (
        <article class="item-card">
            <img src={imgUrl} class="card-img" alt="Product"/>
            <div class="card-body">
                <h3 class="card-title">{model}</h3>
                <p class="card-price">${numberThousandSeparator(price)}</p>
                <Icon icon={heartSolid} className={wishedItem === false ? 'notWished' : 'wished'} onClick={() => handleWishClick()}/>
            </div>
        </article>
    )
}

export default Item