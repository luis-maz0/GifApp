import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = ()=>{
    const [categories , setCategories] = useState([]);
    
    const onAddCategory = (newCategory)=>{
        if( categories.includes(newCategory)) return; 
        setCategories([newCategory, ...categories]);
    }
    return (
      <>
        {/*Titulo*/}
        <h1>GIF EXPLORER</h1>
        {/*Entrada*/}
        <AddCategory 
            onNewCategory = {onAddCategory} 
        />    
        {/* GifGrid */}
        {
            categories.map((category) => (  
                <GifGrid key={category} 
                         category={category}
                />))
        }
      </>
    ); 
}


