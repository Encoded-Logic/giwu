import React, { useContext } from 'react';
import { Book } from '../components/Book';
import { TopNav } from '../components/TopNav';
import { AppDataContext } from '../store/appData';
import "../css/read.css"

export const Read = () => {
	const {appData} = useContext(AppDataContext);
	const conClass = " readboxs container flexMe spaceAround"
	return <div id="root" className="read-con flexMe flexCol fullIt noFlow">
		<TopNav selected={appData.selected}/>
		<div className={appData.compare !== ""? "compared " + conClass:"non-compared " + conClass}>
			<Book/>
			{appData.compare !== ""? <Book/>:""}
		</div>
	</div>;
};
