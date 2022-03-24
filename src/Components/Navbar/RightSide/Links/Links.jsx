import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder active" aria-current="page" to="home">home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="business">business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="entertainment">entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="health">health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="science">science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="sports">sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-capitalize fw-bolder" to="technology">technology</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
