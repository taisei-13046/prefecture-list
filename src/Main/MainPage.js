import React, {useState} from "react";
import {ShowPrefectureBox} from "../components/pages/ShowPrefectureBox";
import {ShowGraph} from "../components/pages/ShowGraph";
import {Header} from "../components/organisms/layout/Header";

export const MainPage = () => {
	const [prefectures, setPrefectures] = useState([]);
	return (
		<>
			<Header />
			<ShowPrefectureBox prefectures={prefectures} setPrefectures={setPrefectures} />
			<ShowGraph prefectures={prefectures} />
		</>
	)
}
