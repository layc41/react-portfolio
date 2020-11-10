import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <div className="bg-light">
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <div className="row row-beam-md">
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-location-outline h3"></i>
                                            <p className="fg-primary fw-medium fs-vlarge">Location</p>
                                            <p className="mb-0">Carrollton, TX 75007</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-call-outline h3"></i>
                                            <p className="fg-primary fw-medium fs-vlarge">Contact</p>
                                            <p className="mb-1">469-487-6071</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-mail-open-outline h3"></i>
                                            <p className="fg-primary fw-medium fs-vlarge">Email</p>
                                            <p className="mb-1">claudialay41@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid wow fadeInUp">
                                <div className="card-page">
                                    <h3 className="fw-normal">Get in touch</h3>
                                    <form method="POST" className="mt-3" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="fw-medium fg-grey">Full Name</label>
                                            <input type="text" className="form-control" id="name" onBlur={handleChange} defaultValue={name} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="fw-medium fg-grey">Email</label>
                                            <input type="email" name="email" className="form-control" id="email" onBlur={handleChange} defaultValue={email} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message" className="fw-medium fg-grey">Message</label>
                                            <textarea rows="6" className="form-control" id="message" name="message" onBlur={handleChange} defaultValue={message}></textarea>
                                        </div>

                                        <p>*Your information will never be shared with any third party.</p>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                        <div className="form-group mt-4">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;