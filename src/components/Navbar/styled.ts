import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
	background-color: white;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	top: 0;
	z-index: 10;
	box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
	/* box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px; */
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	z-index: 1;
	padding: 0 24px;
	max-width: 1100px;
	background-color: white;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	list-style: none;
	display: flex;
	align-items: center;
`;

export const NavInput = styled.input`
	padding: 0 1rem;
	height: 50%;
	border: none;
	border-radius: 25px;
	background-color: #e3e5f7;
`;

export const NavButton = styled.button`
	margin-left: 10px;
	height: 40%;
	padding: 0 10px;
	border: none;
	border-radius: 5px;
	background-color: #d1c35c;
	transition: background-color 0.3s;

	&:hover {
		background-color: #bfaf36;
	}
`;

export const NavLogo = styled(LinkRouter)`
	color: #282b28;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 24px;
`;

export const NavLogoImage = styled.img`
	width: 17%;
`;
