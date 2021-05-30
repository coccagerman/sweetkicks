import { useHistory } from "react-router-dom";
import { useState, useContext } from 'react';
import Context from '../../../../Context';

function CreditCardFormStep ({purchaseData, resetAddressData, setPaymentValidation}) {

    const history = useHistory()

    // Hook used to access context
    const context = useContext(Context)

    // Hook that stores form's error messages
    const [errorDisplay, setErrorDisplay] = useState (null)

    // Constant that stores regex used to validate checkout form input
    const regex  = {
        name: /^[a-zÀ-ú\s]{2,30}$/i,
        cardNumber: /^\d{16}$/,
        cardSecCode: /^\d{3}$/
    }

    // Function that validates user input against the corresponding regex
    const validateInput = (regex, field) => regex.test(field) ? true : false

    const handleInstallmentsChange = (value) => {
        switch (value) {
            case '1':
                purchaseData.setInstallments(1)
                purchaseData.setInstallmentsAmount(purchaseData.itemsPrice)
                break;
            case '3':
                purchaseData.setInstallments(3)
                purchaseData.setInstallmentsAmount(Math.round((purchaseData.itemsPrice*1.05)/3))
                break;
            case '6':
                purchaseData.setInstallments(6)
                purchaseData.setInstallmentsAmount(Math.round((purchaseData.itemsPrice*1.1)/6))
                break;
            case '12':
                purchaseData.setInstallments(12)
                purchaseData.setInstallmentsAmount(Math.round((purchaseData.itemsPrice*1.15)/12))
                break;
            default:
                break;
        }
    }

    const validateCreditCardData = () => {
        if (purchaseData.cardName && validateInput(regex.name, purchaseData.cardName) && purchaseData.cardNumber && validateInput(regex.cardNumber, purchaseData.cardNumber) && purchaseData.cardExpMonth && purchaseData.cardExpYear && purchaseData.cardSecCode && validateInput(regex.cardSecCode, purchaseData.cardSecCode)){
            setPaymentValidation(true)
            history.push('/checkout/confirmationFormStep')
        } else {
            setPaymentValidation(false)
            if (!purchaseData.cardName || !validateInput(regex.name, purchaseData.cardName)) { setErrorDisplay("Please enter the credit card's owner name.") }
            else if (!purchaseData.cardNumber || !validateInput(regex.cardNumber, purchaseData.cardNumber)) { setErrorDisplay('Please check your credit card number.') }
            else if (!purchaseData.cardExpMonth) { setErrorDisplay("Please enter your credit card's expiration month.") }
            else if (!purchaseData.cardExpYear) { setErrorDisplay("Please enter your credit card's expiration year.") }
            else if (!purchaseData.cardSecCode || !validateInput(regex.cardSecCode, purchaseData.cardSecCode)) { setErrorDisplay("Please check your credit card's security code.") }
        }
    }

    return (
        <section className='checkoutForm'>
            <h1>Please enter your credit card data</h1>

            <article className="formInput">
                <label for="creditCardName">Name</label>
                <input id="creditCardName" type="text" className="textBox" onChange={e => purchaseData.setCardName(e.target.value)} />
            </article>
            
            <article className="formInput">
                <label for="creditCardNumber">Credit card number</label>
                <input id="creditCardNumber" type="text" className="textBox" maxlength="16" placeholder="XXXX XXXX XXXX XXXX" onChange={e => purchaseData.setCardNumber(e.target.value)} />
            </article>

            <div className='expirationDate-securityCode'>
                <article className="formInput">
                    <label for="expirationMonth">Exp. month</label>
                    <select id="expirationMonth" className="selectBox" onChange={e => purchaseData.setCardExpMonth(e.target.value)}>
                        <option value=""></option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="expirationYear">Exp. year</label>
                    <select id="expirationYear" className="selectBox" onChange={e => purchaseData.setCardExpYear(e.target.value)}>
                        <option value=""></option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="securityCode">Security code</label>
                    <input id="securityCode" type="password" className="textBox" maxlength="3" placeholder="XXX" onChange={e => purchaseData.setCardSecCode(e.target.value)} />
                </article>
            </div>

            <article className="formInput">
                <label for="installments">Installments</label>
                <select id="installments" className="selectBox" onChange={e => handleInstallmentsChange(e.target.value)}>
                    <option value="1">1 installments - No interest</option>
                    <option value="3">3 installments - 5% interest</option>
                    <option value="6">6 installments - 10% interest</option>
                    <option value="12">12 installments - 15% interest</option>
                </select>
            </article>

            <h2>Total costs may vary according to the payment conditions selected.</h2>
            <div className='paymentDetails'>
                <p>{purchaseData.installments} {purchaseData.installments === 1 ? 'payment' : 'payments'} of ${context.addNumberThousandSeparator(purchaseData.installmentsAmount)}</p>
            </div>

            <div className='btn-container'>
                <button className='btn-secondary' onClick={() => resetAddressData()}>Go back</button>
                <button className='btn-primary' onClick={() => validateCreditCardData()}>Confirm</button>
            </div>

            <p className='errorDisplay'>{errorDisplay ? errorDisplay : null}</p>
        </section>
    )
}

export default CreditCardFormStep