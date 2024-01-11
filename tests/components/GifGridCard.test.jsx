import { GifGridCard } from "../../src/components/GifGridCard"
import { render, screen} from "@testing-library/react"

describe('Pruebas en <GifGridCar/>', () => { 
    
    const title = "One Piece";
    const url = "https://onepiece.com/luffy.jpg";
    
    test('Match con el snapshot', () => {
        const {container } = render( <GifGridCard title={title} url={url}/> )
        expect( container ).toMatchSnapshot()
    })
    
    test('Debe mostrar la imm con la URL y ALT indicado', () => {
        render( <GifGridCard title={title} url={url}/>)
        screen.debug()
        expect( screen.getByRole("img").src).toBe(url)
        expect( screen.getByRole("img").alt).toBe(title)
      })
 })