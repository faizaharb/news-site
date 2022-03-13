import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './All.module.css';


export default function All() {

    let [ allNews, setAllNews ] = useState( [] );

    async function globalNews() {
        let { data } = await axios.get( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=46d104877a794fbea2c04f5565cc4a62' );
        setAllNews( data.articles );
    }
    useEffect( () => {
        globalNews();
    }, [] );

    let newArr = allNews.filter( ( news, index ) => { return index < 1 } );
    let sliceArr = allNews.splice( 1, 4 );


    return (
        <>
            <div className="container my-5">
                <div className={ `mb-4 pb-2 ${ style.title }` }>
                    <h2 className='text-capitalize fs-2 fw-bolder text-danger'>lastest news</h2>
                    <span className='text-primary'>Don't miss daily news</span>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        { newArr.map( ( news, index ) =>
                            <div key={ index }>
                                <div className="mainNews">
                                    <img src={ news.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p className='text-danger text-end mt-1'>{ news.source.name }</p>
                                    <div className="newsInfo px-2">
                                        <h3 className='mt-4'>{ news.title }</h3>
                                        <button className={ `btn border-0 p-0 text-capitalize text-primary ${ style.btnShadow }` }>more ...</button>
                                        <p className='content'></p>
                                    </div>
                                </div>
                            </div>
                        ) }
                        <button className={ `btn btn-danger w-100 text-capitalize ${ style.btnShadow }` }>read all news</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            { sliceArr.map( ( news, index ) =>
                                <div className="col-md-6" key={ index }>
                                    <div className="mainNews">
                                        <img src={ news.urlToImage } className="w-100" alt={ 'altimage' } />
                                        <p className='my-3'>{ news.title }</p>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
