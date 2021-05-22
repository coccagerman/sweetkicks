import { Link } from "react-router-dom";
import { useState } from "react";

function PersonalDataFormStep ({purchaseData}) {
    
    const [errorDisplay, setErrorDisplay] = useState (null)

    // Constant that stores regex used to validate checkout form input
    const regex  = {
        name: /^[a-zÀ-ú\s]{2,30}$/i,
        telephone: /^\d{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    }

    // Function that validates user input against the corresponding regex
    const validateInput = (regex, field) => regex.test(field) ? true : false
    
    function handleConfirm () {
        if (!validateInput(regex.name, purchaseData.fullName)) {setErrorDisplay('Please check the name you entered.')}
        if (!validateInput(regex.telephone, purchaseData.telephone)) {setErrorDisplay('Please check the telephone you entered.')}
        if (!validateInput(regex.email, purchaseData.email)) {setErrorDisplay('Please check the email you entered.')}
        if (purchaseData.email !== purchaseData.validationEmail) {setErrorDisplay("The emails you entered don't match.")}
        if (validateInput(regex.name, purchaseData.fullName) && validateInput(regex.telephone, purchaseData.telephone) && validateInput(regex.email, purchaseData.email) && purchaseData.email === purchaseData.validationEmail) {
        }

        // let nameValidation = validateInput(regex.name, purchaseData.fullName)
        // let telephoneValidation = validateInput(regex.telephone, purchaseData.telephone)
        // let emailValidation = validateInput(regex.email, purchaseData.email)
        // let emailCoincidenceValidation
    }

    return (
        <section className='checkoutForm'>
            <h1>Please enter your personal data</h1>

            <article className="formInput">
                <label for="fullName">Full name</label>
                <input id="fullName" type="text" className="textBox" onChange={e => purchaseData.setFullName(e.target.value)} />
            </article>

            <article className="formInput">
                <label for="telephone">Telephone</label>
                <input id="telephone" type="text" className="textBox" onChange={e => purchaseData.setTelephone(e.target.value)} />
            </article>

            <article className="formInput">
                <label for="email">Email</label>
                <input id="email" type="email" className="textBox" onChange={e => purchaseData.setEmail(e.target.value)} />
            </article>

            <article className="formInput">
                <label for="emailValidation">Please rewritte your email</label>
                <input id="emailValidation" type="email" className="textBox" onChange={e => purchaseData.setValidationEmail(e.target.value)}/>
            </article>

            <div className='btn-container'>
                <Link to='/checkout/addressFormStep' >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>

            <p className='errorDisplay'>{errorDisplay}</p>
        </section>
    )
}

export default PersonalDataFormStep