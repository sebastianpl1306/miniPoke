'use server'
import { PokemonListResponse } from "../interfaces/pokemons-response";

export const getPokemons = async ( limit: number = 50 ) => {
    try {
        const data = await fetch(`${process.env.POKE_API}/pokemon?limit=${limit}`);
        const pokeApi: PokemonListResponse = await data.json();

        if ( !pokeApi.results ) return null;

        pokeApi.results = pokeApi.results.map( ( pokemon, index ) => ({
            ...pokemon,
            id: index + 1,
        } ) );

        return pokeApi.results;
    } catch (error) {
        return null;
    }
}