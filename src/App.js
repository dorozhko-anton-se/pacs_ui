import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Journaling from "./Journaling/Journaling";
import Admin from "./Admin/Admin";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/journaling">
					<Journaling />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
