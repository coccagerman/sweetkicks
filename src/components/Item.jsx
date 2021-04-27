import NikeIcon from '../assets/icons/nike-icon.png'
import AdidasIcon from '../assets/icons/adidas-icon.png'
import JordanIcon from '../assets/icons/jordan-icon.png'
import PumaIcon from '../assets/icons/puma-icon.png'
import ReebokIcon from '../assets/icons/reebok-icon.png'
import UnderArmourIcon from '../assets/icons/underArmour-icon.png'

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

    // Function used to show the corresponding brand icon in each card
    function braindIcon () {
        if (brand === 'Nike') { return NikeIcon}
        else if (brand === 'Adidas') { return AdidasIcon}
        else if (brand === 'Jordan') { return JordanIcon}
        else if (brand === 'Puma') { return PumaIcon}
        else if (brand === 'Reebok') { return ReebokIcon}
        else if (brand === 'Under Armour') { return UnderArmourIcon}
    }

    return (
        <article class="item-card">
            <img src={braindIcon()} className='brand-icon' alt="Brand icon"/>
            <img src={imgUrl} className="card-img" alt="Product"/>
            <div className="card-body">
                <h3 className="card-title">{model}</h3>
                <p className="card-price">${numberThousandSeparator(price)}</p>
                <Icon icon={heartSolid} className={wishedItem === false ? 'notWished' : 'wished'} onClick={() => handleWishClick()}/>
            </div>
        </article>
    )
}

export default Item