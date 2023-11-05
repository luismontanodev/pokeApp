import styled from "styled-components";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	margin-top: 20px;
	width: 1200px;
	height: 600px;
	border-style: solid;
	border-color: gray;
	border-radius: 4px;
`;

export const MainInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 33%;
	align-items: center;
	background-color: #feed9a;
`;

export const DetailedInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 5%;
	padding-top: 4%;
	background-color: #f3947c;
	width: 67%;
`;
export const LabelPokemonName = styled.h1`
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
	width: 20em;
	height: 20em;
`;

export const ImagePokemon = styled.img`
	width: 20em;
	height: 20em;
	border-radius: 11em;
	background-color: #fdd61e;
`;
