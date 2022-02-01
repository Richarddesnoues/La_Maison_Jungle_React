import React from 'react'
import CareScale from "./CareScale";
import './styles/PlantItem.css';

function PlantItem({ name, cover, id, light, water, price }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() =>handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
                {price}€
            </div>

        </li>
    )
}


function handleClick(plantName){
    //plantName.preventDefault()
    
    alert(`Vous avez ajoutez 1 ${plantName} à votre panier.`)
  
   
    }

export default PlantItem