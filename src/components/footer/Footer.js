import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

import './footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <article className='footer-grid'>
                <h2 className='sr-only'>Site Footer</h2>
                <section>
                    <img src='https://via.placeholder.com/150x200' alt='logo' />
                </section>
                <section>
                    <h3 className='footer-titles'>Site Menu</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/menu'>Menu</a></li>
                        <li><a href='/reservation'>Reservation</a></li>
                        <li><a href='/online-order'>Online order</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </section>
                <section>
                    <h3 className='footer-titles'>Contact</h3>
                    <address>
                        <a href="mailto:info@littlelemon.com">info@littlelemon.com</a><br />
                        <a href="tel:+14800000000">(480) 000-0000</a>
                    </address>
                </section>
                <section>
                    <h3 className='footer-titles'>Social Media</h3>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com'>
                                <FaFacebookSquare aria-hidden='true' className='icons' />
                                <span className='sr-only'>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.twitter.com'>
                                <FaTwitterSquare aria-hidden='true' className='icons' />
                                <span className='sr-only'>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram'>
                                <FaInstagramSquare aria-hidden='true' className='icons' />
                                <span className='sr-only'>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </footer>
    );
};

export default Footer;
