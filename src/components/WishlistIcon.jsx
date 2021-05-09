import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';

function WishlistIcon ({wishListcounter}) {
    
    return (

        <div className='wishList-container'>
            <Icon icon={heartSolid} className='wishList' /> 
            <span className={wishListcounter !== 0 ? 'wishlist-counter' : 'displayNone'}><p>{wishListcounter}</p></span>
        </div>

    )
}

export default WishlistIcon