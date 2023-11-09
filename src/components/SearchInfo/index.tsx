import React, { useState } from "react";
import {
	HomeContainer,
	ResultContainer,
	LabelPokemonName,
	ImagePokemon,
	ImageContainer,
	MainInfoContainer,
	DetailedInfoContainer,
	LabelPokemonType,
	LabelTypeName,
	TypesContainer,
	AbilityItem,
	RangeInput,
	DetailedInfoLabel,
	StatsRangeContainer,
	StatsList,
	StatsListContainer,
	StatsContainer,
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
					<DetailedInfoLabel>Abilities:</DetailedInfoLabel>

					{pokemonInfo?.abilities.map((ability) => {
						return <AbilityItem>{ability.ability.name}</AbilityItem>;
					})}

					<DetailedInfoLabel>Base stats</DetailedInfoLabel>
					<StatsContainer>
						<StatsListContainer>
							{pokemonInfo?.stats.map((stat) => {
								return (
									<StatsList>{`${stat.stat.name}: ${stat.base_stat}`}</StatsList>
								);
							})}
						</StatsListContainer>
						<StatsRangeContainer>
							{pokemonInfo?.stats.map((stat) => {
								return (
									<StatsList>
										<RangeInput
											type="range"
											min="0"
											max="200"
											value={stat.base_stat}
											disabled={true}
										/>
									</StatsList>
								);
							})}
						</StatsRangeContainer>
					</StatsContainer>
				</DetailedInfoContainer>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as SearchInfo };
