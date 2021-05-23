import { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import heartSolid from '@iconify-icons/clarity/heart-solid';
import ItemCarousel from './ItemCarousel';
import ItemModal from './ItemModal';
import Context from '../../Context';

function Item ({productsDataBase}) {

    // Hook used to access context
    const context = useContext(Context)

    // Hooks used to store the shoe size and quantity selected
    const [selectedSize, setSelectedSize] = useState (null)
    const [selectedQuantity, setSelectedQuantity] = useState (1)

    // Hooks used to display quantity, stock and size errors
    const [quantityErrorMessage, setQuantityErrorMessage] = useState (null)
    const [sizeErrorMessage, setSizeErrorMessage] = useState (null)
    
    function cleanUpErrors() {
        setQuantityErrorMessage(null)
        setSizeErrorMessage(null)
    }

    // Hook that access the item ID in the URL and saves it in a variable
    const { itemId } = useParams();
    // Functions that identifies the corresponding item given the item ID in the URL, and assigns it to a variable
    const item = productsDataBase.filter(item => (item.id === itemId))[0]
    
    // Functions that execute when the item is added to the wishlist or shopping cart
    function handleWishlistClick (item) {
        cleanUpErrors()
        context.wishList.includes(item) ? context.wishlistSubstract(item) : context.wishlistAdd(item)
    }

    function containsObject(obj, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].item === obj) {
                return true;
            }
        } return false;
    }

    function handleShoppingCartClick (item) {
        cleanUpErrors()
        let selectedProduct = {item, selectedQuantity, selectedSize}
        if (!selectedSize) {
            setSizeErrorMessage('Gotta pick a size for your shoes, mate.')
            setTimeout(cleanUpErrors, 4000)
        } else if (containsObject(item, context.shoppingCart)) {
            setModalContent('repeatedItem')
            setModalShow(true)
        } else {
            setModalContent('itemAdded')
            context.shoppingCartAdd(selectedProduct)
            setModalShow(true)
        }
    }

    // Functions that execute when the user selects item quantity and size
    function handleQuantityChange (operation) {
        cleanUpErrors()
        if (operation === 'substract' && selectedQuantity === 1) {
            setQuantityErrorMessage("Can't buy less than a pair, mate.")
            setTimeout(cleanUpErrors, 4000)
        }
        if (operation === 'substract' && selectedQuantity > 1) { setSelectedQuantity(selectedQuantity-1) }
        if (operation === 'add' && selectedQuantity === item.stock) {
            setQuantityErrorMessage('Sorry mate, we dont have more stock of this one.')
            setTimeout(cleanUpErrors, 4000)
        }
        if (operation === 'add' && selectedQuantity < item.stock) { setSelectedQuantity(selectedQuantity+1) }
    }

    function handleSizeSelection (size) {
        cleanUpErrors()
        size === selectedSize ? setSelectedSize(null) : setSelectedSize(size)
    }

    // Hook used to control modal display
    const [modalShow, setModalShow] = useState(false)
    // Hook used to control modal content
    const [modalContent, setModalContent] = useState('itemAdded')

    return (
        <section className='itemPage'>
                <div className="item-section_carouselAndInfo">
                    <div className="item-carousel">
                        <ItemCarousel mainImage={`/${item.mainImage}`} images={item.images} />
                    </div>

                    <div className="item-info">
                        <h2>{item.brand} {item.model} </h2>
                        <p>Category: {item.category}</p>
                        <p>Price: ${context.addNumberThousandSeparator(item.price)} </p>
                        
                        <div className='quantityContainer'>
                            <p>Quantity:</p>
                            <btn className='operator' onClick={() => handleQuantityChange('substract')}>-</btn>
                            <p className='selectedQuantity'>{selectedQuantity}</p>
                            <btn className='operator' onClick={() => handleQuantityChange('add')}>+</btn>
                            <p className={quantityErrorMessage ? 'errorMessage' : 'displayNone'}>{quantityErrorMessage}</p>
                        </div>

                        <div className='sizesContainer'>
                            <p>Sizes: </p> 
                            <div className='availableSizes'>
                                {item.sizes.map(size => <p className={size === selectedSize ? 'size selectedSize' : 'size'} onClick={() => handleSizeSelection(size)}>{size}</p>)}
                                <p className={sizeErrorMessage ? 'errorMessage' : 'displayNone'}>{sizeErrorMessage}</p> 
                            </div>
                        </div>


                        <button className='btn-primary' onClick={() => handleShoppingCartClick(item)}>Add to cart</button>
                        <Icon icon={heartSolid} className={context.findInWishlist(item.id) ? 'wished' : 'notWished'} onClick={() => handleWishlistClick(item)}/>
                        <Link to='/gallery' href="#searchResults"><button className='btn-secondary'>Back to search results</button></Link>

                    </div>
                </div>

                <ItemModal show={modalShow} modalContent={modalContent} onHide={() => setModalShow(false)} />

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