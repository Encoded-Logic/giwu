import {createContext, useEffect, useState} from 'react';
import { toggleTheme } from '../functions/theme';
import { browserStore, getBrowserStore } from './browserStore';

export const AppDataContext = createContext();

function AppDataContextProvifer(props) {
	const [init, setInit] = useState(false)
	const [appData, setappData] = useState({
		bible: "kjv",
		compare: "",
		selected: {
			book: "genesis",
			chapter: 1
		},
        bibleList: [
            {
                link:"asv",
                language:"english",
                name:"American Standard Version",
                wiki:"https://en.wikipedia.org/wiki/American_Standard_Version",
                about:"The Revised Version, Standard American Edition of the Bible, more commonly known as the American Standard Version (ASV), is a Bible translation into English that was completed in 1901, with the publication of the revision of the Old Testament; the revised New Testament had been released in 1900. It was originally best known by its full name, but soon came to have other names, such as the American Revised Version, the American Standard Revision, the American Standard Revised Bible, and the American Standard Edition. By the time its copyright was renewed in 1929, it had come to be known by its present name, the American Standard Version. Because of its prominence in seminaries, it was sometimes simply called the \"Standard Bible\" in the United States."
            },
            {
                link:"bbe",
                language:"english",
                name:"Bible in Basic English",
                wiki:"https://en.wikipedia.org/wiki/Bible_in_Basic_English",
                about:"The Bible In Basic English (also known as BBE) is a translation of the Bible into Basic English. The BBE was translated by Professor S. H. Hooke using the standard 850 Basic English words. 100 words that were helpful to understand poetry were added along with 50 'Bible' words for a total of 1,000 words. This version is effective in communicating the Bible to those with limited education or where English is a second language. The New Testament was released in 1941 and the Old Testament was released in 1949"
            },
            {
                link:"kjv",
                language:"english",
                name:"King James Version",
                wiki:"https://en.wikipedia.org/wiki/King_James_Version",
                about:"The King James Version (KJV), also known as the King James Bible (KJB) or simply the Authorized Version (AV), is an English translation of the Christian Bible for the Church of England, begun in 1604 and completed as well as published in 1611 under the sponsorship of James VI and I.[a][b] The books of the King James Version include the 39 books of the Old Testament, an intertestamental section containing 14 books of the Apocrypha, and the 27 books of the New Testament. The translation is noted for its \"majesty of style\", and has been described as one of the most important books in English culture[2] and a driving force in the shaping of the English-speaking world."
            },
            {
                link:"web",
                language:"english",
                name:"World English Bible",
                wiki:"https://en.wikipedia.org/wiki/World_English_Bible",
                about:"The World English Bible (also known as the WEB) is a free updated revision of the American Standard Version (1901). It is one of the few public domain, present-day English translations of the entire Bible, and it is freely distributed to the public using electronic formats. The Bible was created by volunteers using the ASV as the base text as part of the ebible.org project through Rainbow Missions, Inc., a Colorado nonprofit corporation."
            },
            {
                link:"ylt",
                language:"english",
                name:"Young's Literal Translation",
                wiki:"https://en.wikipedia.org/wiki/Young%27s_Literal_Translation",
                about:"Young's Literal Translation (YLT) is a translation of the Bible into English, published in 1862. The translation was made by Robert Young, compiler of Young's Analytical Concordance to the Bible and Concise Critical Comments on the New Testament. Young used the Textus Receptus (TR) and the Masoretic Text (MT) as the basis for his translation. He wrote in the preface to the first edition, \"It has been no part of the Translator's plan to attempt to form a New Hebrew or Greek Text—he has therefore somewhat rigidly adhered to the received ones.\""
            }
        ]
	})
	useEffect(() => {
		if(!init){
			const defaultTheme = getBrowserStore("theme") !== null && getBrowserStore("theme") !== "" ? getBrowserStore("theme") : "default"
			toggleTheme(defaultTheme)

			const defaultAppData = getBrowserStore("appData") !== null && getBrowserStore("appData") !== "" ? JSON.parse(getBrowserStore("appData")) : appData
			setappData(defaultAppData)
			setInit(true)
		}
	},[init, appData]);
	const selectBible = (value) =>{
        let newAppData = {...appData,bible:value}
		setappData(newAppData)
        browserStore("appData", newAppData);
	}
	const selectCompare = (value) =>{
        let newAppData = {...appData,compare:value}
		setappData(newAppData)
        browserStore("appData", newAppData);
	}
    const value = {
        appData, selectBible, selectCompare
    }
    return(
        <AppDataContext.Provider value={value}>
            {props.children}
        </AppDataContext.Provider>
    )
}

export default AppDataContextProvifer;