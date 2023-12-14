import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = ()=>{
    const [categories , setCategories] = useState([]);
    
    const onAddCategory = (newCategory)=>{
        setCategories([newCategory, ...categories]);
    }
    return (
      <>
        {/*Titulo*/}
        <h1>GifApp</h1>
        {/*Entrada*/}
        <AddCategory 
            onNewCategory = {onAddCategory} 
        />
        {/*Lista de Gifs*/}
        <ol>
          {categories.map((categorie) => {
            return <li key={categorie}> {categorie} </li>;
          })}
        </ol>
        {/* GifCard */}
      </>
    ); 
}


