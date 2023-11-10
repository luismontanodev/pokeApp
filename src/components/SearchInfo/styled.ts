import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const LinkToLocation = styled(LinkRouter)`
	font-family: Arial, Helvetica, sans-serif;
`;

export const MainInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
`;

export const AbilitiesAndStatsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 5%;
	padding-top: 4%;
	width: 67%;
`;
export const LabelPokemonName = styled.h1`
	margin-top: 5%;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	text-align: center;
`;

export const DexNumberLabel = styled.p`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2em;
	text-align: center;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 55%;
	margin-top: 13%;
`;

export const ImagePokemon = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 11em;
	background-color: #f1e4e4;
`;

export const TypesContainer = styled.div`
	top: 0;
	display: flex;
	flex-direction: column;
`;

export const LabelPokemonType = styled.p`
	font-size: 2em;
	font-family: Arial, Helvetica, sans-serif;
	color: black;
	margin: 5px;
`;

export const LabelTypeName = styled.p`
	margin: 3px;
	font-size: 1.2em;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	color: brown;
	background-color: #d4d8d8;
	text-align: center;
	border-radius: 8px;
`;

export const DetailedInfoLabel = styled.p`
	font-size: 1.5em;
	font-family: Arial, Helvetica, sans-serif;
	margin: 5px;
	font-weight: bold;
	margin-top: 35px;
`;

export const AbilityItem = styled.li`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.2em;
	margin: 5px;
`;

export const StatsList = styled.li`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.2em;
	margin: 5px;
	list-style: none;
`;

export const RangeInput = styled.input`
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 0;
		height: 0;
	}
`;

export const StatsRangeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StatsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
`;

export const StatsContainer = styled.div`
	display: flex;
`;

export const ShinyFormContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 20%;
	padding-top: 5%;
	padding-right: 10%;
`;

export const DataContainer = styled.div`
	display: flex;
	width: 100%;
`;
