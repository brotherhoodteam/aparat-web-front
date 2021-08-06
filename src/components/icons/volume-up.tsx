import { BaseComponent } from 'lib/types/component'
import React from 'react'

interface VolumeUpIconProps extends BaseComponent<HTMLOrSVGElement> {}

const VolumeUpIcon: React.FC<VolumeUpIconProps> = props => {
	const { children, ...attr } = props
	return (
		<svg viewBox="0 0 224.001 224.001" x="0px" y="0px" fill="currentColor" {...attr}>
			<g transform="translate(0 -562.36)">
				<path
					d="M160.6,562.403c-2.1,0-4.2,0.5-5.8,1.6l-95,47.2H14.2c-7.9,0-14.2,6.3-14.2,14.2v98.1c0,7.3,6.3,13.6,14.2,13.6h45.6
                    l95,47.7c8.9,4.7,19.9-2.1,19.9-12.6v-195.7C174.8,568.703,168.5,562.403,160.6,562.403z M147,749.703l-77.6-38.8
                    c-2.1-1-4.2-1.6-6.3-1.6H28v-69.8h35.1c2.1,0,4.2-0.5,6.3-1.6l77.6-38.8V749.703z"
				/>
				<path
					d="M209.9,635.903c-7.9,0-14.2,6.3-14.2,14.2v48.8c0,18.9,28.3,18.9,28.3,0v-48.8
                    C224.1,642.203,217.8,635.303,209.9,635.903z"
				/>
			</g>
		</svg>
	)
}
export default VolumeUpIcon
