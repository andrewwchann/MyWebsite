import React from 'react'
import Reveal from './RevealAnimation.js'
import '../styles/Experience.css'
import android_p1 from '../homescreen.jpg'

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
        // <div className='experience'>
        //     <Reveal>
        //         <h1 className='section-title'>-- Experience --</h1>
        //         <div className='exp-container'>
        //             <div className='side-bar'>
        //                 {/* needed arrow function in onClick to stop immediate rendering */}
        //                 <button
        //                     className={activeButton === 1 ? 'exp-button-active' : 'exp-button'}
        //                     onClick={() => handleClick('AE')}>
        //                     American Eagle
        //                 </button>
        //                 <button
        //                     className={activeButton === 2 ? 'exp-button-active' : 'exp-button'}
        //                     onClick={() => handleClick('FC')}>
        //                     Fresh Co
        //                 </button>
        //             </div>

        //             <div className='exp-contents'>
        //                 <h1 className='job-title'>{job.title}, {job.brand}</h1>
        //                 <h2 className='job-length'>{job.length}</h2>
        //                 <ul className='job-details'>
        //                     {job.desc.map((item, index) => (
        //                         <li key={index}>{item}</li>
        //                     ))}
        //                 </ul>
        //             </div>

        //         </div>
        //     </Reveal>
        // </div>
        <div className='projects-container'>
            <div>
                <div className='section-header'>
                    <Reveal>
                        <h1 className='section-title'>Projects</h1>
                    </Reveal>
                </div>
                <Reveal>
                    <div className='project-contents'>
                        <div className='project-name'>
                            <h1>Kessler Asteroid Controller</h1>
                        </div>

                        <p>
                            This was a group project that utilized fuzzy logic with genetic algorithms to optimize our logic.
                            The goal of the project was create a controller for the ship of the game
                            that would survive longer than our professors controller. I helped in creating rules for dropping
                            mines, and created the genetic algorithm using EasyGA that trained our input of the fuzzy logic.
                        </p>
                    </div>
                </Reveal>

                <Reveal>
                    <div className='project-contents'>
                        <div className='project-name'>
                            <h1>Map Reduce Library</h1>
                        </div>

                        <p>
                            This project was about developing a multi-threaded MapReduce library leveraging
                            synchronization primitives, including mutexes and condition
                            variables, to ensure thread-safe operations and efficient data processing on multicore systems
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className='project-contents'>
                        <div className='project-name'>
                            <h1>Monthly Finance Tracker App</h1>
                        </div>

                        <p>
                            Developed an Android app to assist users in tracking monthly expenses within a team of 5.
                            My main priorities in the development were fragment to fragment communication (in other words, sharing data from screen to screen),
                            edit and delete functionality, as well as camera functions.
                        </p>
                        {/* <div className='proj-photo'>
                        <img className='photo' src={android_p1} alt="photo of me" />
                    </div> */}
                    </div>
                </Reveal>
            </div>
        </div>

    )
}