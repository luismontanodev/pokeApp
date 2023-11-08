import React from "react";
import { AppRoutes } from "./router/routes";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes></AppRoutes>
		</BrowserRouter>
	);
};
