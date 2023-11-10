import React from "react";
import { ResultContainer } from "./styled";

interface Props {
	children: React.ReactNode;
}

export const Component = (props: Props) => {
	const { children } = props;

	return <ResultContainer>{children}</ResultContainer>;
};

export { Component as ResultContainer };
