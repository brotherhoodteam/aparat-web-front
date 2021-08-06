import { BaseComponent } from 'lib/types/component'
import React from 'react'

interface PauseIconProps extends BaseComponent<HTMLOrSVGElement> {}

const PauseIcon: React.FC<PauseIconProps> = props => {
	const { children, ...attr } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 224.075 224.075"
			fill="currentColor"
			{...attr}
		>
			<g transform="translate(0 -562.36)">
				<path
					d="M160.738,562.36c-7.9,0-14.2,6.3-13.7,14.2v195.7c-0.5,18.9,28.5,18.9,28,0v-195.7
C175.038,568.66,168.738,562.36,160.738,562.36z"
				/>
				<path
					d="M62.738,562.36c-7.4,0-13.7,6.3-13.7,14.2v195.7c-0.5,18.9,28.5,18.9,28,0v-195.7
C77.538,568.66,70.638,562.36,62.738,562.36z"
				/>
			</g>
		</svg>
	)
}
export default PauseIcon
