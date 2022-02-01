import React from 'react'
import { useState } from 'react'
import { plantList } from './datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import './styles/ShoppingList.css'


export default function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState("")
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    function addToCart(name, price) {
        const currentPlantSaved = cart.find(plant => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            console.log(name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 2 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }




    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => (
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />

                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null

                ))}
            </ul>
        </div>
    )
}


/*return (
    <ul>
        {plantList.map((plant) => (
            <li key={plant.id}>
                {plant.name}
                {plant.isBestSale && <span>🔥</span>}</li>
        ))}
    </ul>
)*/


