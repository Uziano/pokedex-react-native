import {useEffect, useRef} from 'react';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemonPaginated = () => {
  //   const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  // Using use Ref + use Effect we generate an infinit scrolling
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonApi.get( nextPageUrl.current );
    console.log(resp.data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {};
};
