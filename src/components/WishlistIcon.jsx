import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import { useContext } from 'react';
import Context from './Context';

function WishlistIcon () {
    
    // Hook used to access wishlist and modify it
    const {wishList, setwishList} = useContext(Context)

    return (

        <div className='wishList-container'>
            <Icon icon={heartSolid} className='wishList' /> 
            <span className={wishList.lenght !== (0, null, undefined) ? 'wishlist-counter' : 'displayNone'}><p>{wishList.lenght}</p></span>
        </div>

    )
}

export default WishlistIcon