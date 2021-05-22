import { Link } from "react-router-dom";

function AddressFormStep () {

    return (
        <section className='checkoutForm'>
            <h1>Please detail your shipping address</h1>

            <article className="formInput">
                <label for="address">Address</label>
                <input id="address" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="city">City</label>
                <input id="city" type="text" className="textBox"/>
            </article>

            <article className="formInput">
                <label for="location">Location</label>
                <select id="desiredDestination" className="selectBox" >

                    <option value=""></option>
                    <option value="caba">CABA</option>
                    <option value="amba">AMBA</option>
                    <option value="buenos aires interior">Buenos Aires interior</option>
                    <option value="santa fe">Santa Fe</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="neuquen">Neuquén</option>
                    <option value="rio negro">Río negro</option>
                    <option value="tucuman">Tucumán</option>
                    <option value="la pampa">La Pampa</option>
                    <option value="entre rios">Entre Ríos</option>
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
                <p>Shipping cost:</p>
                <p>Shipping time:</p>
            </div>
            
            <div className='btn-container'>
                <Link to='/checkout/personalDataFormStep' >
                    <button className='btn-secondary'>Go back</button>
                </Link>
                <Link to='/checkout/creditCardFormStep' >
                    <button className='btn-primary'>Confirm</button>
                </Link>
            </div>
        </section>
    )
}

export default AddressFormStep