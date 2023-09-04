import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import '../styles/Sidebar.css'
import Reveal from './RevealAnimation'

export default function SideIcons() {
    return (
        <div className='sidebar'>
            <Reveal>
                <a href='mailto:ajchan@ualberta.ca' className='icons'>
                    <MdEmail size='2em' />
                </a>
            </Reveal>
            <Reveal>
                <a href='https://github.com/andrewwchann' target='blank' className='icons'>
                    <FaGithub size='2em' />
                </a>
            </Reveal>
            <Reveal>
                <a href='https://www.linkedin.com/in/andrew-chan-815195239/' target='blank' className='icons'>
                    <FaLinkedin size='2em' />
                </a>
            </Reveal>

        </div>
    )
}