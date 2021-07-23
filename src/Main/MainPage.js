import {ShowPrefectureBox} from "../components/pages/ShowPrefectureBox";
import {ShowGraph} from "../components/pages/ShowGraph";
import {Header} from "../components/organisms/layout/Header";

export const MainPage = () => {
	return (
		<>
			<Header />
			<ShowPrefectureBox />
			<ShowGraph />
		</>
	)
}
