import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import { useContext } from 'react';
import Context from '../../../Context';

function WishlistIcon () {
    
    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    return (
        <div className='wishList-container'>
            <Icon icon={heartSolid} className='wishList-icon' /> 
            <span className={context.wishList.length !== 0 ? 'wishlist-counter' : 'displayNone'}><p>{context.wishList.length}</p></span>
        </div>
    )
}

export default WishlistIcon