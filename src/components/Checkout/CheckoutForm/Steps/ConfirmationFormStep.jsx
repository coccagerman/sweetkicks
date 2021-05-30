import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from '../../../../Context';

function ConfirmationFormStep ({purchaseData, resetCreditCardData}) {

    // Hook used to access context
    const context = useContext(Context)

    const formatCreditCardNumber = (creditCardNumber) => creditCardNumber.replace(/\d{4}(?=.)/g, '$& ')
    
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
                <p>Credit card: {formatCreditCardNumber(purchaseData.cardNumber)}</p>
                <p>Payments: {purchaseData.installments} {purchaseData.installments === 1 ? 'payment' : 'payments'} of ${context.addNumberThousandSeparator(purchaseData.installmentsAmount)}</p>
            </div>

            <h2>Total cost</h2>
            <div className='confirmationDetails'>
                <p>Products: ${context.addNumberThousandSeparator(purchaseData.itemsPrice)}</p>
                <p>Shipping: ${context.addNumberThousandSeparator(purchaseData.shippingCost)}</p>
                <p>Interests: ${context.addNumberThousandSeparator((purchaseData.installments * purchaseData.installmentsAmount) - purchaseData.itemsPrice)} </p>
                <p>Total: ${context.addNumberThousandSeparator(purchaseData.itemsPrice + purchaseData.shippingCost + ((purchaseData.installments * purchaseData.installmentsAmount) - purchaseData.itemsPrice))}</p>
            </div>

            <div className='btn-container'>
                    <button className='btn-tertiary' onClick={() => resetCreditCardData()}>Go back</button>
                <Link to='/checkout/processingPaymentFormStep' >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>
        </section>
    )
}

export default ConfirmationFormStep