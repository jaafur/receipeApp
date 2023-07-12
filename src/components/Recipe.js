import React from 'react'
import style from '../recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    
  return (
    <>
    <div className={style.recipe}>
   
      <div className={style.top}>
      <h2>{title}</h2>
      <p>{calories}</p>
      <img src={image} />
      </div> 
      <ul>
        <h2>How to prepare?</h2>
        {ingredients.map((ingredint) => (
            <li>{ingredint.text}</li>
        )
        )}
       </ul>
      </div>
    </>
  )
}

export default Recipe
