import ItemCard from './ItemCard';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsDataBase, productsArray, setProductsArray, setwishListcounter, wishListcounter}) {

    // Function that displays the available items
    const showItemSearchResults = () => productsArray.map((item) => (
        <article>
            <ItemCard item={item} id={item.id} brand={item.brand} model={item.model} category={item.category} color={item.color} price={item.price} latestRelease={item.latestRelease} discount={item.discount} stock={item.stock} mainImage={item.mainImage} images={item.images} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter} />
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