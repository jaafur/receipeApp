import React, { useEffect, useState } from 'react';
import './App.css'
import {v4 as uuid4} from 'uuid'
import Recipe from './components/Recipe';

function App() {
  const [recipes,setRecipe] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] =useState('chiken')

  const id = 'c1544266'
  const key = '527d28cfe5ad40c8e7e464d68ffd1a75'
  const url =`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`

  

  const handleChange =(e)=>{
    setSearch(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault() 
    setQuery(search)
    setSearch('')
  }
  useEffect(() => {
   getData()
   console.log(recipes)
  }, [query]);


  const getData = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    setRecipe(data.hits)
  }


  return (
  <div className='App' onSubmit={handleSubmit}>
   <form className='search-form'>
    <input type='text' className='search-bar' value={search} onChange={handleChange}/>
    <button type='submit' className='search-btn'>
      Search
    </button>
   </form>
   
   {recipes.map((recipe,index) =>
    <Recipe 
    key={uuid4()}
    title={recipe.recipe.label} 
    calories={parseInt(recipe.recipe.calories)}
    image={recipe.recipe.image}
    ingredients ={recipe.recipe.ingredients}/>
    
  )}
  
  </div>
)}




export default App;
