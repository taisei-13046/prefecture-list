import React, {useEffect} from "react";
import axios from "axios";

import {populationData} from "../../populationData";

export const ShowGraph = () => {
	// APIから人口の情報を取得する
	//axios
	//.get(
	//	"https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
	//	String("1"),
	//	{
	//		headers: { "X-API-KEY": '7SSvELiPcZD4g8iOJTQLNUZRBiPa2gk31mtavV0H' },
	//	}
	//)
	//.then((results) => {
	//	console.log(results)
	//})
	//.catch((error) => {
	//	return;
	//});
	console.log(populationData)
	return (
		<div>ShowGraph</div>
	)

}
