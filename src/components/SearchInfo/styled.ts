import styled from "styled-components";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	/* height: 100%; */
`;

export const SearchContainer = styled.div`
	margin-top: 50px;
`;

export const SearchInput = styled.input`
	font-size: 1.3em;
	width: 15em;
	height: 1.5em;
	border-style: solid;
	border-radius: 4px;

	margin-right: 10px;
	padding-left: 5px;
`;

export const SearchButton = styled.button`
	width: 5em;
	height: 1.5em;

	font-size: 1.5em;
	color: white;
	background-color: #d53f38;
	border-style: none;
	border-radius: 4px;
	cursor: pointer;

	transition: background-color 0.3s;

	&:hover {
		background-color: #a82a24;
	}
`;

export const ResultContainer = styled.div`
	display: flex;
	margin-top: 2%;
	width: 80%;
	height: 75vh;
	box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
		rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export const MainInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 33%;
	background-color: white;
`;

export const DetailedInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 5%;
	padding-top: 4%;
	background-color: white;
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
`;

export const LabelTypeName = styled.p`
	margin: 3px;
	font-size: 1.2em;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	color: brown;
`;
