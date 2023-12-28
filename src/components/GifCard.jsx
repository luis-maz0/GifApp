import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifCard = ({ category }) => {
    
    useEffect(()=>{
        getGifs(category)
    }, []) 
    
    return (
    <>
        <h3>{ category }</h3>
        { 
            //amountGifs.map( gif => <p key={ gif }>{ gif }</p> )
        }
    </>)
}
