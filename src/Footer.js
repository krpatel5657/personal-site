import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import e_icon from "./img/email.png";
import fb_icon from "./img/facebook.png";
import ig_icon from "./img/instagram.png";
import in_icon from "./img/linkedin.png";

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Krishna Patel newsletter.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-area'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>

                    </form>
                </div>
            </section>
            <section class='social-media'>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link email'
                            to='/'
                            target='_blank'
                            aria-label='Email'
                        >
                            <img src={e_icon} alt="Email" />
                        </Link>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <img src={fb_icon} alt="Facebook"/>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <img src={ig_icon} alt="Instagram" />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <img src={in_icon} alt="LinkedIn" />
                        </Link>
                    </div>
            </section>
        </div>
    );
}

export default Footer;
