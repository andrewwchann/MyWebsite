import React from 'react'
import BlobPhoto from './BlobBorderPhoto'
import Reveal from './RevealAnimation.js'

export default function AboutMe() {
    // const technologies = ["Python3", "C++", "HTML and CSS", "Java Script", "React.js"]
    return (
        <div className='about'>
            <div className='section-header'>
                <Reveal>
                    <h1 className='section-title'>About me</h1>
                </Reveal>
            </div>


            <div className='about-container'>
                <Reveal>
                    <div className='about-items'>
                        <p className='about-desc'>
                            Currently, I am a 3rd year Software Engineering Coop student at the <a href='https://www.ualberta.ca/about/index.html'>University of Alberta</a>.
                            I am eager to gain real experience in the tech industry to learn about real development and team work.
                        </p>
                        <p>
                            Some of the technologies I have been working with for the past year have been:

                        </p>
                        <ul className='tech-items'>
                            <li>Python3</li>
                            <li>C++</li>
                            <li>HTML and CSS</li>
                            <li>Java Script</li>
                            <li>React.js</li>
                        </ul>
                        <p>
                            Outside of school and my coding life, I like to spend time with friends playing games and sports!
                        </p>
                    </div>
                </Reveal>
            </div>
            <div className='photo-container'>

                <BlobPhoto />

            </div>
        </div>
    )
}