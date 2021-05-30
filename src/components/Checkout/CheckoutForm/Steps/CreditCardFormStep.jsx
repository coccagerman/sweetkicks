import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import Context from '../../../../Context';

function CreditCardFormStep ({purchaseData, resetAddressData, paymentValidation, setPaymentValidation}) {

    const history = useHistory()

    // Hook used to access context
    const context = useContext(Context)

    const handleInstallmentsChange = (value) => {
        switch (value) {
            case '1':
                purchaseData.setInstallments(1)
                purchaseData.setInstallmentsAmount(purchaseData.itemsPrice)
                break;
            case '3':
                purchaseData.setInstallments(3)
                purchaseData.setInstallmentsAmount(context.addNumberThousandSeparator(Math.round((purchaseData.itemsPrice*1.05)/3)))
                break;
            case '6':
                purchaseData.setInstallments(6)
                purchaseData.setInstallmentsAmount(context.addNumberThousandSeparator(Math.round((purchaseData.itemsPrice*1.1)/6)))
                break;
            case '12':
                purchaseData.setInstallments(12)
                purchaseData.setInstallmentsAmount(context.addNumberThousandSeparator(Math.round((purchaseData.itemsPrice*1.15)/12)))
                break;
            default:
                break;
        }
    }

    const validateCreditCardData = () => {
        history.push('/checkout/confirmationFormStep')
    }

    return (
        <section className='checkoutForm'>
            <h1>Please enter your credit card data</h1>

            <article className="formInput">
                <label for="creditCardName">Name</label>
                <input id="creditCardName" type="text" className="textBox"/>
            </article>
            
            <article className="formInput">
                <label for="creditCardNumber">Credit card number</label>
                <input id="creditCardNumber" type="text" className="textBox"/>
            </article>

            <div className='dueDate-securityCode'>
                <article className="formInput">
                    <label for="dueDate">Due date</label>
                    <input id="dueDate" type="text" className="textBox"/>
                </article>

                <article className="formInput">
                    <label for="securityCode">Security code</label>
                    <input id="securityCode" type="text" className="textBox"/>
                </article>
            </div>

            <article className="formInput">
                <label for="installments">Installments</label>
                <select id="installments" className="selectBox" onChange={e => handleInstallmentsChange(e.target.value)}>
                    <option value="1">1 - No interest</option>
                    <option value="3">3 - 5% interest</option>
                    <option value="6">6 - 10% interest</option>
                    <option value="12">12 - 15% interest</option>
                </select>
            </article>

            <h2>Total costs may vary according to the payment conditions selected.</h2>
            <div className='paymentDetails'>
                <p>{purchaseData.installments} {purchaseData.installments === 1 ? 'payment' : 'payments'} of ${purchaseData.installmentsAmount}</p>
            </div>

            <div className='btn-container'>
                <button className='btn-secondary' onClick={() => resetAddressData()}>Go back</button>
                <button className='btn-primary' onClick={() => validateCreditCardData()}>Confirm</button>
            </div>
        </section>
    )
}

export default CreditCardFormStep