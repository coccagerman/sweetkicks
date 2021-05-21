import ItemCard from './ItemCard/ItemCard';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsDataBase, productsArray, setProductsArray}) {

    // Function that displays the available items
    const showItemSearchResults = () => productsArray.map((item) => (
        <article>
            <ItemCard item={item} brand={item.brand} model={item.model} price={item.price} latestRelease={item.latestRelease} discount={item.discount} mainImage={item.mainImage}/>
        </article>
        )
    )

    return (
        <section className='gallery'>
            <GalleryHeader productsDataBase={productsDataBase} setProductsArray={setProductsArray} productsArray={productsArray} />
            <section className='items-container'>
                {showItemSearchResults()}
            </section>
        </section>
    )
}

export default Gallery