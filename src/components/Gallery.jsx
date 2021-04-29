import Item from './Item';
import GalleryHeader from './GalleryHeader';
import { useEffect } from 'react';

function Gallery ({productsArray, setwishListcounter, wishListcounter, categoryToSearch}) {

    // Function that randomizes the order of the products
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    let productsArrayToSearch = (categoryToSearch === null ? productsArray : productsArray.filter(item => (item.cattegory === categoryToSearch)))
    
    // Function that displays the available items
    const showItemSearchResults = () => {

        shuffleArray(productsArrayToSearch)

        return productsArrayToSearch.map((item) => (
            <article>
                <Item brand={item.brand} model={item.model} color={item.color} price={item.price} stock={item.stock} imgUrl={item.imgUrl} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter}/>
            </article>
            )
        )
    }
    
    return (
        <section className='gallery'>
            <GalleryHeader />
            <section className='items-container'>
                {showItemSearchResults()}
            </section>
        </section>
    )
}

export default Gallery