import React, {useEffect, useState} from "react";
import axios from "axios";

import {Graph} from "../organisms/Graph"

export const ShowGraph = (props) => {
	const {index} = props;
	const [population, setpopulation] = useState(null);
	// APIから人口の情報を取得する
	useEffect(() => {
		axios
		.get(
			"https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
			String(index),
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
	}, [index])
	const data = population;

	return (
		<>
			<Graph data={data} />
		</>
	  );
}
