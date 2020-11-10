import React from 'react';

function NavBar() {
    return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" sticky="top">
                <div className="container">
                    <a className="navbar-brand" href="/">Claudia Lay</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
            
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <div className="ml-auto my-2 my-lg-0">
                            <a className="btn btn-dark rounded-pill nav-link" href="/resume">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
    </>
    )
}

export default NavBar;