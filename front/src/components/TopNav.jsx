import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../store/appData";

export const TopNav = () => {
	const { appData, userData, selectBook, selectChapter } =
		useContext(AppDataContext);
	let selectedBookIndex = appData.books.findIndex(x => x.book === userData.selected.book);
	let totalChapters = appData.books[selectedBookIndex]?.chapters > 0 ? appData.books[selectedBookIndex]?.chapters : 1
	return (
		<div className="top-block flexMe">
			<div className="container flexMe">
				<Link to={"/"} className="top-logo flexMe">
					GIWU
				</Link>
				<div className="nav-container flexMe">
					{userData.selected.chapter < 2 ? "":<button className="nav-btn" onClick={() => selectChapter(userData.selected.chapter - 1)}>&lsaquo;</button>}
					<select
						value={userData.selected.book}
						className="nav-btn"
						onChange={(e) => selectBook(e.target.value)}
					>
						{appData.books?.map((book) => {
							return (
								<option value={book.book} key={book.num}>
									{book.num} - {book.book}
								</option>
							);
						})}
					</select>
					<select
						value={userData.selected.chapter}
						className="nav-btn"
						onChange={(e) => selectChapter(e.target.value)}
					>
                    {
						Array.from(Array(totalChapters).keys(), x => x+1).map((chapter) => {
							return (
								<option value={chapter} key={chapter}>
									{chapter}
								</option>
							);
						})
					}
					</select>
					{userData.selected.chapter < appData.books[selectedBookIndex]?.chapters ? <button className="nav-btn" onClick={() => selectChapter(userData.selected.chapter + 1)}>&rsaquo;</button>:""}
				</div>
			</div>
		</div>
	);
};
