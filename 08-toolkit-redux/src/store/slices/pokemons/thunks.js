import { pokemonApi } from "../../../api/pokemonApi";
import { addItem, setLoading } from "./PokemonSlice"


export const getPokemons = (page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch( setLoading (true) );

        // dispatch( ¿setPokemons()? );
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( addItem({pokemons: data.results, page: page + 1 }) );
    }
}