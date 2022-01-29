import React from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from "../functions/theme"

export const Index = ({ appData ,setappData }) => {
	const selectBible = (e) =>{
		e.preventDefault()
		let newAppData = appData
		newAppData.bible = ""
		setappData(newAppData)
	}
	const selectCompare = (e) =>{
		e.preventDefault()
		let newAppData = appData
		newAppData.compare = ""
		setappData(newAppData)
	}
	return <div id="root" className="flexMe centerMy fullIt noFlow">
		<div className="glassbox welcome">
			<h1>Welcon to GIWU</h1>
			<h3>God Is With Us</h3>
			<p>This app will allow to read up to two bibles at the same time</p>
			<p>Please choose a theme and bible  to continue and kindly note that we use browser cooies and storeg to remember the chooses you made.</p>
			<div className="subBoxs flexMe">
				<div className="subBox bg-gradient flexMe centerMy pointMe shadowHover" onClick={()=>toggleTheme('default')}>
					<span className="btn active">Default</span>
				</div>
				<div className="subBox bg-light-gradient text-dark flexMe centerMy pointMe shadowHover" onClick={()=>toggleTheme('light')}>
					<span className="btn active">Light</span>
				</div>
				<div className="subBox bg-dark-gradient flexMe centerMy pointMe shadowHover" onClick={()=>toggleTheme('dark')}>
					<span className="btn active">Dark</span>
				</div>
			</div>
			<div className="subBoxs flexMe">
				<div className="subBox flexMe centerMy">
					<select defaultValue={appData.bible} onChange={selectBible} className="btn">
						<option value="kjv">King jams Version</option>
						<option value="nev">New English Version</option>
					</select>
				</div>
				<div className="subBox flexMe centerMy">
					<select defaultValue={appData.compare} onChange={selectBible} className="btn">
						<option value="">sub (optional)</option>
						<option value="kjv">King jams Version</option>
						<option value="nev">New English Version</option>
					</select>
				</div>
			</div>
			<Link to={"/read/"} className="actionBtn">
				<span className="btn pointMe">Continue</span>
			</Link>
		</div>
	</div>;
};