import styled from "@emotion/styled"

const Population = ({population}) => {

	const H2 = styled.h2`
		font-weight: 700;
		font-size: 16px;
		margin-left: 28px;
	`
	
	return(
		<H2>{population}</H2>
	)
}

export default Population;