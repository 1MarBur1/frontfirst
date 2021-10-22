import DomainLabel from '../DomainLabel'
import Population from '../Population'
import Bar from '../Bar'

import {css} from '@emotion/css'

const Row = ({width, label, population}) => {
	return(
		<div className={css`
			display: flex;
			height: 32px;
			align-items: center;
		`}>
			<DomainLabel label={label}/>
			<div className={css `
				display: flex;
				align-items: center;
				left: 310px;
				position: absolute;
			`}>
				<Bar width={width}/>
				<Population population={population}/>
			</div>
		</div>
	)
}

export default Row