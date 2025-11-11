import React from 'react';
import "./experience.css";
import images from '../images';

const Experience = () => {
    const { craftlab, amalitech } = images;
    return (
        <>
            <div className="experience-container">
                <h2>My Professional Experience</h2>
                <div className="experience-grid">
                    <div className='cont craftlab'>
                        <div className="info">
                            <div className='info-header'>
                                <h3>Fullstack development Intern</h3>
                                <p className='date'>May 2024 - July 2024</p>
                            </div>
                            <div className='info-location-logo'>
                                <img src={craftlab} alt="craftlab-logo" />
                                <p className='location'><span>Meta-Craftlab -</span>Mumbai Maharashtra, India</p>
                            </div>
                            <ul>
                                <li>Utilized Git for version control and GitHub for repository management, pivoting collaborative project workflows and code management.</li>
                                <li>Developed a responsive design tester for testing the responsiveness of websites with predefined dimensions using SvelteJs.</li>
                                <li>Utilized SvelteKit to create dynamic web applications, including server-side rendering and routing.</li>
                                <li>Implemented Prisma ORM for database management in building an Instagram clone app, improving data handling and schemamanagement.</li>
                            </ul>
                        </div>

                    </div>
                    <div className='cont amalitech'>
                        <div className="info">
                            <div className="info-header">
                                <h3>AWS re/Start Learner</h3>
                                <p className='date'>November 2023- March 2024</p>
                            </div>
                            <div className="info-location-logo">
                                <img src={amalitech} alt="amalitech-logo" />
                                <p className='location'><span>AmaliTech Services</span> - Legon,Ghana</p>
                            </div>
                            <ul>
                                <li>Utilized Linux system administration and automation through Bash scripting for efficient management and customization of system configurations, leading to streamlined operations and reduced downtime for the employer’s IT infrastructure.</li>
                                <li>Deployed and managed AWS cloud services via the management console and CloudFormation, empowering the employer to leverage scalable computing, storage, and networking solutions efficiently, optimizing resource utilization and reducing operational costs.</li>
                                <li>Operated the Database Management systems and the general SQL commands that can be used to manipulate real world data effectively for informed decision-making and business success.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience
