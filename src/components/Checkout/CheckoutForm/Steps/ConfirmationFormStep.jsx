import { Link } from "react-router-dom";

function ConfirmationFormStep () {

    return (
        <section className='checkoutForm confirmationStep'>
            <h1>Please confirm your purchase</h1>

            <h2>Personal data</h2>
            <div className='confirmationDetails'>
                <p>Name:</p>
                <p>Telephone:</p>
                <p>Email:</p>
            </div>

            <h2>Shipping</h2>
            <div className='confirmationDetails'>
                <p>Address:</p>
                <p>Shipping time:</p>
                <p>Shipping costs:</p>
            </div>

            <h2>Payment</h2>
            <div className='confirmationDetails'>
                <p>Credit card:</p>
                <p>Payments:</p>
            </div>

            <h2>Total cost</h2>
            <div className='confirmationDetails'>
                <p>Products:</p>
                <p>Shipping:</p>
                <p>Interests:</p>
                <p>Total:</p>
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