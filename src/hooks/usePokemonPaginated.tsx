import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterface';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>( nextPageUrl.current );
    nextPageUrl.current = resp.data.next;
    mapPokeList( resp.data.results )
  };

  const mapPokeList = (pokemonList: Result[]) => {
    pokemonList.forEach( pokemon => console.log(pokemon.name) )
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList
  };
};
