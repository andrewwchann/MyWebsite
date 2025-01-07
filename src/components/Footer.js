import React from 'react'
import SideIcons from './SideIcons'
import Reveal from './RevealAnimation.js'
import '../styles/Footer.css'
import '../styles/Sidebar.css'

export default function Footer() {
    return (
        <div className='footer'>
            <Reveal>
                <p className='footer-text'>Develped and designed in React by Andrew Chan.</p>
                {/* <h1>Develped and designed in React</h1>
                <h1>by Andrew Chan.</h1> */}
            </Reveal>
                <SideIcons className='icon-resized-page' />
        </div>
    )
}