import React from 'react'
import Reveal from './RevealAnimation.js'
import '../styles/Experience.css'

export default function Experience() {
    const experience = {
        "AE": {
            id: 1,
            brand: "American Eagle",
            title: "Brand Ambassador",
            length: "Jul 2021 - Present",
            desc: [
                "Collaborate with 3+ team members to achieve sale targets of $1000+ hourly",
                "Communicated with 50+ customers per shift to advise on suitable products or suggestions to ensure exceptional customer service",
                "Proactively cleaning the store with efficiency and thoroughness"
            ],
            on: true
        },
        "FC": {
            id: 2,
            brand: "Fresh Co",
            title: "Cashier",
            length: "Mar 2021 - Feb 2022",
            desc: [
                "Addressed each customer with respect and processed the transaction as fast as possible to decrease wait time",
                "Processed $400+ in cash/debit/credit transactions per shift",
                "Performed cleaning duties while adhering to safety protocols"
            ],
            on: false
        }
    }

    const [job, setJob] = React.useState(experience["AE"])
    const [activeButton, setActiveButton] = React.useState(1);
    function handleClick(selectedJob) {
        setJob(experience[selectedJob])
        if (selectedJob === 'AE') {
            setActiveButton(1);
        }
        else if (selectedJob === 'FC') {
            setActiveButton(2);
        }
    }

    return (
        <div className='experience'>
            <Reveal>
                <h1 className='section-title'>-- Experience --</h1>
                <div className='exp-container'>
                    <div className='side-bar'>
                        {/* needed arrow function in onClick to stop immediate rendering */}
                        <button
                            className={activeButton === 1 ? 'exp-button-active' : 'exp-button'}
                            onClick={() => handleClick('AE')}>
                            American Eagle
                        </button>
                        <button
                            className={activeButton === 2 ? 'exp-button-active' : 'exp-button'}
                            onClick={() => handleClick('FC')}>
                            Fresh Co
                        </button>
                    </div>

                    <div className='exp-contents'>
                        <h1 className='job-title'>{job.title}, {job.brand}</h1>
                        <h2 className='job-length'>{job.length}</h2>
                        <ul className='job-details'>
                            {job.desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </Reveal>
        </div>

    )
}