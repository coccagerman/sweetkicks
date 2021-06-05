import ItemCard from './ItemCard/ItemCard';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsDataBase, productsArray, setProductsArray}) {
    
    // Function that displays the available items
    const showItemSearchResults = () => productsArray.map((item) => (
            <ItemCard item={item} />
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