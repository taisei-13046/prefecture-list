import React, {useState} from "react";
import {ShowPrefectureBox} from "../components/pages/ShowPrefectureBox";
import {ShowGraph} from "../components/pages/ShowGraph";
import {Header} from "../components/organisms/layout/Header";

export const MainPage = () => {
	const [prefectures, setPrefectures] = useState([]);
	const [index, setIndex] = useState(null);
	return (
		<>
			<Header />
			<ShowPrefectureBox
				prefectures={prefectures}
				setPrefectures={setPrefectures}
				index={index}
				setIndex={setIndex}
			/>
			<ShowGraph
				prefectures={prefectures}
				setPrefectures={setPrefectures}
				index={index}
				setIndex={setIndex}
			/>
		</>
	)
}
