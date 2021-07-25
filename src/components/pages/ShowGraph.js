import React, {useEffect, useState} from "react";
import axios from "axios";
import {apikey} from "../../APIkey";

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
				headers: { "X-API-KEY": apikey },
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
			<div style={{ width: '100%', height: '300px' }}>
				<Graph data={data} />
			</div>
		</>
	  );
}
