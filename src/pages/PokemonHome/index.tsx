import React, { useState } from "react";
import {
	HomeContainer,
	ResultContainer,
	SearchButton,
	SearchContainer,
	SearchInput,
} from "./styled";
import { useCallApi } from "../../api/useCallApi";
import { PokemonTypes } from "../../types/pokemonTypes";

export const Component = () => {
	const [searchPokemon, setSearchPokemon] = useState<string>("");
	const [response, setResponse] = useState<PokemonTypes>();

	const handleSearchPokemon = () => {
		let result = useCallApi(searchPokemon);
		console.log(result);
	};

	return (
		<HomeContainer>
			<SearchContainer>
				<SearchInput
					type="text"
					placeholder="Type a pokemon name..."
					value={searchPokemon}
					onChange={(event) => {
						setSearchPokemon(event.target.value);
					}}
				/>
				<SearchButton onClick={handleSearchPokemon}>Search</SearchButton>
			</SearchContainer>

			<ResultContainer></ResultContainer>
		</HomeContainer>
	);
};

export { Component as PokemonHome };
