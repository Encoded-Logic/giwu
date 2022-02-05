
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import './App.css';
import { Fallback } from "./pages/Fallback";
import { Index } from "./pages/Index";
import { Read } from "./pages/Read";
import AppDataContextProvifer from "./store/appData";

function App() {
	return (
		<AppDataContextProvifer>
			<Router>
				<Routes>
					<Route exact path="/read" element={<Read />} />
					<Route exact path="/" element={<Index />} />
					<Route path="*" element={<Fallback />} />
				</Routes>
			</Router>
		</AppDataContextProvifer>
	);
}

export default App;
