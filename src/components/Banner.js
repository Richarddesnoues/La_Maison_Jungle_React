import React from 'react'
import './styles/Banner.css'
import logo from '../assets/logo.png'


function Banner() {
    const title = 'La Maison Jungle'
    return (
        <div className='lmj-banner'>
            <header>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </header>
        </div>)

}



export default Banner