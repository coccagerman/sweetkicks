import NikeIcon from '../assets/icons/nike-icon.png'
import AdidasIcon from '../assets/icons/adidas-icon.png'
import JordanIcon from '../assets/icons/jordan-icon.png'
import PumaIcon from '../assets/icons/puma-icon.png'
import ReebokIcon from '../assets/icons/reebok-icon.png'
import UnderArmourIcon from '../assets/icons/underArmour-icon.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';

function ItemCard ({brand, model, category, price, latestRelease, discount, stock, mainImage, images, wishListcounter, setwishListcounter}) {

    // Regex used to insert thousand separator in forms' numeric inputs.
    function addNumberThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Hook used to store the wish list status
    const [wishedItem, setwishedItem] = useState(false)

    function handleWishClick () {
        setwishedItem(!wishedItem)
        wishedItem === false ? setwishListcounter(wishListcounter+1) : setwishListcounter(wishListcounter-1)
    }

    // Function used to show the corresponding brand icon in each card
    function showBraindIcon () {
        switch (brand) {
            default: break;
            case 'Nike': return NikeIcon;
            case 'Adidas': return AdidasIcon;
            case 'Jordan': return JordanIcon;
            case 'Puma': return PumaIcon;
            case 'Reebok': return ReebokIcon;
            case 'Under Armour': return UnderArmourIcon;
        }
    }

    // Function used to display an icon if the product is a latest release or has discount
    function showLatestOrSaleIcon() {
        if (latestRelease) {return <div className='LatestOrSale-icon'><p>Latest release</p></div>}
        else if (discount !== 0) {return <div className='LatestOrSale-icon'><p>On sale</p></div>}
        else {return null}
    }

    // Function used to show the price of the item
    function showPrice() { 
        if (discount !== 0) { return (
            <p className="card-price">
                <span className='noDiscountPrice'>${addNumberThousandSeparator(price)}</span>
                ${addNumberThousandSeparator(price-(price*discount/100).toFixed(0))}
                <span className='discountPercentage'>%{discount} off</span>
            </p>
            ) }
        else { return <p className="card-price">${addNumberThousandSeparator(price)}</p> }
    }

    return (
        <>


        <Link to={{
                pathname:'/item',
                state: {
                    brand:{brand}, model:{model}, price:{price}, category:{category}, mainImage:{mainImage}, images:{images}
                }
            }} >
        <article class="item-card" >
            <div className='card-header'>
                <img src={showBraindIcon()} className='brand-icon' alt="Brand icon"/>
                {showLatestOrSaleIcon()}
                <Icon icon={heartSolid} className={wishedItem ? 'wished' : 'notWished'} onClick={() => handleWishClick()}/>
            </div>
            <img src={mainImage} className="card-img" alt="Product"/>
            <div className="card-footer">
                <h3 className="card-title">{model}</h3>
                {showPrice()}
            </div>
        </article>
        </Link>
        </>
    )
}

export default ItemCard