import Image from "next/image";
import { SmallPokemon } from "../interfaces/pokemons-response";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-yellow-400 relative overflow-hidden group mb-16"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-5 rounded-full -mr-16 -mt-16"></div>
      
      <div className="relative z-10">
        <div className="text-yellow-400 font-bold text-sm mb-2">
          #{pokemon.id} - { pokemon.name }
        </div>
        
        <div className={`bg-gradient-to-br ${'from-gray-600 to-gray-700'} rounded-xl p-4 mb-3 flex items-center justify-center h-40 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={130}
            height={130}
            className="w-32 h-32 object-contain drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <h3 className="text-white font-bold text-xl capitalize mb-2 text-center">
          {pokemon.name}
        </h3>
      </div>
    </div>
  );
};