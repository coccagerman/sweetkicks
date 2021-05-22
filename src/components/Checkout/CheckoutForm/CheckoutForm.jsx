import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalDataFormStep from './Steps/PersonalDataFormStep'
import AddressFormStep from './Steps/AddressFormStep'
import CreditCardFormStep from './Steps/CreditCardFormStep'
import ConfirmationFormStep from './Steps/ConfirmationFormStep'
import CompletionFormStep from './Steps/CompletionFormStep'

function CheckoutForm () {

    // Hooks that store the purchase data
    const [fullName, setFullName] = useState(null)
    const [telephone, setTelephone] = useState(null)
    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null)
    const [city, setCity] = useState(null)
    const [location, setLocation] = useState(null)
    const [cardNumber, setCardNumber] = useState(null)
    const [installments, setInstallments] = useState(null)

    // Object that stores the purchase data states
    const purchaseData = {
        fullName: fullName,
        telephone: telephone,
        email: email,
        address: address,
        city: city,
        location: location,
        cardNumber: cardNumber,
        installments: installments,
    }

    return (
        <Router>
            <Switch>
                <Route path='/checkout/personalDataFormStep'>
                    <PersonalDataFormStep setFullName={setFullName} setTelephone={setTelephone} setEmail={setEmail} />
                </Route>

                <Route path='/checkout/addressFormStep'>
                    <AddressFormStep setAddress={setAddress} setCity={setCity} setLocation={setLocation} />
                </Route>

                <Route path='/checkout/creditCardFormStep'>
                    <CreditCardFormStep setCardNumber={setCardNumber} setInstallments={setInstallments} />
                </Route>

                <Route path='/checkout/confirmationFormStep'>
                    <ConfirmationFormStep purchaseData={purchaseData} />
                </Route>

                <Route path='/checkout/completionFormStep'>
                    <CompletionFormStep />
                </Route>
            </Switch>   
        </Router>
    )
}

export default CheckoutForm