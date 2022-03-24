import React from 'react';
import style from './Subscribe.module.css';

export default function Subscribe() {
    return (
        <>
            <div className={ `subscribe text-white text-center rounded-2 p-3 ${ style.bgFormColor }` }>
                <h4 className='text-capitalize fw-bolder my-4'>subscribe newsletter!</h4>
                <p>Want to be notified when we launch a update in news. Just sign up and we'll send you a notification by email.</p>
                <form className='my-4 d-flex'>
                    <input type="email" className='form-control me-2' placeholder='Your Email' />
                    <button className='btn btn-success text-capitalize text-white fw-bolder'>send</button>
                </form>
            </div>
        </>
    )
}
