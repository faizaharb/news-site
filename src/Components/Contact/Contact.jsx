import React from 'react';
import style from './Contact.module.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h4 className='text-capitalize'>contact us</h4>
                <hr className='my-3' />
                <ul className='list-unstyled'>
                    <li className={ `lh-lg p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="home">3407 Wilkinson Court, <br /> Denver Colorado 33901</Link> </li>
                    <li className={ `p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="home">Phone : +1 720-468-2299</Link> </li>
                    <li className={ `p-2 ` }><Link className='text-decoration-none text-white' to="home">Email : support@news.org</Link> </li>
                </ul>
                <ul className='list-unstyled d-flex'>
                    <li className='border rounded-pill px-2 mx-2 fs-4'><a href="https://www.facebook.com" target="_blank" rel='noreferrer' ><i className="fab fa-facebook-f text-white"></i></a></li>
                    <li className='border rounded-pill px-2 mx-2 fs-4'><a href="https://twitter.com" target="_blank" rel='noreferrer' ><i className="fab fa-twitter text-white"></i></a></li>
                    <li className='border rounded-pill px-2 mx-2 fs-4'><a href="https://www.linkedin.com" target="_blank" rel='noreferrer' ><i className="fab fa-linkedin-in text-white"></i></a></li>
                    <li className='border rounded-pill px-2 mx-2 fs-4'><a href="https://mail.google.com" target="_blank" rel='noreferrer' ><i className="fab fa-google-plus-g text-white"></i></a></li>
                </ul>
            </div>
        </>
    )
}
