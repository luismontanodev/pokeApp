import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { PokemonTypes } from "../../types/pokemonTypes";
import { PokemonInfoContainer } from "./styled";
import { SearchInfo } from "../../components/SearchInfo";

export const Page = () => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();

	console.log(pokemonInfo);

	return (
		<PokemonInfoContainer>
			<Navbar setPokemonInfo={setPokemonInfo} />
			<SearchInfo pokemonInfo={pokemonInfo} />
		</PokemonInfoContainer>
	);
};

export { Page as PokemonIndex };
