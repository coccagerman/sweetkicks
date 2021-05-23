function ItemCarousel ({mainImage, images}) {

        // Function that displays the carousel images
        const showCarouselImages = () => images.map((image) => (
                <div className="carousel-item">
                    <img src={`/${image}`} className="d-block carousel-img" alt="Product slide."/>
                </div>
            )
        )

        // Function that displays the carousel indicators
        const showCarouselIndicators = () => images.map((image) => (
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={(images.indexOf(image)+1)} aria-label={`Slide ${(images.indexOf(image)+2)}`} ></button>
            )
        )

    return (

        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {showCarouselIndicators()}
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mainImage} className="d-block carousel-img" alt="Product slide." />
                </div>

                {showCarouselImages()}

            </div>

            <button className="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default ItemCarousel











