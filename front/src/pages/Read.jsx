import React, { useContext } from 'react';
import { Book } from '../components/Book';
import { TopNav } from '../components/TopNav';
import { AppDataContext } from '../store/appData';
import "../css/read.css"

export const Read = () => {
	const {userData} = useContext(AppDataContext);
	const conClass = " readboxs container flexMe spaceAround"
	return <div id="root" className="read-con flexMe flexCol fullIt noFlow">
		<TopNav/>
		<div className={userData.compare !== ""? "compared " + conClass:"non-compared " + conClass}>
			<Book compare={false}/>
			{userData.compare !== ""? <Book compare={true}/>:""}
		</div>
	</div>
};
