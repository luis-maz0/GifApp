import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () => {
        const newGif = await getGifs(category);
        setGifs(newGif)
        setIsLoading(false)
    }
    useEffect(() => {
        getImages()
    }, [])

    return({
        gifs,
        isLoading
    })
} 
