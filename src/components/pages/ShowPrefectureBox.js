import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {apikey} from "../../APIkey";

export const ShowPrefectureBox = (props) => {
	const {prefectures, setPrefectures, setIndex} = props;

	//APIから都道府県一覧を取得する
	useEffect(() => {
		axios
		.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
			headers: { "X-API-KEY": apikey },
		})
		.then((results) => {
			setPrefectures(results.data.result);
		})
		.catch((error) => {});
	}, [])

	return (
		<>
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
		</>
	)
}

const Sspan = styled.span`
	margin: 10px
`

const Sdiv = styled.div`
	display: inline-block
`
