import { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../Context';
import WishlistItem from './WishlistItem';

function Wishlist () {

    // Hook used to access context and modify it
    const context = useContext(Context)

    // Function that displays the items in the wishlist
    const showWishlistItem = () => context.wishList.map((item) => <WishlistItem item={item} />)

    return (
        <section className={context.wishList.length !== 0 ? 'wishlist' : 'wishlist occupyMinHeight'}>
            {context.wishList.length !== 0 ? 
                <>
                    <h1>Stop wishing, start enjoying.</h1>
                    {showWishlistItem()}
                    <p className='details'>Wished items: {context.wishList.length}</p>
                </> :
                <> 
                    <h1>Sorry mate, you have no items in your wish list yet.</h1>
                    <div className='btns'>
                        <Link to='/gallery' >
                            <button className='btn-primary'>Go to gallery</button>
                        </Link>
                    </div>
                </>
            }
        </section>
    )
}

export default Wishlist