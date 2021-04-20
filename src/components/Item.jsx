import Foto from '../assets/products/adidas/adidas1/adidas1_1.jpeg'

function Item ({brand, model, color, price, stock, imgUrl}) {

    // Regex used to insert thousand separator in forms' numeric inputs.
    function numberThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <article class="item-card">
            <img src={Foto} class="card-img" alt="Product"/>
            <div class="card-body">
                <h3 class="card-title">{model}</h3>
                <p class="card-price">${numberThousandSeparator(price)}</p>
                <span class="iconify wishList" id='wishList' data-icon="clarity:heart-solid" data-inline="false"></span>
            </div>
        </article>
    )
}

export default Item