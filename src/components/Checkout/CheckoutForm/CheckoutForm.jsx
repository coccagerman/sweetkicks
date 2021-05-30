import { useState } from 'react'
import { BrowserRouter as useRouteMatch, Route, Switch, useHistory } from "react-router-dom";
import { useContext } from 'react';
import Context from '../../../Context';
import PersonalDataFormStep from './Steps/PersonalDataFormStep'
import AddressFormStep from './Steps/AddressFormStep'
import CreditCardFormStep from './Steps/CreditCardFormStep'
import ConfirmationFormStep from './Steps/ConfirmationFormStep'
import CompletionFormStep from './Steps/CompletionFormStep'

function CheckoutForm () {

    const history = useHistory()

    // Hook used to access context
    const context = useContext(Context)
    
    // Hooks that store the purchase data
    const [fullName, setFullName] = useState(null)
    const [telephone, setTelephone] = useState(null)
    const [email, setEmail] = useState(null)
    const [validationEmail, setValidationEmail] = useState(null)
    const [address, setAddress] = useState(null)
    const [city, setCity] = useState(null)
    const [location, setLocation] = useState(null)
    const [shippingCost, setShippingCost] = useState(null)
    const [shippingTime, setShippingTime] = useState(null)
    const [cardName, setCardName] = useState(null)
    const [cardNumber, setCardNumber] = useState(null)
    const [cardExpMonth, setCardExpMonth] = useState(null)
    const [cardExpYear, setCardExpYear] = useState(null)
    const [cardSecCode, setCardSecCode] = useState(null)
    const [installments, setInstallments] = useState(1)
    const [installmentsAmount, setInstallmentsAmount] = useState(context.addNumberThousandSeparator(context.shoppingCart.map(item => (item.item.price*item.selectedQuantity)).reduce((a, b) => a + b, 0)))

    // Object that stores the purchase data states
    const purchaseData = {
        fullName: fullName,
        setFullName: setFullName,
        telephone: telephone,
        setTelephone: setTelephone,
        email: email,
        setEmail: setEmail,
        validationEmail: validationEmail,
        setValidationEmail: setValidationEmail,
        address: address,
        setAddress: setAddress,
        city: city,
        setCity: setCity,
        location: location,
        setLocation: setLocation,
        itemsPrice: context.shoppingCart.map(item => (item.item.price*item.selectedQuantity)).reduce((a, b) => a + b, 0),
        shippingCost: shippingCost,
        setShippingCost: setShippingCost,
        shippingTime: shippingTime,
        setShippingTime: setShippingTime,
        cardName: cardName,
        setCardName: setCardName,
        cardNumber: cardNumber,
        setCardNumber: setCardNumber,
        cardExpMonth: cardExpMonth,
        setCardExpMonth: setCardExpMonth,
        cardExpYear: cardExpYear,
        setCardExpYear: setCardExpYear,
        cardSecCode: cardSecCode,
        setCardSecCode: setCardSecCode,
        installments: installments,
        setInstallments: setInstallments,
        installmentsAmount: installmentsAmount,
        setInstallmentsAmount: setInstallmentsAmount
    }

    // Hooks that stores form's steps validation state
    const [personalDataValidation, setPersonalDataValidation] = useState (false)
    const [addressValidation, setAddressValidation] = useState (false)
    const [paymentValidation, setPaymentValidation] = useState (false)

    const resetPersonalData = () => {
        setFullName(null)
        setTelephone(null)
        setEmail(null)
        setValidationEmail(null)
        setPersonalDataValidation(false)
        history.push('/checkout/personalDataFormStep')
    }

    const resetAddressData = () => {
        setAddress(null)
        setCity(null)
        setLocation(null)
        history.push('/checkout/addressFormStep')
    }

    return (

        <Switch>
            <Route path='/checkout/personalDataFormStep'>
                <PersonalDataFormStep  purchaseData={purchaseData} personalDataValidation={personalDataValidation} setPersonalDataValidation={setPersonalDataValidation} />
            </Route>

            <Route path='/checkout/addressFormStep'>
                <AddressFormStep purchaseData={purchaseData} resetPersonalData={resetPersonalData} addressValidation={addressValidation} setAddressValidation={setAddressValidation}/>
            </Route>

            <Route path='/checkout/creditCardFormStep'>
                <CreditCardFormStep purchaseData={purchaseData} resetAddressData={resetAddressData} paymentValidation={paymentValidation} setPaymentValidation={setPaymentValidation}/>
            </Route>

            <Route path='/checkout/confirmationFormStep'>
                <ConfirmationFormStep purchaseData={purchaseData} />
            </Route>

            <Route path='/checkout/completionFormStep'>
                <CompletionFormStep purchaseData={purchaseData} />
            </Route>
        </Switch>

    )
}

export default CheckoutForm