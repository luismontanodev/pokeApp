import React, { Dispatch, SetStateAction, useState } from "react";
import {
	Nav,
	NavButton,
	NavInput,
	NavItem,
	NavLogo,
	NavLogoImage,
	NavMenu,
	NavbarContainer,
} from "./styled";
import { useFetchApi } from "../../api/useFetchApi";
import { PokemonTypes } from "../../types/pokemonTypes";

interface Props {
	setPokemonInfo: Dispatch<SetStateAction<PokemonTypes | undefined>>;
}

export const Component = (props: Props) => {
	const { setPokemonInfo } = props;

	const [pokemonName, setPokemonName] = useState<string>("");
	const { getAPIData } = useFetchApi();

	const handleSearch = async () => {
		const result = await getAPIData(pokemonName);
		setPokemonInfo(result);
	};

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<NavLogoImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" />
				</NavLogo>
				<NavItem>
					<NavInput
						type="text"
						placeholder="Type a Pokémon name..."
						value={pokemonName}
						onChange={(e) => setPokemonName(e.target.value)}
					/>
					<NavButton onClick={handleSearch}>search</NavButton>
				</NavItem>
			</NavbarContainer>
		</Nav>
	);
};

export { Component as Navbar };
