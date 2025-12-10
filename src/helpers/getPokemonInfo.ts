
export const getPokemonInfo = async ( nameOrId: string ) => {
    try {
        const data = await fetch(`${process.env.POKE_API}/pokemon/${nameOrId}`);
        const pokeApi = await data.json();

        return pokeApi;
    } catch (error) {
        return null;
    }
}