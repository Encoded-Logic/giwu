import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../components/Book';
import { TopNav } from '../components/TopNav';

export const Read = ({ appData}) => {
	return <div id="root" className="flexMe flexCol fullIt noFlow">
		<TopNav selected={appData.selected}/>
		<div className="flexMe spaceAround">
			<Book/>
			{appData.compare != ""? <Book/>:""}
		</div>
	</div>;
};
