import {css, keyframes} from '@emotion/css'

const Bar = ({width, mobile}) => {
	const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
	`

	return(
		<canvas className={css`
			background: linear-gradient(-45deg, #ee7752, #FFB386, #86FFE2, #5EFF8B);
			background-size: 260% 260%;
			animation: ${gradient} 15s ease infinite;
			border-radius: 12px;
			@media (max-width: 768px) {
        		display: none;
				font-size: 10px
     		}
		`} width={width} height='28'/>
	)
}

export default Bar;