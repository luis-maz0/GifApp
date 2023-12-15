import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifCard } from "./components/GifCard";

export const GifApp = ()=>{
    const [categories , setCategories] = useState([]);
    
    const onAddCategory = (newCategory)=>{
        if( categories.includes(newCategory)) return; 
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
        {/* GifCard */}
        {
            categories.map((category) => (  
                <GifCard key={category} 
                         category={category}
                />))
        }
      </>
    ); 
}


