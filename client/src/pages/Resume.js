import React from 'react'

function Resume() {
    return (
        <>
            <div className="page-section pt-5 fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card-page">
                                <h5 className="fg-primary">Resume</h5>
                                <hr />

                                <div className="row justify-content-center">
                                    <div className="col-lg-8 py-3">
                                        <a href="../assets/img/lay_claudia_2020.pdf" download>
                                            <img className="img-fluid rounded mx-auto d-block" src="../assets/img/resume.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;