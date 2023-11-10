import React from "react";
import { ResultContainer } from "../ResultContainer";
import { HomeContainer } from "../HomeContainer";
import { useParams } from "react-router-dom";

export const Component = () => {
	const { pokemonId } = useParams();

	return (
		<HomeContainer>
			<ResultContainer>
				<p>a</p>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as LocationList };
