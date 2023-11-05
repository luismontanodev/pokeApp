import React, { useState } from "react";
import {
	HomeContainer,
	ResultContainer,
	SearchButton,
	SearchContainer,
	SearchInput,
	LabelPokemonName,
	ImagePokemon,
	ImageContainer,
	MainInfoContainer,
	DetailedInfoContainer,
	DexNumberLabel,
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
				<MainInfoContainer>
					<LabelPokemonName>{pokemonInfo?.name}</LabelPokemonName>
					<DexNumberLabel>Dex number: {pokemonInfo?.id}</DexNumberLabel>
					<ImageContainer>
						<ImagePokemon
							src={pokemonInfo?.sprites.other["official-artwork"].front_default}
						/>
					</ImageContainer>
				</MainInfoContainer>
				<DetailedInfoContainer>
					<h1>Types:</h1>
					{pokemonInfo?.types.map((type) => {
						return <p>{type.type.name}</p>;
					})}
					<h1>Abilities:</h1>

					{pokemonInfo?.abilities.map((ability) => {
						return <p>{ability.ability.name}</p>;
					})}
				</DetailedInfoContainer>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as PokemonHome };
