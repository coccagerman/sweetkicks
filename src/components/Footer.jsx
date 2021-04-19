import FooterLogo from '../assets/sweetkicks_logo_footer.png'

function Footer () {
    return (
        < >
        <footer>
            <img className='footerLogo' src={FooterLogo} alt='Company logo' />
            <div>
                <a href="https://www.facebook.com/" target="_blank"><i class="socialNetwork fab fa-facebook-square"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i class="socialNetwork fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="socialNetwork fab fa-instagram"></i></a>
            </div>
        </footer>   
        </>
    )
}

export default Footer