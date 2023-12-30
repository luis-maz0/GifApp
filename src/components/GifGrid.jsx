import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridCard } from "./GifGridCard";

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([])

    const getImages = async () => {
        const newGif = await getGifs(category);
        setGifs(newGif)
    }
    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    gifs.map(gif =>
                        <GifGridCard
                            key={gif.id}
                            {...gif}
                        />
                    )}
            </div>
        </>)
}
