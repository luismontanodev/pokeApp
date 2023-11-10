import React from "react";
import { Container } from "./styled";

interface Props {
	children: React.ReactNode;
}

export const Component = (props: Props) => {
	const { children } = props;
	return <Container>{children}</Container>;
};

export { Component as HomeContainer };
