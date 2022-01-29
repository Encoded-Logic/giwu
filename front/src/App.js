
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

function App() {
	const [appData,setappData] = React.useState({
		    bible:"kjv",
		    compare:"",
			selected:{
				book:"genesis",
				chapter:1
			}
	})
	return (
		<Router>
			<Routes>
				<Route exact path="/read" element={<Read appData={appData}/>}/>
				<Route exact path="/" element={<Index setappData={setappData} appData={appData}/>}/>
				<Route path="*" element={<Fallback/>}/>
			</Routes>
		</Router>
	);
}

export default App;
