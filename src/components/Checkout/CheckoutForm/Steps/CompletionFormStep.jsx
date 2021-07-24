import { Link } from "react-router-dom";

function CompletionFormStep ({purchaseData}) {

    return (
        <section className='checkoutForm completionStep'>
            <h1>Thank you for your purchase!</h1>
            <p>Your purchase number is: #{purchaseData.orderId} </p>
            <p>Your shoes will arrive on {purchaseData.shippingTime} days</p>

            <div className='btn-container'>
                <Link to="/gallery" >
                    <button className='btn-primary'>Explore</button>
                </Link>
            </div>
        </section>
    )
}

export default CompletionFormStep