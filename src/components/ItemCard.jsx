import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import NikeIcon from '../assets/icons/nike-icon.png'
import AdidasIcon from '../assets/icons/adidas-icon.png'
import JordanIcon from '../assets/icons/jordan-icon.png'
import PumaIcon from '../assets/icons/puma-icon.png'
import ReebokIcon from '../assets/icons/reebok-icon.png'
import UnderArmourIcon from '../assets/icons/underArmour-icon.png'
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import Context from './Context';

function ItemCard ({item, id, brand, model, category, price, latestRelease, discount, stock, mainImage, images, wishListcounter, setwishListcounter}) {

    // Hook used to access wishlist and modify it
    const {wishList, setwishList} = useContext(Context)
    
    // Regex used to insert thousand separator in forms' numeric inputs.
    function addNumberThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Hook used to store the wish list status
    const [wishedItem, setwishedItem] = useState(false)

    function handleWishClick (item) {
        // setwishedItem(!wishedItem)
        // wishedItem === false ? setwishListcounter(wishListcounter+1) : setwishListcounter(wishListcounter-1)
        
        wishList.includes(item) ? setwishList(wishList.splice(wishList.indexOf(item), 1)) : setwishList([...wishList, item])
        
        console.log(wishList)
        console.log(wishList.includes(item))
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

        <article class="item-card" >
            <div className='card-header'>

                <img src={showBraindIcon()} className='brand-icon' alt="Brand icon"/>
                {showLatestOrSaleIcon()}
                <Icon icon={heartSolid} className={wishList.includes(item) ? 'wished' : 'notWished'} onClick={() => handleWishClick(item)}/>
            </div>
            <Link to={{
                pathname:'/item',
                state: {
                    brand:{brand}, model:{model}, price:{price}, category:{category}, mainImage:{mainImage}, images:{images}
                }
            }} >
                <img src={mainImage} className="card-img" alt="Product"/>
                <div className="card-footer">
                    <h3 className="card-title">{model}</h3>
                    {showPrice()}
                </div>
            </Link>
        </article>

    )
}

export default ItemCard