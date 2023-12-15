import { getGifs } from "../GetGifs";

export const GifCard = ({ category }) => {
    
    getGifs(); //pesime práctica -> Arreglar con useEffect. 

    return (
    <>
        <h3>{ category }</h3>
        { 
            //amountGifs.map( gif => <p key={ gif }>{ gif }</p> )
        }
    </>)
}
