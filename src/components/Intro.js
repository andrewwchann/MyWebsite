import React from 'react'
import Reveal from './RevealAnimation'
import { MdEmail } from "react-icons/md"
import '../styles/Intro.css'
import '../styles/Buttons.css'

export default function Intro() {
    return (
        <div className='intro'>
            <div className='intro-name-container'>
                <Reveal>
                    <h1 className='name'>
                        Hi,
                        <span style={{ color: '#BB86FC' }}> Andrew </span>
                        here :&#41;
                    </h1>
                </Reveal>
            </div>
            <div className='intro-desc-container'>
                <Reveal>
                    <p className='interests'>
                        I am an aspiring Software Engineer from Edmonton, Alberta. I have deep interest
                        in web development, user interface design, aritficial intellegence, and crypto.
                    </p>
                </Reveal>
            </div>

            <Reveal>
                <div className='email-container'>
                    <a
                        className='email-button'
                        href="mailto:ajchan@ualberta.ca"
                    >
                        <MdEmail className='intro-email-icon'/>
                        {" " + "Say hi!"}
                    </a>
                </div>
            </Reveal>
        </div>
    )
}