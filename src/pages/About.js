import React from 'react'

function About() {
    return (
        <>
            <div className="page-section pt-5 fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card-page">
                                <h5 className="fg-primary">About Me</h5>
                                <hr />

                                <div className="row justify-content-center">
                                    <div className="col-lg-8 py-3">
                                        <div className="team-item">
                                                <img className="img-fluid img-thumbnail rounded mx-auto d-block" src="../assets/img/profile.jpeg" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                    <p>Claudia Lay is a currently a Health Consultant with Alight Solutions. She has experience managing multiple projects, consulting, healthcare, natural sciences, research, and clinical care. I graduated from the University of Texas at Austin within three years with a Biochemistry degree with a minor in Business and Pre-Health professions. She initially started her career in clinical research and pursued dentistry. After applying to Dental School and receiving an acceptance, she has decided to change careers for a more exciting career in Tech.</p>
                                    <p>With her leadership skills, tenacity, and commitment to give back, she has been awarded many accolades including multiple scholarships, Presidential Volunteer Award, 1st Place in the HOSA state competition, and speaker at the 114th NMA Conference in Los Angeles. These achievements are humbling to her, and she hopes to continue this excellence in every step she takes in her career.</p>
                                    <p>As a life-long learner, Claudia appreciates and readily accepts the challenges of switching careers to a fast-paced career in technology. To develop her skillset, she has received her UT Coding Bootcamp Certificate and is ready to continue to learn and practice her new skillset. Although new to coding and development, she has picked up the skills to be a full-stack developer and hopes to develop them even further with the right company.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
};

export default About;