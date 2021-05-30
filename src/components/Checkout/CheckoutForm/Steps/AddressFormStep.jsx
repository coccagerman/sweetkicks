import { useHistory } from "react-router-dom";
import { useState } from "react";

function AddressFormStep ({purchaseData, resetPersonalData, setAddressValidation}) {

    const history = useHistory()

    // Hook that stores form's error messages
    const [errorDisplay, setErrorDisplay] = useState (null)

    const assignShippingCostAndTime = (value) => {
        switch (value) {
            case 'caba':
                purchaseData.setShippingCost(0)
                purchaseData.setShippingTime(1)
                break;
            case 'amba':
                purchaseData.setShippingCost(0)
                purchaseData.setShippingTime(1)
                break;
            case 'buenos aires interior':
                purchaseData.setShippingCost(300)
                purchaseData.setShippingTime(3)
                break;
            case 'santa fe':
                purchaseData.setShippingCost(300)
                purchaseData.setShippingTime(3)
                break;
            case 'cordoba':
                purchaseData.setShippingCost(500)
                purchaseData.setShippingTime(4)
                break;
            case 'la pampa':
                purchaseData.setShippingCost(500)
                purchaseData.setShippingTime(4)
                break;
            case 'mendoza':
                purchaseData.setShippingCost(500)
                purchaseData.setShippingTime(4)
                break;
            case 'neuquen':
                purchaseData.setShippingCost(500)
                purchaseData.setShippingTime(4)
                break;
            case 'entre rios':
                purchaseData.setShippingCost(700)
                purchaseData.setShippingTime(5)
                break;
            case 'rio negro':
                purchaseData.setShippingCost(700)
                purchaseData.setShippingTime(5)
                break;
            case 'tucuman':
                purchaseData.setShippingCost(700)
                purchaseData.setShippingTime(5)
                break;
            case 'corrientes':
                purchaseData.setShippingCost(700)
                purchaseData.setShippingTime(5)
                break;
            case 'misiones':
                purchaseData.setShippingCost(700)
                purchaseData.setShippingTime(5)
                break;
            case 'san luis':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'san juan':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'la rioja':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'formosa':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'catamarca':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'chaco':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'santiago del estero':
                purchaseData.setShippingCost(900)
                purchaseData.setShippingTime(7)
                break;
            case 'salta':
                purchaseData.setShippingCost(1100)
                purchaseData.setShippingTime(10)
                break;
            case 'jujuy':
                purchaseData.setShippingCost(1100)
                purchaseData.setShippingTime(10)
                break;
            case 'santa cruz':
                purchaseData.setShippingCost(1100)
                purchaseData.setShippingTime(10)
                break;
            case 'chubut':
                purchaseData.setShippingCost(1100)
                purchaseData.setShippingTime(10)
                break;
            case 'tierra del fuego':
                purchaseData.setShippingCost(1100)
                purchaseData.setShippingTime(10)
                break;
            default:
                break;
        }
    }
    
    const handleLocationChange = (e) => {
        purchaseData.setLocation(e.target.value)
        assignShippingCostAndTime(e.target.value)
    }

    function validateAddressData () {
        if (purchaseData.address && purchaseData.city && purchaseData.location) {
            setAddressValidation(true)
            history.push('/checkout/creditCardFormStep')
        } else {
            setAddressValidation(false)
            if (!purchaseData.address) { setErrorDisplay('Please enter a valid address.') }
            else if (!purchaseData.city) { setErrorDisplay('Please enter a valid city.') }
            else if (!purchaseData.location) { setErrorDisplay('Please select a valid location.') }
        }
    }

    return (
        <section className='checkoutForm'>
            <h1>Please detail your shipping address</h1>

            <article className="formInput">
                <label for="address">Address</label>
                <input id="address" type="text" className="textBox" onChange={e => purchaseData.setAddress(e.target.value)}/>
            </article>

            <article className="formInput">
                <label for="city">City</label>
                <input id="city" type="text" className="textBox" onChange={e => purchaseData.setCity(e.target.value)}/>
            </article>

            <article className="formInput">
                <label for="location">Location</label>
                <select id="location" className="selectBox" onChange={e => handleLocationChange(e)}>
                    <option value=""></option>
                    <option value="caba">CABA</option>
                    <option value="amba">AMBA</option>
                    <option value="buenos aires interior">Buenos Aires interior</option>
                    <option value="santa fe">Santa Fe</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="la pampa">La Pampa</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="neuquen">Neuquén</option>
                    <option value="entre rios">Entre Ríos</option>
                    <option value="rio negro">Río negro</option>
                    <option value="tucuman">Tucumán</option>
                    <option value="corrientes">Corrientes</option>
                    <option value="misiones">Misiones</option>
                    <option value="san luis">San Luis</option>
                    <option value="san juan">San Juan</option>
                    <option value="la rioja">La rioja</option>
                    <option value="formosa">Formosa</option>
                    <option value="catamarca">Catamarca</option>
                    <option value="chaco">Chaco</option>
                    <option value="santiago del estero">Santiago del estero</option>
                    <option value="salta">Salta</option>
                    <option value="jujuy">Jujuy</option>
                    <option value="santa cruz">Santa cruz</option>
                    <option value="chubut">Chubut</option>
                    <option value="tierra del fuego">Tierra del fuego</option>
                </select>
            </article>

            <h2>Shipping costs and times will vary depending on your location.</h2>
            <div className='shippingDetails'>
                <p>Shipping cost: ${purchaseData.shippingCost}</p>
                <p>Shipping time: {purchaseData.shippingTime} {purchaseData.shippingTime === 1 ? 'day' : 'days'}</p>
            </div>
            
            <div className='btn-container'>
                <button className='btn-secondary' onClick={() => resetPersonalData()}>Go back</button>
                <button className='btn-primary' onClick={() => validateAddressData()}>Confirm</button>
            </div>

            <p className='errorDisplay'>{errorDisplay ? errorDisplay : null}</p>
        </section>
    )
}

export default AddressFormStep