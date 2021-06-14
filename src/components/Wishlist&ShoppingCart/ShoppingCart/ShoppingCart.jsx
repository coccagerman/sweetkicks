import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../Context';
import ShoppingCartItem from './ShoppingCartItem';
import {useSpring, animated} from 'react-spring'

function ShoppingCart () {

    // Hook used to access context
    const context = useContext(Context)

    const [totalPrice, setTotalPrice] = useState(context.addNumberThousandSeparator(context.shoppingCart.map(item => (item.item.price*item.selectedQuantity)).reduce((a, b) => a + b, 0)))
    
    // Animation props
    const shoppingCartDetailsAnimationProps = useSpring({opacity: 1, marginTop:5, from: {opacity: 0, marginTop:-100}, delay: 500})

    return (
        <section className={context.shoppingCart.length !== 0 ? 'shoppingCart' : 'shoppingCart occupyMinHeight'}>
            {context.shoppingCart.length !== 0 ?
                <>
                    <h1>Buy and walk your dreams.</h1>
                    
                    {context.shoppingCart.map(item => <ShoppingCartItem key={item.item.id} shoppingCartItem={item} setTotalPrice={setTotalPrice} />)}

                    <animated.div style={shoppingCartDetailsAnimationProps}>
                        <div className='details'>
                            <p>Total items: {context.shoppingCart.length}</p>
                            <p>Total price: ${totalPrice}</p>
                        </div>
                        <div className='btns'>
                            <button className='btn-tertiary'onClick={() => context.emptyShoppingCart()}>Empty cart</button>
                            <Link to='/gallery'>
                                <button className='btn-secondary'>Keep buying</button>
                            </Link>
                            <Link to='/checkout/personalDataFormStep'>
                                <button className='btn-primary'>Check out</button>
                            </Link>
                        </div>
                    </animated.div>
                </> :
                <> 
                    <h1>Sorry mate, you've got no items in your shopping cart yet.</h1>
                    <div className='btns'>
                        <Link to='/gallery'>
                            <button className='btn-primary'>Go to gallery</button>
                        </Link>
                    </div>
                </>
            }
        </section>
    )
}

export default ShoppingCart