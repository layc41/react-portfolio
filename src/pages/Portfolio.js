import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: 'Movie Lot',
            image: '../assets/img/movie-lot.png',
            deployed: 'https://movielot.herokuapp.com/',
            github: 'https://github.com/layc41/final-countdown',
            description: 'As movie lovers, we wanted an app that would introduce us to new and old movies to change our normal variety. Then save the movies to remind us to watch them.', 
            technologies: 'GraphQL, Mongo, React, JavaScript, Apollo-Server, Apollo-Client, LocalStorage, React-Bootstrap, Node.js, Heroku, React Hooks, JWT-decode, Third-Party API, Dotenv, PWA, Express, Bcrypt'
        },
        {
            name: 'Instartist',
            image: '../assets/img/instartist.png',
            deployed: 'https://instartist.herokuapp.com/',
            github: 'https://github.com/layc41/instartist',
            description: 'Instartist is a social media application for virtually exhibiting works created by artists; provides a community to display and share the perspective of works of art of all kinds, where users can interact with these works and leave their comments. Both artists and users will create their accounts where they can upload a profile picture and information about themselves.',
            technologies: 'Node.js, Bcrypt, dotenv, MySQL, Express, Express-Session, Handlebars, Sequelize, Cloudinary, Multer, JS, OOP, MVC, API, Bootstrap, Heroku' 
        },
        {
            name: 'Password Generator',
            image: '../assets/img/password-generator.png',
            deployed: 'https://layc41.github.io/password-generator/',
            github: 'https://github.com/layc41/password-generator',
            description: 'This is a customizable random user password generator. It asks for length of password from 8 - 128 characters. Then asks for character types to be included in the password. Types of characters available are lowercase, uppercase, numbers, and symbols. If the amount of characters are out of range and no character types are selected, then a password cannot be generated.', 
            technologies: 'JavaScript'
        },
        {
            name: 'Tech Blog',
            image: '../assets/img/tech-blog.png',
            deployed: 'https://frozen-sierra-64365.herokuapp.com/',
            github: 'https://github.com/layc41/tech-blog',
            description: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
            technologies: 'JavaScript, Node.js, MongoDB, Handlebars, MVC, dotenv, MySQL'
        },
        {
            name: 'Refactored Ecommerce Application with Redux',
            image: '../assets/img/shop-redux.png',
            deployed: 'https://ancient-castle-97391.herokuapp.com/',
            github: 'https://github.com/layc41/shop-shop-redux',
            description: 'Redux is the industry standard for managing complex state in a large-scale React application. This is a refactored e-commerce platform that was created by replacing the way it handles complex state management using the Context API with Redux, the open-source JavaScript library that it’s emulating.',
            technologies: 'JavaScript, Node.js, MongoDB, Redux, MVC, Stripe, GraphQL'
        },
        {
            name: 'Bored at Home',
            image: '../assets/img/bored.png',
            deployed: 'https://josephptflanagan.github.io/project-1',
            github: 'https://github.com/layc41/project-1',
            description: 'Users want to learn new things and be entertained. That’s where Bored at Home comes into play. Our site is recommended for those who are bored at home, waiting at the doctor’s office, or in a random department store where a significant other might be trying on clothes. It’s sure to be a good time for all parties involved.',
            techologies: 'Third Party APIs, Pure CSS, HTML/CSS, JS, AJAX, JQuery'
        }
    ]

    return (
        <>
            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 py-3">
                                {projects.map((project) => (
                                    <div class="widget-wrap wow fadeInUp">
                                        <article className="blog-entry container-fluid">
                                            <div className="entry-header">
                                                <div className="post-thumbnail">
                                                    <img
                                                        src={project.image}
                                                        alt="project-image" />
                                                </div>
                                            </div>
                                            <div className="post-title"><a href={project.github} target="_blank">{project.name} </a><span class="mai-logo-github"></span></div>
                                            <div className="entry-content"><a href={project.deployed} target="_blank">Visit the Site</a></div>
                                            <div className="entry-content">
                                                <p>{project.description}</p>
                                                <p>Technologies: {project.technologies}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Portfolio;
