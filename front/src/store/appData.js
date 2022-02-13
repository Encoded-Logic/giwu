import { createContext, useEffect, useState } from "react";
import { toggleTheme } from "../functions/theme";
import { browserStore, getBrowserStore } from "./browserStore";

export const AppDataContext = createContext();

function AppDataContextProvifer(props) {
	const [init, setInit] = useState(false);
	const [userData, setUserData] = useState({
		bible: "kjv",
		compare: "",
		selected: {
			book: "Genesis",
			chapter: 1,
		},
	});
	const [appData] = useState({
		books: [
			{
				book: "Genesis",
				num: 1,
				chapters: 50
			},
			{
				book: "Exodus",
				num: 2,
				chapters: 40
			},
			{
				book: "Leviticus",
				num: 3,
				chapters: 27
			},
			{
				book: "Numbers",
				num: 4,
				chapters: 36
			},
			{
				book: "Deuteronomy",
				num: 5,
				chapters: 34
			},
			{
				book: "Joshua",
				num: 6,
				chapters: 24
			},
			{
				book: "Judges",
				num: 7,
				chapters: 21
			},
			{
				book: "Ruth",
				num: 8,
				chapters: 4
			},
			{
				book: "1 Samuel",
				num: 9,
				chapters: 31
			},
			{
				book: "2 Samuel",
				num: 10,
				chapters: 24
			},
			{
				book: "1 Kings",
				num: 11,
				chapters: 22
			},
			{
				book: "2 Kings",
				num: 12,
				chapters: 25
			},
			{
				book: "1 Chronicles",
				num: 13,
				chapters: 29
			},
			{
				book: "2 Chronicles",
				num: 14,
				chapters: 36
			},
			{
				book: "Ezra",
				num: 15,
				chapters: 10
			},
			{
				book: "Nehemiah",
				num: 16,
				chapters: 13
			},
			{
				book: "Esther",
				num: 17,
				chapters: 10
			},
			{
				book: "Job",
				num: 18,
				chapters: 42
			},
			{
				book: "Psalm",
				num: 19,
				chapters: 150
			},
			{
				book: "Proverbs",
				num: 20,
				chapters: 31
			},
			{
				book: "Ecclesiastes",
				num: 21,
				chapters: 12
			},
			{
				book: "Song of Solomon",
				num: 22,
				chapters: 8
			},
			{
				book: "Isaiah",
				num: 23,
				chapters: 66
			},
			{
				book: "Jeremiah",
				num: 24,
				chapters: 52
			},
			{
				book: "Lamentations",
				num: 25,
				chapters: 5
			},
			{
				book: "Ezekiel",
				num: 26,
				chapters: 48
			},
			{
				book: "Daniel",
				num: 27,
				chapters: 12
			},
			{
				book: "Hosea",
				num: 28,
				chapters: 14
			},
			{
				book: "Joel",
				num: 29,
				chapters: 3
			},
			{
				book: "Amos",
				num: 30,
				chapters: 9
			},
			{
				book: "Obadiah",
				num: 31,
				chapters: 1
			},
			{
				book: "Jonah",
				num: 32,
				chapters: 4
			},
			{
				book: "Micah",
				num: 33,
				chapters: 7
			},
			{
				book: "Nahum",
				num: 34,
				chapters: 3
			},
			{
				book: "Habakkuk",
				num: 35,
				chapters: 3
			},
			{
				book: "Zephaniah",
				num: 36,
				chapters: 3
			},
			{
				book: "Haggai",
				num: 37,
				chapters: 2
			},
			{
				book: "Zechariah",
				num: 38,
				chapters: 14
			},
			{
				book: "Malachi",
				num: 39,
				chapters: 4
			},
			{
				book: "Matthew",
				num: 40,
				chapters: 28
			},
			{
				book: "Mark",
				num: 41,
				chapters: 16
			},
			{
				book: "Luke",
				num: 42,
				chapters: 24
			},
			{
				book: "John",
				num: 43,
				chapters: 21
			},
			{
				book: "Acts",
				num: 44,
				chapters: 28
			},
			{
				book: "Romans",
				num: 45,
				chapters: 16
			},
			{
				book: "1 Corinthians",
				num: 46,
				chapters: 16
			},
			{
				book: "2 Corinthians",
				num: 47,
				chapters: 13
			},
			{
				book: "Galatians",
				num: 48,
				chapters: 6
			},
			{
				book: "Ephesians",
				num: 49,
				chapters: 6
			},
			{
				book: "Philippians",
				num: 50,
				chapters: 4
			},
			{
				book: "Colossians",
				num: 51,
				chapters: 4
			},
			{
				book: "1 Thessalonians",
				num: 52,
				chapters: 5
			},
			{
				book: "2 Thessalonians",
				num: 53,
				chapters: 3
			},
			{
				book: "1 Timothy",
				num: 54,
				chapters: 6
			},
			{
				book: "2 Timothy",
				num: 55,
				chapters: 4
			},
			{
				book: "Titus",
				num: 56,
				chapters: 3
			},
			{
				book: "Philemon",
				num: 57,
				chapters: 1
			},
			{
				book: "Hebrews",
				num: 58,
				chapters: 13
			},
			{
				book: "James",
				num: 59,
				chapters: 5
			},
			{
				book: "1 Peter",
				num: 60,
				chapters: 5
			},
			{
				book: "2 Peter",
				num: 61,
				chapters: 3
			},
			{
				book: "1 John",
				num: 62,
				chapters: 5
			},
			{
				book: "2 John",
				num: 63,
				chapters: 1
			},
			{
				book: "3 John",
				num: 64,
				chapters: 1
			},
			{
				book: "Jude",
				num: 65,
				chapters: 1
			},
			{
				book: "Revelation",
				num: 66,
				chapters: 22
			}
		],
		bibleList: [
			{
				link: "asv",
				language: "english",
				name: "American Standard Version",
				wiki: "https://en.wikipedia.org/wiki/American_Standard_Version",
				about: 'The Revised Version, Standard American Edition of the Bible, more commonly known as the American Standard Version (ASV), is a Bible translation into English that was completed in 1901, with the publication of the revision of the Old Testament; the revised New Testament had been released in 1900. It was originally best known by its full name, but soon came to have other names, such as the American Revised Version, the American Standard Revision, the American Standard Revised Bible, and the American Standard Edition. By the time its copyright was renewed in 1929, it had come to be known by its present name, the American Standard Version. Because of its prominence in seminaries, it was sometimes simply called the "Standard Bible" in the United States.',
			},
			{
				link: "bbe",
				language: "english",
				name: "Bible in Basic English",
				wiki: "https://en.wikipedia.org/wiki/Bible_in_Basic_English",
				about: "The Bible In Basic English (also known as BBE) is a translation of the Bible into Basic English. The BBE was translated by Professor S. H. Hooke using the standard 850 Basic English words. 100 words that were helpful to understand poetry were added along with 50 'Bible' words for a total of 1,000 words. This version is effective in communicating the Bible to those with limited education or where English is a second language. The New Testament was released in 1941 and the Old Testament was released in 1949",
			},
			{
				link: "kjv",
				language: "english",
				name: "King James Version",
				wiki: "https://en.wikipedia.org/wiki/King_James_Version",
				about: 'The King James Version (KJV), also known as the King James Bible (KJB) or simply the Authorized Version (AV), is an English translation of the Christian Bible for the Church of England, begun in 1604 and completed as well as published in 1611 under the sponsorship of James VI and I.[a][b] The books of the King James Version include the 39 books of the Old Testament, an intertestamental section containing 14 books of the Apocrypha, and the 27 books of the New Testament. The translation is noted for its "majesty of style", and has been described as one of the most important books in English culture[2] and a driving force in the shaping of the English-speaking world.',
			},
			{
				link: "web",
				language: "english",
				name: "World English Bible",
				wiki: "https://en.wikipedia.org/wiki/World_English_Bible",
				about: "The World English Bible (also known as the WEB) is a free updated revision of the American Standard Version (1901). It is one of the few public domain, present-day English translations of the entire Bible, and it is freely distributed to the public using electronic formats. The Bible was created by volunteers using the ASV as the base text as part of the ebible.org project through Rainbow Missions, Inc., a Colorado nonprofit corporation.",
			},
			{
				link: "ylt",
				language: "english",
				name: "Young's Literal Translation",
				wiki: "https://en.wikipedia.org/wiki/Young%27s_Literal_Translation",
				about: "Young's Literal Translation (YLT) is a translation of the Bible into English, published in 1862. The translation was made by Robert Young, compiler of Young's Analytical Concordance to the Bible and Concise Critical Comments on the New Testament. Young used the Textus Receptus (TR) and the Masoretic Text (MT) as the basis for his translation. He wrote in the preface to the first edition, \"It has been no part of the Translator's plan to attempt to form a New Hebrew or Greek Text—he has therefore somewhat rigidly adhered to the received ones.\"",
			},
		],
	});
	useEffect(() => {
		if (!init) {
			const defaultTheme =
				getBrowserStore("theme") !== null &&
				getBrowserStore("theme") !== ""
					? getBrowserStore("theme")
					: "default";
			toggleTheme(defaultTheme);

			const defaultUserData =
				getBrowserStore("userData") !== null &&
				getBrowserStore("userData") !== ""
					? JSON.parse(getBrowserStore("userData"))
					: userData;
			setUserData(defaultUserData);
			setInit(true);
		}
	}, [init, userData]);
	const selectBible = (value) => {
		let newUserData = { ...userData, bible: value };
		setUserData(newUserData);
		browserStore("userData", newUserData);
	};
	const selectCompare = (value) => {
		let newUserData = { ...userData, compare: value };
		setUserData(newUserData);
		browserStore("userData", newUserData);
	};
	const selectBook = (value) => {
		let newUserData = {
			...userData,
			selected: { book: value, chapter: 1 },
		};
		setUserData(newUserData);
		browserStore("userData", newUserData);
	};
	const selectChapter = (value) => {
		let newUserData = {
			...userData,
			selected: {
				book: userData.selected.book,
				chapter: parseInt(value),
			},
		};
		setUserData(newUserData);
		browserStore("userData", newUserData);
	};
	const value = {
		userData,
		selectBible,
		selectCompare,
		appData,
		selectBook,
		selectChapter,
	};
	return (
		<AppDataContext.Provider value={value}>
			{props.children}
		</AppDataContext.Provider>
	);
}

export default AppDataContextProvifer;
