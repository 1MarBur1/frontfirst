import {css} from '@emotion/css'
import styled from '@emotion/styled'

import Row from './components/Row'

const Main = () => {
	const H1 = styled.h1`
		font-size: 32px;
		font-weight: 800;
	`
	const H3 = styled.h3`
		font-weight: 600;
		font-size: 14px;
	`

	return (
		<div className={css`
				font-family: 'Montserrat';
				margin-left: auto;
				margin-right: auto;
			`}>
			<div className={css`
				margin-left: auto;
				margin-right: auto;
				text-align: center;
			`}>
				<H1>World population</H1>
				<H3>Ten most popular countries</H3>
			</div>


			<div className={css `
				margin-left: 100px;
				margin-top: 50px;
			`}>
				<Row label='WORLD' population='7,752,840,000' width={800}/>
				<Row label='CHINA' population='1,402,112,000' width={150}/>
				<Row label='INDIA' population='1,380,004,000' width={144}/>
				<Row label='UNITED STATES' population='329,484,000' width={90}/>
				<Row label='INDONESIA' population='273,523,000' width={87}/>
				<Row label='PAKISTAN' population='220,892,000' width={80}/>
				<Row label='BRAZIL' population='212,559,000' width={70}/>
				<Row label='NIGERIA' population='206,139,000' width={65}/>
				<Row label='BANGLADESH' population='164,689,000' width={54}/>
				<Row label='RUSSIAN FEDERATION' population='144,104,000' width={47}/>
				<Row label='MEXICO' population='128,932,000' width={43}/>
			</div>
		</div>
	);
}

export default Main;
