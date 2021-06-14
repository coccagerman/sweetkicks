import ItemCard from './ItemCard/ItemCard';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsDataBase, productsArray, setProductsArray}) {

    return (
        <section className='gallery'>
            <GalleryHeader productsDataBase={productsDataBase} setProductsArray={setProductsArray} productsArray={productsArray} />
            <section className='items-container'>
                {productsArray.map(item => <ItemCard key={item.id} item={item} /> )}
            </section>
        </section>
    )
}

export default Gallery