import React from 'react';

function Footer() {
    return (
        <>
            <div className="page-footer-section bg-dark fg-white">
                <div className="container">
                    <div className="row mb-5 py-3">
                        <div className="col-sm-6 col-lg-2 py-3">
                            <h5 className="mb-3">Pages</h5>
                            <ul className="menu-link">
                                <li><a href="/about" className="">About</a></li>
                                <li><a href="/portfolio" className="">Portfolio</a></li>
                                <li><a href="/contact" className="">Contact</a></li>
                                <li><a href="/resume" className="">Resume</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">
                            <h5 className="mb-3">Contact</h5>
                            <ul className="menu-link">
                                <li><a href="/contact" className="">Contact Me</a></li>
                                <li>claudialay@gmail.com</li>
                                <li>469-487-6071</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">

                            <div className="mt-3">
                                <a href="https://github.com/layc41" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-github"></span></a>
                                <a href="https://stackoverflow.com/users/13451846/layc41" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-stackoverflow"></span></a>
                                <a href="https://www.linkedin.com/in/claudia-lay-9774b8b0/" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Footer;