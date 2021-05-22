import { Link } from "react-router-dom";

function PersonalDataFormStep () {

    return (
        <section className='checkoutForm'>
            <h1>Please enter your personal data</h1>

            <article className="formInput">
                <label for="fullName">Full name</label>
                <input id="fullName" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="telephone">Telephone</label>
                <input id="telephone" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="email">Email</label>
                <input id="email" type="email" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="emailValidation">Please rewritte your email</label>
                <input id="emailValidation" type="email" className="textBox"/>
            </article>

            <div className='btn-container'>
                <Link to={{ pathname:'/checkout/addressFormStep', }} >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>
        </section>
    )
}

export default PersonalDataFormStep