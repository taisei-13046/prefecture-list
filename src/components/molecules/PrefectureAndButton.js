import styled from "styled-components";

export const PrefectureAndButton = (props) => {
	const {prefecture} = props;
	return (
		<>
		<Sdiv>
			<input type="checkbox" />
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
