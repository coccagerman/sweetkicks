import { useState } from 'react';
import { useContext } from 'react';
import Context from '../../Context';

function GalleryHeader ({productsDataBase, setProductsArray, productsArray}) {

    // Hook used to access context
    const context = useContext(Context)

    // Hooks used to store the search parameters entered in the form
    const [desiredBrand,setDesiredBrand] = useState('');
    const [desiredCategory,setdDesiredCategory] = useState('');
    const [desiredSize,setDesiredSize] = useState('');
    const [desiredMaxPrice,setDesiredMaxPrice] = useState('');
    const [desiredColor,setDesiredColor] = useState('');

    // Function used to search products according to the params entered in the form
    function searchProducts () {

        // Empty form
        if (!desiredBrand && !desiredCategory && !desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase)}
        // Complete form
        if (desiredBrand && desiredCategory && desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice && item.color === desiredColor )))}
        // Only brand
        if (desiredBrand && !desiredCategory && !desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand)))}
        // Only category
        if (!desiredBrand && desiredCategory && !desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory)))}
        // Only price
        if (!desiredBrand && !desiredCategory && !desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.finalPrice <= desiredMaxPrice)))}
        // Only size
        if (!desiredBrand && !desiredCategory && desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.sizes.includes(desiredSize))))}
        // Only color
        if (!desiredBrand && !desiredCategory && !desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.color === desiredColor)))}
        // Combinations of 2
        if (desiredBrand && desiredCategory && !desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory)))}
        if (desiredBrand && !desiredCategory && desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.sizes.includes(desiredSize))))}
        if (desiredBrand && !desiredCategory && !desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.finalPrice <= desiredMaxPrice)))}
        if (desiredBrand && !desiredCategory && !desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.color === desiredColor)))}
        if (!desiredBrand && desiredCategory && desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.sizes.includes(desiredSize))))}
        if (!desiredBrand && desiredCategory && !desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.finalPrice <= desiredMaxPrice)))}
        if (!desiredBrand && desiredCategory && !desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.color === desiredColor)))}
        if (!desiredBrand && !desiredCategory && desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice)))}
        if (!desiredBrand && !desiredCategory && desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.sizes.includes(desiredSize) && item.color === desiredColor)))}
        if (!desiredBrand && !desiredCategory && !desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        // Combinations of 3
        if (desiredBrand && desiredCategory && desiredSize && !desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.sizes.includes(desiredSize))))}
        if (desiredBrand && desiredCategory && !desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.finalPrice <= desiredMaxPrice)))}
        if (desiredBrand && desiredCategory && !desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.color === desiredColor)))}
        if (desiredBrand && !desiredCategory && desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice)))}
        if (desiredBrand && !desiredCategory && desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.sizes.includes(desiredSize) && item.color === desiredColor)))}
        if (desiredBrand && !desiredCategory && !desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        if (!desiredBrand && desiredCategory && desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice)))}
        if (!desiredBrand && desiredCategory && desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.sizes.includes(desiredSize) && item.color === desiredColor)))}
        if (!desiredBrand && !desiredCategory && desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        if (!desiredBrand && desiredCategory && !desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        // Combinations of 4
        if (desiredBrand && desiredCategory && desiredSize && desiredMaxPrice && !desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice)))}
        if (!desiredBrand && desiredCategory && desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.category === desiredCategory && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        if (desiredBrand && !desiredCategory && desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.sizes.includes(desiredSize) && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        if (desiredBrand && desiredCategory && !desiredSize && desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.finalPrice <= desiredMaxPrice && item.color === desiredColor)))}
        if (desiredBrand && desiredCategory && desiredSize && !desiredMaxPrice && desiredColor) {setProductsArray(productsDataBase.filter(item => (item.brand === desiredBrand && item.category === desiredCategory && item.sizes.includes(desiredSize) && item.color === desiredColor)))}

        context.setSearchParams([desiredBrand, desiredCategory, desiredSize, desiredMaxPrice, desiredColor])
    }

    return (
        <header className='galleryHeader' id='galleryHeader'>
            <div className="formInputs">
                <article className="formInput">
                    <label for="brand">Brand</label>
                    <select id="brand" onChange={e => setDesiredBrand(e.target.value)}>
                        <option value=""></option>

                        {[...new Set(productsDataBase.map(item => item.brand))].map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}

                    </select>
                </article>

                <article className="formInput">
                    <label for="category">Category</label>
                    <select id="category" onChange={e => setdDesiredCategory(e.target.value)}>
                        <option value=""></option>
                        
                        {[...new Set(productsDataBase.map(item => item.category).sort())].map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}

                    </select>
                </article>

                <article className="formInput">
                    <label for="size">Size</label>
                    <select id="size" onChange={e => setDesiredSize(parseInt(e.target.value))}>
                        <option value=""></option>

                        {[...new Set(productsDataBase.map(item => item.sizes).flat().sort())].map(sizes => (
                            <option key={sizes} value={sizes}>{sizes}</option>
                        ))}

                    </select>
                </article>

                <article className="formInput">
                    <label for="price">Max price</label>
                    <select id="price" onChange={e => setDesiredMaxPrice(parseInt(e.target.value))}>
                        <option value=""></option>
                        <option value="20000">$20.000</option>
                        <option value="18000">$18.000</option>
                        <option value="15000">$15.000</option>
                        <option value="12000">$12.000</option>
                        <option value="10000">$10.000</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="color">Color</label>
                    <select id="color" onChange={e => setDesiredColor(e.target.value)}>
                        <option value=""></option>
                        
                        {[...new Set(productsDataBase.map(item => item.color))].map(color => (
                            <option key={color} value={color}>{color}</option>
                        ))}

                    </select>
                </article>

                <article className="formInput">
                    <label for="order">Order by</label>
                    <select id="order">
                        <option value=""></option>
                        <option>Highest price</option>
                        <option>Lowest price</option>
                        <option>Latest releases</option>
                        <option>On sale</option>
                    </select>
                </article>
            </div>

            <div className='btns'>
                <button className='btn-primary' onClick={() => searchProducts()}>Search</button>
                <button className='btn-primary' onClick={() => setProductsArray([productsDataBase[Math.floor(Math.random() * productsDataBase.length)]])}>Feeling lucky</button>
            </div>
        
            <div className='searchResults' id='searchResults'>
                <h2>Search results for:</h2>
                <div className='searchParams'>
                    <p>Brand: {context.searchParams[0]}</p>
                    <p>Category: {context.searchParams[1]}</p>
                    <p>Size: {context.searchParams[2]}</p>
                    <p>Max price: ${context.searchParams[3] ? context.addNumberThousandSeparator(context.searchParams[3]) : null}</p>
                    <p>Color: {context.searchParams[4]}</p>
                    <p>Order by:</p>
                </div>
                <p>Number of results: {productsArray.length}</p>
            </div>

        </header>
    )
}

export default GalleryHeader