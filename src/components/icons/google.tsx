import { BaseComponent } from 'lib/types/component'
import React from 'react'

interface PauseIconProps extends BaseComponent<HTMLOrSVGElement> {}

const PauseIcon: React.FC<PauseIconProps> = props => {
	const { children, ...attr } = props

	const styles = {
		st0: { fill: '#4285F4' },
		st1: { fill: '#34A853' },
		st2: { fill: '#FBBC05' },
		st3: { fill: '#EB4335' }
	}
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 156.8 160"
			xmlSpace="preserve"
			{...attr}
		>
			<path
				style={styles.st0}
				d="M156.8,81.8c0-6.6-0.5-11.4-1.7-16.4H80v29.7h44.1c-0.9,7.4-5.7,18.5-16.4,26l-0.1,1l23.7,18.4l1.6,0.2
			C148.1,126.7,156.8,106.1,156.8,81.8"
			/>
			<path
				style={styles.st1}
				d="M80,160c21.6,0,39.7-7.1,53-19.4l-25.2-19.6c-6.8,4.7-15.8,8-27.7,8c-21.2,0-39.1-14-45.5-33.2l-0.9,0.1
			L8.9,115l-0.3,0.9C21.7,142,48.7,160,80,160"
			/>
			<path
				style={styles.st2}
				d="M34.5,95.8c-1.7-5-2.7-10.3-2.7-15.8c0-5.5,1-10.8,2.6-15.8l0-1.1l-25-19.4l-0.8,0.4C3.1,54.9,0,67.1,0,80
			s3.1,25.1,8.5,35.9L34.5,95.8"
			/>
			<path
				style={styles.st3}
				d="M80,30.9c15,0,25.2,6.5,30.9,11.9l22.6-22C119.6,7.9,101.6,0,80,0C48.7,0,21.7,18,8.5,44.1l25.9,20.1
			C40.9,44.9,58.8,30.9,80,30.9"
			/>
		</svg>
	)
}
export default PauseIcon
