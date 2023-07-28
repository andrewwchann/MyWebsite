import React from 'react'
import Reveal from './RevealAnimation'

export default function Intro() {
    return (
        <div className='intro'>
            <div className='intro-name-container'>
                <Reveal>
                    <h1 className='name'>Hi, Andrew here :&#41;</h1>
                </Reveal>
            </div>
            <div className='intro-desc-container'>
                <Reveal>
                    <p className='interests'>
                        I am a aspiring Software Engineer from Edmonton Alberta. I have deep interest
                        in web development, user interface design, aritficial intellegence, and crypto.
                    </p>
                </Reveal>
            </div>
        </div>
    )
}