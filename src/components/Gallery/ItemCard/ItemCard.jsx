import { Link } from "react-router-dom";
import { useContext } from 'react';
import NikeIcon from '../../../assets/icons/nike-icon.png'
import AdidasIcon from '../../../assets/icons/adidas-icon.png'
import JordanIcon from '../../../assets/icons/jordan-icon.png'
import PumaIcon from '../../../assets/icons/puma-icon.png'
import ReebokIcon from '../../../assets/icons/reebok-icon.png'
import UnderArmourIcon from '../../../assets/icons/underArmour-icon.png'
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import Context from '../../../Context';

function ItemCard ({item}) {
    
    // Hook used to access context
    const context = useContext(Context)
    
    // Funtion that add/removes items from the wishlist
    function handleWishlistClick (item) {
        context.wishList.includes(item) ? context.wishlistSubstract(item) : context.wishlistAdd(item)
    }

    // Function used to show the corresponding brand icon in each card
    function showBraindIcon () {
        switch (item.brand) {
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
        if (item.latestRelease) {return <div className='LatestOrSale-icon'><p>Latest release</p></div>}
        else if (item.discount !== 0) {return <div className='LatestOrSale-icon'><p>On sale</p></div>}
        else {return null}
    }

    // Function used to show the price of the item
    function showPrice() { 
        if (item.discount !== 0) { return (
            <p className="card-price">
                <span className='noDiscountPrice'>${context.addNumberThousandSeparator(item.price)}</span>
                ${context.addNumberThousandSeparator(item.price-(item.price*item.discount/100).toFixed(0))}
                <span className='discountPercentage'>%{item.discount} off</span>
            </p>
            ) }
        else { return <p className="card-price">${context.addNumberThousandSeparator(item.price)}</p> }
    }

    return (

        <article class="item-card" >
            <div className='card-header'>
                <img src={showBraindIcon()} className='brand-icon' alt="Brand icon"/>
                {showLatestOrSaleIcon()}
                <Icon icon={heartSolid} className={context.findInWishlist(item.id) ? 'wished' : 'notWished'} onClick={() => handleWishlistClick(item)}/>
            </div>
            <Link to={`/item/${item.id}`} onClick={()=> window.scrollTo(0, 0)}>
                <img src={`/${item.mainImage}`} className="card-img" alt="Product"/>
                <div className="card-footer">
                    <h3 className="card-title">{item.model}</h3>
                    {showPrice()}
                </div>
            </Link>
        </article>

    )
}

export default ItemCard