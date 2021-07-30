import React from 'react'

interface Props {
	style?: React.CSSProperties | undefined
}

const VolumeDownIcon: React.FC<Props> = props => {
	const { style } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 224.005 224.005"
			fill="currentColor"
			className="position-absolute-center"
			style={style}
		>
			<path
				d="M185.302,0c-2.1,0-4.2,0.5-5.8,1.601l-95.1,47.219h-45.7c-7.9,0-14.2,6.303-14.2,14.206v98.139
c0,7.303,6.3,13.606,14.2,13.606h45.7l95.1,47.719c8.9,4.702,20-2.101,20-12.605V14.106C199.502,6.303,193.202,0,185.302,0z
M171.602,36.715v150.66l-77.8-38.816c-2.1-1-4.2-1.601-6.3-1.601h-35.2V77.131h35.2c2.1,0,4.2-0.5,6.3-1.601L171.602,36.715
L171.602,36.715z"
			/>
		</svg>
	)
}
export default VolumeDownIcon
