import styled from '@emotion/styled'

const DomainLabel = ({label}) => {
	const H2 = styled.h2`
		font-weight: 700;
		font-size: 16px;
	`

	return(
		<H2>{label}</H2>
	)
}

export default DomainLabel;