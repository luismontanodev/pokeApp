import React, { useState } from "react";
import {
	HomeContainer,
	ResultContainer,
	SearchButton,
	SearchContainer,
	SearchInput,
} from "./styled";
import { useFetchApi } from "../../api/useFetchApi";
import { PokemonTypes } from "../../types/pokemonTypes";

export const Component = () => {
	const [pokemonName, setPokemonName] = useState<string>("");
	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();

	const { getAPIData } = useFetchApi();

	const handleSearch = async () => {
		const result = await getAPIData(pokemonName);
		setPokemonInfo(result);
	};

	return (
		<HomeContainer>
			<SearchContainer>
				<SearchInput
					type="text"
					placeholder="Type a pokemon name..."
					value={pokemonName}
					onChange={(e) => setPokemonName(e.target.value)}
				/>
				<SearchButton onClick={handleSearch}>Search</SearchButton>
			</SearchContainer>

			<ResultContainer>
				<h1>{pokemonInfo?.name}</h1>
				{/* <h1>{`Dex number: ${pokemonInfo?.id}`}</h1> */}
				<img
					src={pokemonInfo?.sprites.other["official-artwork"].front_default}
				/>
				<h1>{pokemonInfo?.types[0].type.name}</h1>
				{/* <h1>{pokemonInfo?.types[1].type.name}</h1> */}
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as PokemonHome };
