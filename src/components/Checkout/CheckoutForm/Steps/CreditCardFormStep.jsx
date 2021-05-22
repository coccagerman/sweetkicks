import { Link } from "react-router-dom";

function CreditCardFormStep () {

    return (
        <section className='checkoutForm'>
            <h1>Please enter your payment data</h1>

            <article className="formInput">
                <label for="creditCardNumber">Credit card number</label>
                <input id="creditCardNumber" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="dueDate">Due date</label>
                <input id="dueDate" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="securityCode">Security code</label>
                <input id="securityCode" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="installments">Installments</label>
                <select id="installments" className="selectBox" >

                    <option value="1">1 - No interest</option>
                    <option value="3">3 - 5% interest</option>
                    <option value="6">6 - 10% interest</option>
                    <option value="12">12 - 15% interest</option>

                </select>
            </article>

            <h2>Total costs may vary according to the payment conditions selected.</h2>
            <div className='paymentDetails'>
                <p>x payment of $x.</p>
            </div>

            <div className='btn-container'>
                <Link to={{ pathname:'/checkout/addressFormStep', }} >
                    <button className='btn-secondary'>Go back</button>
                </Link>
                <Link to={{ pathname:'/checkout/confirmationFormStep', }} >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>
        </section>
    )
}

export default CreditCardFormStep