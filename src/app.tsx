import React from "react";
import { AppRoutes } from "./router/routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes></AppRoutes>
		</BrowserRouter>
	);
};
