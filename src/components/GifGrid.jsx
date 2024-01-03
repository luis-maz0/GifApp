import { useEffect, useState } from "react";

import { GifGridCard } from "./GifGridCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    const { gifs, isLoading} = useFetchGifs( category )

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
