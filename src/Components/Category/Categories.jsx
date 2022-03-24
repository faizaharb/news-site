import React from 'react';
import style from './Categories.module.css';
import { Link } from 'react-router-dom';


export default function Categories() {
    return (
        <>
            <div className="categorey">
                <h4 className='text-capitalize'>categories</h4>
                <hr className='my-3' />
                <ul className='list-unstyled'>
                    <li className={ `text-capitalize p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="business">business</Link> </li>
                    <li className={ `text-capitalize p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="entertainment">entertainment</Link> </li>
                    <li className={ `text-capitalize p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="health">health</Link> </li>
                    <li className={ `text-capitalize p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="science">science</Link> </li>
                    <li className={ `text-capitalize p-2 ${ style.borderColor }` }><Link className='text-decoration-none text-white' to="sports">sports</Link> </li>
                    <li className={ `text-capitalize p-2 ` }><Link className='text-decoration-none text-white' to="general">techonology</Link> </li>
                </ul>
            </div>
        </>
    )
}
