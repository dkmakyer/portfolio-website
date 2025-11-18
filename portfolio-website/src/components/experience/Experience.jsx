import React from 'react';
import "./experience.css";
import images from '../images';

const Experience = () => {
    const { craftlab, amalitech, npontuLogo } = images;

    const experienceData = [
        {
            id: 1,
            position: "Frontend development Graduate Trainee",
            date: "April 2025- June 2025",
            srcImg: amalitech,
            location: "AmaliTech Services - Legon,Ghana",
            duties: [
                "Built robust web interfaces using HTML, CSS, JavaScript, and TypeScript, with a focus on clean, maintainable code and scalable architecture to enhance user experience and application performance.",
                "Applied Agile/Scrum methodologies and collaborated via Git and GitHub for seamless version control and project delivery in a team environment.",
                "Delivered key projects including a Journal App with localStorage-based data persistence and a real-time Character Counter App showcasing dynamic DOM manipulation and event handling.",
                "Embraced testing best practices using Jest to ensure code reliability and maintainability, contributing to a culture of quality assurance within the development team.",
                "Participated in professional communication workshops to refine presentation, collaboration, and stakeholder interaction skills essential for successful project execution."
            ]
        },
        {
            id: 2,
            position: "Platform Deveopment Intern",
            date: "February 2025- April 2025",
            srcImg: npontuLogo,
            location: "Npontu Technologies - Accra, Ghana",
            duties: [
                "Converted detailed UI/UX designs into responsive and accessible interfaces for a Learning Management System and a Task Management App using HTML, CSS, and vanilla JavaScript.",
                "Contributed to backend integration by implementing essential CRUD operations and authentication flows using Laravel, enhancing application functionality and user management.",
                "Delivered key projects including a Journal App with localStorage-based data persistence and a real-time Character Counter App showcasing dynamic DOM manipulation and event handling.",
                "Collaborated in a cross-functional team environment, demonstrating strong adaptability and code ownership.",
                "Engaged in code reviews and knowledge-sharing sessions to foster continuous learning and uphold coding standards within the development team."
            ]
        },
        {
            id: 2,
            position: "Fullstack development Intern",
            date: "May 2024 - July 2024",
            srcImg: craftlab,
            location: "Meta-Craftlab - Mumbai Maharashtra, India",
            duties: [
                "Utilized Git for version control and GitHub for repository management, pivoting collaborative project workflows and code management.",
                "Developed a responsive design tester for testing the responsiveness of websites with predefined dimensions using SvelteJs.",
                "Utilized SvelteKit to create dynamic web applications, including server-side rendering and routing.",
                "Implemented Prisma ORM for database management in building an Instagram clone app, improving data handling and schema management."
            ]
        },
        {
            id: 3,
            position: "AWS re/Start Learner",
            date: "November 2023- March 2024",
            srcImg: amalitech,
            location: "AmaliTech Services - Legon,Ghana",
            duties: [
                "Utilized Linux system administration and automation through Bash scripting for efficient management and customization of system configurations, leading to streamlined operations and reduced downtime for the employer’s IT infrastructure.",
                "Deployed and managed AWS cloud services via the management console and CloudFormation, empowering the employer to leverage scalable computing, storage, and networking solutions efficiently, optimizing resource utilization and reducing operational costs.",
                "Operated the Database Management systems and the general SQL commands that can be used to manipulate real world data effectively for informed decision-making and business success."
            ]
        }
    ];


    return (
        <>
            <div className="experience-container">
                <h2>My Professional Experience</h2>
                <div className="experience-grid">
                    {
                        experienceData.map((item) => {
                            return (
                                <div className='workplace' key={item.id}>
                                    <div className="info">
                                        <div className='info-header'>
                                            <h3>{item.position}</h3>
                                            <p className='date'>{item.date}</p>
                                        </div>
                                        <div className='info-location-logo'>
                                            <p className='location'>{item.location}</p>
                                            <img src={item.srcImg} alt={item.position} />
                                        </div>
                                        <ul>{item.duties.map((duty, index) => <li key={index}>{duty}</li>)}</ul>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Experience
