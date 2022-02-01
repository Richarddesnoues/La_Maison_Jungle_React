import React from 'react'
import './styles/Footer.css'
import { useState } from 'react'


function Footer() {
    const  [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        setInputValue(e.target.value)
    }
    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        }
    };


    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionnés de plantes
            </div>
            <div className='lmj-footer-elem'>
                laissez-nous votre mail :
            </div>
            <input 
                placeholder='Entrez votre mail'
                onChange= {handleInput}
                value={inputValue} 
                onBlur={ handleBlur }
                />
            
        </footer>
    )
}


export default Footer