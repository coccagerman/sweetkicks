import { Link } from "react-router-dom";

function CompletionFormStep () {

    return (
        <section className='checkoutForm completionStep'>
            <h1>Thank you for your purchase!</h1>
            <p>Your purchase number is:</p>
            <p>You can see purchase details in "My orders" section.</p>
            <div className='btn-container'>
                <Link to="orders" exact >
                    <button className='btn-secondary'>My orders</button>
                </Link>
                <Link to="/gallery" exact >
                    <button className='btn-primary'>Explore</button>
                </Link>
            </div>
        </section>
    )
}

export default CompletionFormStep