import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <span className="navbar-brand">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/Content">
                            <span className="nav-link">Card list <span className="sr-only">(current)</span></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">
                            <span className="nav-link" href="#">About</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}
