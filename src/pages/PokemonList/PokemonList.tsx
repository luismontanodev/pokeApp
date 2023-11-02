import React, { useEffect, useState } from "react";
import { ListItemPokemon, ListOfPokemon, PokemonListContainer } from "./styled";
import { Link } from "react-router-dom";

interface PokemonListItem {
	name: string;
	url: string;
}

export const PokemonList = () => {
	const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
	const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPokemonList(data.results);
			});
	}, []);

	return (
		<PokemonListContainer>
			<h1>Pokemon List</h1>
			<ListOfPokemon>
				{pokemonList.map((pokemon) => {
					return (
						<ListItemPokemon key={pokemon.name}>
							<Link to={`/pokemonInfo/${pokemon.name}`}>{pokemon.name}</Link>
						</ListItemPokemon>
					);
				})}
			</ListOfPokemon>
		</PokemonListContainer>
	);
};
