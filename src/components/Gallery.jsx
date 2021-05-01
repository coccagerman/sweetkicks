import Item from './Item';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsDataBase, productsArray, setProductsArray, setwishListcounter, wishListcounter}) {

    // Function that randomizes the order of the array
    // Esta función debiese implementarse sobre la base de datos, para que se randomize una sola vez. Al usuario debiesen aparecerle los productos siempre en el mismo orden.
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // Function that displays the available items
    const showItemSearchResults = () => productsArray.map((item) => (
        <article>
            <Item brand={item.brand} model={item.model} color={item.color} price={item.price} stock={item.stock} imgUrl={item.imgUrl} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter}/>
        </article>
        )
    )

    return (
        <section className='gallery'>
            <GalleryHeader productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
            <section className='items-container'>
                {showItemSearchResults()}
            </section>
        </section>
    )
}

export default Gallery