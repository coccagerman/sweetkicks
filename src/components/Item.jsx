import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import ItemCarousel from './ItemCarousel';
import Context from './Context';

function Item () {

    // Hook used to access wishlist and modify it
    const {wishList, setwishList, shoppingCart, setShoppingCart} = useContext(Context)

    // Regex used to insert thousand separator in forms' numeric inputs.
    function addNumberThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Variables that store the props received from the item card
    let location = useLocation() 
    let item = location.state.item.item
    let brand = location.state.brand.brand
    let model = location.state.model.model
    let price = location.state.price.price
    let category = location.state.category.category
    let mainImage = location.state.mainImage.mainImage
    let images = location.state.images.images
    
    function handleAddToWishlist () {
        wishList.includes(item) ? setwishList(wishList.splice(wishList.indexOf(item), 1)) : setwishList([...wishList, item])
        console.log(wishList.includes(item))
        console.log(wishList)
        console.log(wishList.lenght)
    }

    function handleAddToShoppingCart () {
        shoppingCart.includes(item) ? setShoppingCart(shoppingCart.splice(shoppingCart.indexOf(item), 1)) : setShoppingCart([...shoppingCart, item])
        console.log(shoppingCart)
        console.log(shoppingCart.lenght)
    }

    return (
        <section className='itemPage'>
                <div className="item-section_carouselAndInfo">
                    <div className="item-carousel">
                        <ItemCarousel mainImage={mainImage} images={images} />
                    </div>

                    <div className="item-info">
                        <h2>{brand} {model} </h2>
                        <p>Category: {category}</p>
                        <p>Price: ${addNumberThousandSeparator(price)} </p>
                        <p>Sizes: </p>
                        <button className='btn-primary' onClick={() => handleAddToShoppingCart()}>Add to cart</button>
                        <Icon icon={heartSolid} className={wishList.includes(item) ? 'wished' : 'notWished'} onClick={() => handleAddToWishlist()}/>
                        <Link to='/gallery' href="#searchResults"><button className='btn-secondary'>Back to search results</button></Link>
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