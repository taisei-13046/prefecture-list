import styled from "styled-components";

export const Header = () => {
	return (
	<SHeader>
		都道府県人口表示
	</SHeader>
	)
}

const SHeader = styled.header`
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #C4C4C4;
	top: 0;
	width: 100%;
	align-items: center;
	margin-left: auto;
    margin-right: auto
	text-align:center;
`;
