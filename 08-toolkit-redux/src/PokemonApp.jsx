import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons/thunks";

export const PokemonApp = () => {

    const {pokemons = [], page, isLoading} = useSelector(state => state.pokemons)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, []);

    console.log(pokemons, page, isLoading)
    
  return (
    <>
        <h1>PokemonAPP</h1>
        <hr />
        <span>Loading: {isLoading ? 'True' : 'False'} </span>
        <ul>
            {
                pokemons.map(({name}) =>
                    <li key={name}>{name}</li>
                )
            }
        </ul>

        <button disabled = {isLoading} onClick={ () => dispatch( getPokemons(page)) }>
            Next Page
        </button>
    </>
  )
}
