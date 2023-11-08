import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SearchInfo } from "../../components/SearchInfo";
import { PokemonTypes } from "../../types/pokemonTypes";
import { PokemonInfoContainer } from "./styled";

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
