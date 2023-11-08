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
	LabelPokemonType,
	LabelTypeName,
	TypesContainer,
} from "./styled";

import { PokemonTypes } from "../../types/pokemonTypes";

interface Props {
	pokemonInfo: PokemonTypes | undefined;
}

export const Component = (props: Props) => {
	const { pokemonInfo } = props;

	return (
		<HomeContainer>
			<ResultContainer>
				<MainInfoContainer>
					<LabelPokemonName>{pokemonInfo?.name}</LabelPokemonName>
					<ImageContainer>
						<ImagePokemon
							src={pokemonInfo?.sprites.other["official-artwork"].front_default}
						/>
					</ImageContainer>
					<TypesContainer>
						<LabelPokemonType>Types:</LabelPokemonType>
						{pokemonInfo?.types.map((type) => {
							return <LabelTypeName>{type.type.name}</LabelTypeName>;
						})}
					</TypesContainer>
				</MainInfoContainer>
				<DetailedInfoContainer>
					<h1>Abilities:</h1>

					{pokemonInfo?.abilities.map((ability) => {
						return <li>{ability.ability.name}</li>;
					})}

					<h1>Base stats</h1>
					{pokemonInfo?.stats.map((stat) => {
						return <li>{`${stat.stat.name}: ${stat.base_stat}`}</li>;
					})}
				</DetailedInfoContainer>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as SearchInfo };
