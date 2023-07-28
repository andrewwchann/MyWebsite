import React from 'react'
import photo from '../andrew.jpg'
import '../styles/BlobBorder.css'
export default function BlobPhoto() {
    return(
        <div className='blob-border'>
            <img className='photo' src={photo} alt="photo of me" />
        </div>
    )
}