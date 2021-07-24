import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {prefecturesList} from "../../prefectureData";
import {PrefectureAndButton} from "../molecules/PrefectureAndButton";

export const ShowPrefectureBox = (props) => {
	const {prefectures, setPrefectures, setIndex} = props;

	//APIから都道府県一覧を取得する
	useEffect(() => {
		axios
		.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
			headers: { "X-API-KEY": '7SSvELiPcZD4g8iOJTQLNUZRBiPa2gk31mtavV0H' },
		})
		.then((results) => {
			setPrefectures(results.data.result);
		})
		.catch((error) => {});
	}, [])

	return (
		<>
			<p>都道府県</p>
			<div>
				{prefectures.map((prefecture, index) => {
					const onChangeIndex = () => {
						setIndex(index);
					}
					return (
						<Sdiv name="form" >
							<input type="radio" onChange={onChangeIndex} name="checked" />
							<Sspan>{prefecture.prefName}</Sspan>
						</Sdiv>
					)
				})}
			</div>
		</>
	)
}

const Sspan = styled.span`
	margin: 10px
`

const Sdiv = styled.div`
	display: inline-block
`
