import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = ()=>{
    const [categorias, setCategorias] = useState(["Rick and Morty", "Mad Max"]);
    
    
    return(
        <>
            {/*Titulo*/}
            <h1>GifApp</h1>
            {/*Entrada*/}
            <AddCategory/>
            <button> Agregar categoria </button>
            {/*Lista de Gifs*/}
            <ol>{ categorias.map( categoria => {
                return <li key={categoria}> {categoria} </li>
            })} 
            </ol>
                {/* GifCard */}
        </>
    ) 
}

