import styled from "styled-components";

export const PrefectureAndButton = (props) => {
	const {prefecture, index} = props;
	return (
		<>
		<Sdiv>
			<input type="checkbox" id={index} />
			<Sspan>{prefecture.prefName}</Sspan>
		</Sdiv>
		</>
	)
}

const Sspan = styled.span`
	margin: 10px
`

const Sdiv = styled.div`
	display: inline-block
`
