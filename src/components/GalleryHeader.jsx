function GalleryHeader () {
    return (
        <header className='galleryHeader' id='galleryHeader'>
            <div className="formInputs">
                <article className="formInput">
                    <label for="brand">Brand</label>
                    <select id="brand">
                        <option value=""></option>
                        <option >Adidas</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="category">Category</label>
                    <select id="category">
                        <option value=""></option>
                        <option >Basketball</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="size">Size</label>
                    <select id="size">
                        <option value=""></option>
                        <option >11</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="price">Price</label>
                    <select id="price">
                        <option value=""></option>
                        <option >$2000 - $4999</option>
                    </select>
                </article>

                <article className="formInput">
                    <label for="order">Order by</label>
                    <select id="order">
                        <option value=""></option>
                        <option >Highest price</option>
                        <option >Lowest price</option>
                        <option >Latest releases</option>
                        <option >On sale</option>
                    </select>
                </article>
            </div>

            <div className='btns'>
                <button className='btn-primary'>Search</button>
                <button className='btn-primary'>Feeling lucky</button>
            </div>

            <div className='searchResults'>
                <h2>Search results for:</h2>
                <div className='searchParams'>
                    <p>Brand:</p>
                    <p>Category:</p>
                    <p>Size:</p>
                    <p>Order by:</p>
                </div>
                <p>Number of results:</p>
            </div>
        </header>
    )
}

export default GalleryHeader