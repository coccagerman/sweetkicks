function Wishlist ({wishListcounter}) {
    return (
        <h1>{wishListcounter === 0 ? 'You have no items in your wish list.' : 'Congrats, now buy the staff, bro.'}</h1>
    )
}

export default Wishlist