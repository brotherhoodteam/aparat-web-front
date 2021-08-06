import { BaseComponent } from 'lib/types/component'
import React from 'react'

interface RewindIconProps extends BaseComponent<HTMLOrSVGElement> {}

const RewindIcon: React.FC<RewindIconProps> = props => {
	const { children, ...attr } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 321.9 321.9"
			fill="currentColor"
			{...attr}
		>
			<path
				d="M307.7,48.894c-2.6,0-5.3,1.1-7.4,2.1l-125.5,84v-71.9c0.2-7.8-6.1-14.1-14-14.1v0c-2.6,0-5.3,1.1-7.4,2.1l-147.1,98.2
c-8.4,5.8-8.4,17.9,0,23.6l147.1,97.7c9.5,6.3,21.5-0.5,21.5-11.6v-71.9l125.5,83.5c9.5,6.3,21.5-0.5,21.5-11.6v-195.9
C321.9,55.194,315.6,48.894,307.7,48.894z M147.2,232.793l-107.7-71.9l107.7-71.5V232.793z M294.3,232.793l-107.7-71.9l107.7-71.5
V232.793z"
			/>
		</svg>
	)
}
export default RewindIcon
