import { Link } from "react-router-dom";

function ConfirmationFormStep ({purchaseData}) {

    return (
        <section className='checkoutForm confirmationStep'>
            <h1>Please confirm your purchase</h1>

            <h2>Personal data</h2>
            <div className='confirmationDetails'>
                <p>Name: {purchaseData.fullName}</p>
                <p>Telephone: {purchaseData.telephone}</p>
                <p>Email: {purchaseData.email}</p>
            </div>

            <h2>Shipping</h2>
            <div className='confirmationDetails'>
                <p>Address: {purchaseData.address}, {purchaseData.city}, {purchaseData.location}</p>
                <p>Shipping time: {purchaseData.shippingTime} {purchaseData.shippingTime === 1 ? 'day' : 'days'}</p>
            </div>

            <h2>Payment</h2>
            <div className='confirmationDetails'>
                <p>Credit card: {purchaseData.cardNumber}</p>
                <p>Payments: {purchaseData.installments} {purchaseData.installments === 1 ? 'payment' : 'payments'} of ${purchaseData.installmentsAmount}</p>
            </div>

            <h2>Total cost</h2>
            <div className='confirmationDetails'>
                <p>Products: ${purchaseData.itemsPrice}</p>
                <p>Shipping: ${purchaseData.shippingCost}</p>
                <p>Interests: ${(purchaseData.installments * purchaseData.installmentsAmount) - purchaseData.itemsPrice} </p>
                <p>Total: ${purchaseData.itemsPrice + purchaseData.shippingCost + ((purchaseData.installments * purchaseData.installmentsAmount) - purchaseData.itemsPrice)}</p>
            </div>

            <div className='btn-container'>
                <Link to='/checkout/creditCardFormStep' >
                    <button className='btn-tertiary'>Go back</button>
                </Link>
                <Link to='/checkout/completionFormStep' >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>
        </section>
    )
}

export default ConfirmationFormStep