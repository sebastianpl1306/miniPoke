import { getPokemons } from "@/src/actions/GetPokemonsAction";
import { PokemonCard } from "@/src/components/PokemonCard";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <div>
      {
        pokemons?.map( ( pokemon, index ) => (
          <PokemonCard 
            key={ pokemon.name }
            pokemon={pokemon}
          />
        ) )
      }
    </div>
  );
}
