export const GifCard = ({ category }) => {
    const amountGifs = [1,2,3,4,5]; //Traer los gifs con Fetch. 
    return (
    <>
        <h3>{ category }</h3>
        { 
            amountGifs.map( gif => <p key={ gif }>{ gif }</p> )
        }
    </>)
}
