import React, {useEffect, useState} from "react";
import axios from "axios";

import {Graph} from "../organisms/layout/Graph"

export const ShowGraph = (props) => {
	const {prefectures} = props;
	const [population, setpopulation] = useState(null);
	let series = [];
	// APIから人口の情報を取得する
	useEffect(() => {
		axios
		.get(
			"https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
			String("1"),
			{
				headers: { "X-API-KEY": '7SSvELiPcZD4g8iOJTQLNUZRBiPa2gk31mtavV0H' },
			}
		)
		.then((results) => {
			setpopulation(results.data.result.data[0].data)
		})
		.catch((error) => {
			return;
		});
	}, [])
	const data = population;
	const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

	return (
		<Graph data={data} />
	  );
}
