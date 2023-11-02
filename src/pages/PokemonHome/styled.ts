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
	background-color: #ba3b45;
	border-style: none;
	border-radius: 4px;
	cursor: pointer;

	transition: background-color 0.3s;

	&:hover {
		background-color: #9b313a;
	}
`;

export const ResultContainer = styled.div`
	margin-top: 40px;
	width: 1000px;
	height: 600px;
	border-style: solid;
	border-color: gray;
	border-radius: 4px;
`;
