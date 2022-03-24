import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './All.module.css';
import Subscribe from '../Subscribe/Subscribe';
import imgs from '../../imgs';
import Counter from '../Counter/Counter';





export default function All() {


    let [ allNews, setAllNews ] = useState( [] );
    let [ business, setbusiness ] = useState( [] );
    let [ entertainment, setEntertainment ] = useState( [] );
    let [ science, setscience ] = useState( [] );
    let [ health, sethealth ] = useState( [] );
    let [ technology, settechnology ] = useState( [] );
    let [ sports, setsports ] = useState( [] );


    async function globalNews( newscategory, callback ) {
        let { data } = await axios.get( `https://newsapi.org/v2/top-headlines?country=us&category=${ newscategory }&apiKey=46d104877a794fbea2c04f5565cc4a62` );
        callback( data.articles );
    }
    useEffect( () => {
        globalNews( "general", setAllNews );
        globalNews( "business", setbusiness );
        globalNews( "entertainment", setEntertainment );
        globalNews( "health", sethealth );
        globalNews( "science", setscience );
        globalNews( "sports", setsports );
        globalNews( "technology", settechnology );
    }, [] );

    // all news array
    let newArr = allNews.filter( ( news, index ) => { return index < 1 } );
    let sliceArr = allNews.splice( 1, 4 );

    // business news array
    let sliceOne = business.splice( 0, 1 );
    let sliceThree = business.splice( 1, 3 );

    // entertainment news array
    let sliceEntArr1 = entertainment.splice( 0, 1 );
    let sliceEntArr2 = entertainment.splice( 1, 3 );

    return (
        <>

            <section className="allNews my-3 py-4">
                <div className="container">
                    <div className={ `mb-4 pb-2 ${ style.title }` }>
                        <h2 className='text-capitalize fs-2 fw-bolder text-danger'>lastest news</h2>
                        <span className='text-primary'>Don't miss daily news</span>
                    </div>
                    <div className="row my-5">
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
            </section>

            {/* start business sec */ }
            <section id='business' className='my-3 py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-primary rounded-2 bg-light py-3">
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>business news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-4 px-3">
                                <div className="col-md-8">
                                    { sliceOne.map( ( businessNew, index ) =>
                                        <div key={ index } className={ `${ style.mainImg }` }>
                                            <div className="mainNews">
                                                <img src={ businessNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                                <p className='text-danger text-end mt-1'>{ businessNew.source.name }</p>
                                                <div className="newsInfo px-2">
                                                    <h3 className='mt-4'>{ businessNew.title }</h3>
                                                    <button className={ `btn border-0 p-0 text-capitalize text-primary` }>more ...</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) }
                                </div>
                                <div className="col-md-4 vh-100">
                                    <div className="row ">
                                        { sliceThree.map( ( businessNew, index ) => <div className={ `col-sm-12 ${ style.secondary }` } key={ index }>
                                            <img src={ businessNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                            <p className={ `my-3 ${ style.ellipsis }` }>{ businessNew.title }</p>
                                        </div>
                                        ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="recent">
                                <div className={ ` ${ style.title }` }>
                                    <h4 className='text-capitalize fw-bolder text-danger'>recent all</h4>
                                    <p className='text-primary pb-1'>Don't miss and stay up-to-date</p>
                                </div>
                                <div className="slidesNews mt-5 pt-5 text-danger">

                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
            {/* end business sec */ }

            {/* ads */ }
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className={ `${ style.ads } p-3 h-25 border d-flex position-relative` }>
                                <div className={ `image w-50 ${ style.clipping }` }>
                                    <img src={ imgs[ 4 ].src } className="w-100" alt="" />
                                </div>
                                <div className={ `${ style.skew } d-flex align-items-center justify-content-center flex-column` }>
                                    <div className={ `firstImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 6 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `midImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 7 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `lastImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 8 ].src } className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className={ `content w-50 ${ style.mirrorClipp }` }>
                                    <div className="contentText h-100 d-flex flex-column align-items-end justify-content-center">
                                        <h5 className=' text-uppercase fw-bold fs-2 text-primary text-center ms-auto pe-4'>enjoy <br /> with your dreams</h5>
                                        <p className={ `text-secondary ${ style.moving }` }>Lorem ipsum dolor,</p>
                                        <button className={ `btn btn-danger text-uppercase ${ style.moving }` }>book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className={ `${ style.ads } p-3 h-25 border d-flex position-relative` }>
                                <div className={ `image w-50 ${ style.clipping }` }>
                                    <img src={ imgs[ 6 ].src } className="w-100" alt="" />
                                </div>
                                <div className={ `${ style.skew } d-flex align-items-center justify-content-center flex-column` }>
                                    <div className={ `firstImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 6 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `midImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 7 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `lastImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 8 ].src } className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className={ `content w-50 ${ style.mirrorClipp }` }>
                                    <div className="contentText h-100 d-flex flex-column align-items-end justify-content-center">
                                        <h5 className=' text-uppercase fw-bold fs-2 text-primary text-center ms-auto pe-4'>enjoy <br /> with your dreams</h5>
                                        <p className={ `text-secondary ${ style.moving }` }>Lorem ipsum dolor,</p>
                                        <button className={ `btn btn-danger text-uppercase ${ style.moving }` }>book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className={ `${ style.ads } p-3 h-25 border d-flex position-relative` }>
                                <div className={ `image w-50 ${ style.clipping }` }>
                                    <img src={ imgs[ 8 ].src } className="w-100" alt="" />
                                </div>
                                <div className={ `${ style.skew } d-flex align-items-center justify-content-center flex-column` }>
                                    <div className={ `firstImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 6 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `midImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 7 ].src } className="w-100" alt="" />
                                    </div>
                                    <div className={ `lastImg py-1 w-50 ${ style.shape }` }>
                                        <img src={ imgs[ 8 ].src } className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className={ `content w-50 ${ style.mirrorClipp }` }>
                                    <div className="contentText h-100 d-flex flex-column align-items-end justify-content-center">
                                        <h5 className=' text-uppercase fw-bold fs-2 text-primary text-center ms-auto pe-4'>enjoy <br /> with your dreams</h5>
                                        <p className={ `text-secondary ${ style.moving }` }>Lorem ipsum dolor,</p>
                                        <button className={ `btn btn-danger text-uppercase ${ style.moving }` }>book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ads */ }



            {/* start entertainment news sec */ }
            <section id='entertainment' className='my-3 py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className={ `secTitle d-flex justify-content-between align-items-center ${ style.borderColor } rounded-2 bg-light py-3` }>
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>entertainment news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-4 px-5">
                                <div className="col-md-12 mb-4">
                                    { sliceEntArr1.map( ( entertainmentNew, index ) => <div key={ index }>
                                        <img src={ entertainmentNew.urlToImage } className={ `${ style.mainImg }` } alt={ 'altimage' } />
                                        <p className='text-danger text-end mt-1'>{ entertainmentNew.source.name }</p>
                                        <div className="newsInfo px-2">
                                            <h3 className='mt-4'>{ entertainmentNew.title }</h3>
                                            <button className={ `btn border-0 p-0 text-capitalize text-primary` }>more ...</button>
                                        </div>
                                    </div>
                                    ) }
                                </div>

                                { sliceEntArr2.map( ( entertainmentNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ entertainmentNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p className='my-3'>{ entertainmentNew.title }</p>
                                </div>
                                ) }

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={ `${ style.advertise }` }>
                                <div className={ `${ style.overlay } p-4` }>
                                    <div className="estateImg d-flex justify-content-between pt-4">
                                        <img src={ imgs[ 0 ].src } alt="" className='w-25 border border-1 border-white rounded' />
                                        <img src={ imgs[ 1 ].src } alt="" className='w-25 border border-1 border-white rounded' />
                                        <img src={ imgs[ 2 ].src } alt="" className='w-25 border border-1 border-white rounded' />
                                    </div>
                                    <div className="content text-center py-4">
                                        <h5 className='text-capitalize text-danger pb-3 fs-3 fw-bolder'>come. choose. invest.</h5>
                                        <p className='text-white'>Awaiting you with full safety and security</p>
                                    </div>
                                    <div className="contactInfo mt-4">
                                        <ul className='list-unstyled text-white'>
                                            <li><strong className='text-capitalize'>call : </strong>33399 65442</li>
                                            <li><strong className='text-capitalize'>address : </strong> behind salam school, queen village, cairo.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* end entertainment news sec */ }

            <Counter />

            {/* start health news sec */ }
            <section id='health' className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-success rounded-2 bg-light py-3">
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>health news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-4">
                                { health.map( ( healthNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ healthNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ healthNew.title }</p>
                                </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>
            {/* end health news sec */ }

            {/* start science news sec */ }
            <section id='science' className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-warning rounded-2 bg-light py-3">
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>science news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-4">
                                { science.map( ( scienceNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ scienceNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ scienceNew.title }</p>
                                </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>
            {/* end science news sec */ }

            {/* start sports news sec */ }
            <section id='sports' className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-danger rounded-2 bg-light py-3">
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>sports news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-4">
                                { sports.map( ( sportsNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ sportsNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ sportsNew.title }</p>
                                </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>
            {/* end sports news sec */ }

            {/* start technology news sec */ }
            <section id='techology' className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="secTitle d-flex justify-content-between align-items-center border-start border-5 border-info rounded-2 bg-light py-3">
                                <h2 className='text-capitalize ps-4 fs-2 fw-bolder text-danger'>technology news</h2>
                                <button className='btn shadow-none text-capitalize text-secondary me-4 pe-4'>view all</button>
                            </div>
                            <div className="row my-5">
                                { technology.map( ( technologyNew, index ) => <div className='col-md-4' key={ index }>
                                    <img src={ technologyNew.urlToImage } className="w-100" alt={ 'altimage' } />
                                    <p>{ technologyNew.title }</p>
                                </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </section>
            {/* end technology news sec */ }
        </>
    )
}
