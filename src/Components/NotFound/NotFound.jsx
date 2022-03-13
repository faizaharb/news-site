import React from 'react';
import notFound from '../../images/notfound.PNG'

export default function NotFound() {
    return (
        <>
            <div className='text-center'>
                <img src={ notFound } alt={ 'altnotfoundimage' } />
            </div>
        </>
    )
}
