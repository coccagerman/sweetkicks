import { useState, useContext } from "react"
import { useHistory } from "react-router-dom";
import Context from '../../../../Context';

function ProcessingPaymentFormStep ({purchaseData}) {

    const history = useHistory()

    // Hook used to access context
    const context = useContext(Context)

    // Hook and function used to display message
    const [messageDisplayed, setMessageDisplayed] = useState('Processing your payment...')
    setTimeout(()=> setMessageDisplayed('Payment accepted'), 4500)

    // Function that generates an order ID, adds the purchase to the orders section, empties the shopping cart and redirects the user to the next step
    const completePurchase = () => {
        purchaseData.setOrderId(Math.floor(Math.random()*90000)+10000)
        purchaseData.setPurchasedProducts(context.shoppingCart)
        purchaseData.setPurchaseDate(new Date())
        context.ordersAdd(purchaseData)
        context.emptyShoppingCart()
        history.push('/checkout/completionFormStep')
    }

    // Function that redirects the user to the next step
    setTimeout(()=> completePurchase(), 6000)

    return (
        <section className='checkoutForm processingPaymentStep'>
            <h1>{messageDisplayed}</h1>
            <div class="loader"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
                <filter id="goo">
                <feGaussianBlur stdDeviation="8" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 10 -5" result="sharpen"></feColorMatrix>
                <feBlend in2="sharpen"></feBlend>
                </filter>
            </defs>
            </svg>

        </section>
    )
}

export default ProcessingPaymentFormStep