import { useContext, useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import ItemCarousel from './ItemCarousel';
import Context from '../../Context';

function Item () {

    // Hook used to access context
    const context = useContext(Context)

    // Hooks used to store the shoe size and quantity selected
    const [selectedSize, setSelectedSize] = useState (null)
    const [selectedQuantity, setSelectedQuantity] = useState (1)

    // Hooks used to display quantity, stock and size errors
    const [quantityErrorMessage, setQuantityErrorMessage] = useState (null)
    const [stockErrorMessage, setStockErrorMessage] = useState (null)
    const [sizeErrorMessage, setSizeErrorMessage] = useState (null)
    const [shoppingCartErrorMessage, setshoppingCartErrorMessage] = useState (null)

    
    function cleanUpErrors() {
        setQuantityErrorMessage(null)
        setStockErrorMessage(null)
        setSizeErrorMessage(null)
        setshoppingCartErrorMessage(null)
    }

    // Variables that store the props received from the item card
    let location = useLocation() 
    let item = location.state.item.item
    let brand = location.state.item.item.brand
    let model = location.state.item.item.model
    let price = location.state.item.item.price
    let category = location.state.item.item.category
    let mainImage = location.state.item.item.mainImage
    let images = location.state.item.item.images
    let sizes = location.state.item.item.sizes
    let stock = location.state.item.item.stock
    
    // Functions that execute when the item is added to the wishlist or shopping cart
    function handleWishlistClick (item) {
        cleanUpErrors()
        context.wishList.includes(item) ? context.wishlistSubstract(item) : context.wishlistAdd(item)
    }

    function handleShoppingCartClick (item) {
        cleanUpErrors()
        selectedSize === null ? setSizeErrorMessage('Please select the shoe size you want.') :
        context.shoppingCart.includes(item) ? setshoppingCartErrorMessage('You already have this shoes in your shopping cart.') : context.shoppingCartAdd(item, selectedQuantity, selectedSize)
    }

    // Functions that execute when the user selects item quantity and size
    function handleQuantityChange (operation) {
        cleanUpErrors()
        if (operation === 'substract' && selectedQuantity === 1) { setQuantityErrorMessage("You can't buy less than a pair, bro.") }
        if (operation === 'substract' && selectedQuantity > 1) { setSelectedQuantity(selectedQuantity-1) }
        if (operation === 'add' && selectedQuantity === stock) { setStockErrorMessage('Sorry bro, we dont have more stock of this one.') }
        if (operation === 'add' && selectedQuantity < stock) { setSelectedQuantity(selectedQuantity+1) }
    }

    function handleSizeSelection (size) {
        cleanUpErrors()
        size === selectedSize ? setSelectedSize(null) : setSelectedSize(size)
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
                        <p>Price: ${context.addNumberThousandSeparator(price)} </p>
                        
                        <div className='quantityContainer'>
                            <p>Quantity:</p>
                            <btn className='operator' onClick={() => handleQuantityChange('substract')}>-</btn>
                            <p className='selectedQuantity'>{selectedQuantity}</p>
                            <btn className='operator' onClick={() => handleQuantityChange('add')}>+</btn>
                            <p className='errorMessage'>{quantityErrorMessage}{stockErrorMessage}</p>
                        </div>

                        <div className='sizesContainer'>
                            <p>Sizes: </p> 
                            <div className='availableSizes'>
                                {sizes.map(size => <p className={size === selectedSize ? 'size selectedSize' : 'size'} onClick={() => handleSizeSelection(size)}>{size}</p>)}
                            </div>
                        </div>

                        <p className='errorMessage'>{sizeErrorMessage}{shoppingCartErrorMessage}</p>
                        <button className='btn-primary' onClick={() => handleShoppingCartClick(item)}>Add to cart</button>
                        <Icon icon={heartSolid} className={context.findInWishlist(item.id) ? 'wished' : 'notWished'} onClick={() => handleWishlistClick(item)}/>
                        <Link to='/gallery' href="#searchResults"><button className='btn-secondary'>Back to search results</button></Link>
                    </div>
                </div>

                <div className='item-description'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati ipsum earum fugiat maiores mollitia ipsa a voluptates modi dolore quam vel dolorum quibusdam totam facilis, voluptate dolorem tenetur ea aperiam rem deleniti! Labore at eos debitis dignissimos totam dolores dicta ea nemo asperiores vel ipsum cupiditate omnis, rem aperiam, sunt soluta. Magni, odio dolorum sequi nisi obcaecati temporibus dolores ipsum nihil aliquid sed odit itaque laudantium quas. Voluptas enim, vitae soluta repellendus esse veniam provident modi eligendi officiis ducimus excepturi tenetur itaque labore mollitia cum deleniti laborum impedit ratione dicta. Nobis sed unde provident ipsa, quasi velit magnam eum.</p>
                </div>

                <div className='item-otherOptions'>
                    <p>Here will go the other options.</p>
                </div>
        </section>
    )
}

export default Item