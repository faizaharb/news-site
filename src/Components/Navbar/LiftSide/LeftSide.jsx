import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftSide() {
    return (
        <>
            <Link className="navbar-brand text-white fs-3 fw-bold" to="home"><span><i className="fa-solid fa-newspaper"></i></span> News</Link>
        </>
    )
}
