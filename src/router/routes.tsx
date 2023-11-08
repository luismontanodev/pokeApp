import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokemonInfo } from "../pages/PokemonInfo/PokemonInfo";
import { PokemonList } from "../pages/PokemonList/PokemonList";
import { PokemonIndex } from "../pages/PokemonIndex";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PokemonIndex />} />
			{/* <Route path="/pokemonInfo/:pokemonName" element={<PokemonInfo />} /> */}
		</Routes>
	);
};
