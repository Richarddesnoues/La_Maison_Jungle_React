import React from "react";


import './styles/Categories.css'

export default function Categories({ activeCategory, setActiveCategory, categories }) {
    return (
        <div className="lmj-categories">
            <select

                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value="">---</option>
                {categories.map((category) => (
                    <option key={category.id}>{category}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>


        </div>
    )

}