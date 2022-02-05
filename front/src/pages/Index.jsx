import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from "../functions/theme"
import { AppDataContext } from '../store/appData';

export const Index = () => {
	const {appData, selectBible, selectCompare} = useContext(AppDataContext);
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
					<select value={appData.bible} onChange={(e)=>selectBible(e.target.value)} className="btn">
						{
							appData.bibleList?.map(bible=>{
								if(appData.compare !== bible.link){
									return <option value={bible.link} key={bible.link}>{bible.language} - {bible.name}</option>
								} else{
									return"";
								}
							})
						}
					</select>
				</div>
				<div className="subBox flexMe centerMy">
					<select value={appData.compare} onChange={(e)=>selectCompare(e.target.value)} className="btn">
						<option value="">sub (optional)</option>
						{
							appData.bibleList?.map(bible=>{
								if(appData.bible !== bible.link){
									return <option value={bible.link} key={bible.link}>{bible.language} - {bible.name}</option>
								} else{
									return"";
								}
							})
						}
					</select>
				</div>
			</div>
			<Link to={"/read"} className="actionBtn">
				<span className="btn pointMe">Continue</span>
			</Link>
		</div>
	</div>;
};