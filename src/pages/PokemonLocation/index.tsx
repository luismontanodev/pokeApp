import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { PokemonLocationContainer } from "./styled";
import { PokemonTypes } from "../../types/pokemonTypes";
import { LocationList } from "../../components/LocationList";

export const Page = () => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();
	return (
		<PokemonLocationContainer>
			<Navbar setPokemonInfo={setPokemonInfo} />
			<LocationList />
		</PokemonLocationContainer>
	);
};

export { Page as PokemonLocation };
