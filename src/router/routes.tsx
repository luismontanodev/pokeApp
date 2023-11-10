import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokemonIndex } from "../pages/PokemonIndex";
import { PokemonLocation } from "../pages/PokemonLocation";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PokemonIndex />} />
			<Route path="/location/:pokemonId" element={<PokemonLocation />} />
		</Routes>
	);
};
