import Item from './Item';

function Gallery ({productsArray}) {

    // Function that displays the available items
    const showItems = () => {

        return productsArray.map((item) => (
            <article>
                <Item brand={item.brand} model={item.model} color={item.color} price={item.price} stock={item.stock} imgUrl={item.imgUrl} />
            </article>
            )
        )
    }   

    return (
        <section className='gallery'>
            {showItems()}
        </section>
    )
}

export default Gallery