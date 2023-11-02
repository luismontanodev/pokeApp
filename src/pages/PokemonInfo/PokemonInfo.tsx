import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PokemonTypes } from "../../types/pokemonTypes";

export const PokemonInfo = () => {
	const { pokemonName } = useParams();
	// console.log(pokemonName);

	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPokemonInfo(data);
			});
	}, []);

	console.log(pokemonInfo);

	return (
		<div>
			<h1>{pokemonInfo?.name}</h1>
			<p>Height: {pokemonInfo?.height} </p>
			<p>Base experience: {pokemonInfo?.base_experience}</p>
			<img
				src={pokemonInfo?.sprites.other["official-artwork"].front_default}
				alt=""
			/>
		</div>
	);
};
