import React from 'react';
import style from './Counter.module.css';

export default function Counter() {

  let nums = document.querySelectorAll( "h4" );
  let counterSec = document.querySelector( ".counter" );
  let started = false;

  window.onscroll = function () {
    if ( window.scrollY >= counterSec ) {
      if ( !started ) {
        nums.forEach( ( num ) => startCountUp( num ) );
      }
      started = true;
    }
  }

  function startCountUp( el ) {
    let goal = el.dataset.goal;
    let counter = setInterval( () => {
      el.textContent++;
      if ( el.textContent === goal ) {
        clearInterval( counter )
      }
    }, 3 );
  }

  return (
    <>
      <section className={ `counter ${ style.counter } text-danger py-5` }>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-3">
              <div className="visitors text-center">
                <i className="fa fa-users fa-2x"></i>
                <h5 className='text-uppercase fw-bold py-3'>users</h5>
                <h4 data-goal="100">0</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="subscriptions text-center">
                <i class="fa-solid fa-at fa-2x"></i>
                <h5 className='text-uppercase fw-bold py-3'>subscribers</h5>
                <h4 data-goal="300">0</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="publishedNews text-center">
                <i class="fa-solid fa-newspaper fa-2x"></i>
                <h5 className='text-uppercase fw-bold py-3'>published news</h5>
                <h4 data-goal="100">0</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sources text-center">
                <i class="fa-solid fa-magnifying-glass fa-2x"></i>
                <h5 className='text-uppercase fw-bold py-3'>sources</h5>
                <h4 data-goal="200">0</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
