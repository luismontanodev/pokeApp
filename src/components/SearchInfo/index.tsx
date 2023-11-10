import React from "react";
import {
	LabelPokemonName,
	ImagePokemon,
	ImageContainer,
	MainInfoContainer,
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
	AbilitiesAndStatsContainer,
	ShinyFormContainer,
	DataContainer,
	LinkToLocation,
} from "./styled";

import { PokemonTypes } from "../../types/pokemonTypes";
import { ResultContainer } from "../ResultContainer";
import { HomeContainer } from "../HomeContainer";

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
				<DataContainer>
					<AbilitiesAndStatsContainer>
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
					</AbilitiesAndStatsContainer>
					<ShinyFormContainer>
						<h1>shiny form</h1>
						<img
							src={pokemonInfo?.sprites.other["official-artwork"].front_shiny}
							alt=""
						/>

						<LinkToLocation to={`/location/${pokemonInfo?.id}`}>
							See location in game
						</LinkToLocation>
					</ShinyFormContainer>
				</DataContainer>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as SearchInfo };
