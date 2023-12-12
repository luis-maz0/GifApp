import { useState } from "react";

export const GifApp = ()=>{
    const [categorias, setCategorias] = useState(["Rick and Morty", "Mad Max"]);
    //console.log( categorias ); 
    const agregarCategoria = ()=>{
        const nombreCategoria = "Tom & Jerry";
        const nuevaCategoria = [...categorias, nombreCategoria];
        setCategorias( nuevaCategoria );  
    }
    return(
        <>
            {/*Titulo*/}
            <h1>GifApp</h1>
            {/*Entrada*/}

            <button onClick={agregarCategoria}> Agregar categoria </button>
            {/*Lista de Gifs*/}
            <ol>{ categorias.map( categoria => {
                return <li key={categoria}> {categoria} </li>
            })} 
            </ol>
                {/* GifCard */}
        </>
    ); 
}

