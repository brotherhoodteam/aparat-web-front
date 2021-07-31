import TopBarProgress from 'app/components/top-bar-progress'
import React, { useState } from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './styles.scss'

interface Props {}
const CustomSwitch: React.FC<Props> = ({ children }) => {
	const [progress, setProgress] = useState(false)
	// const [prevLoc, setPrevLoc] = useState('')
	const location = useLocation()

	// useEffect(() => {
	// 	setPrevLoc(location.pathname)
	// 	setProgress(true)
	// }, [location])

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setProgress(false)
	// 	}, 1200)
	// }, [prevLoc])
	// const ref = useRef(null)

	return (
		<React.Fragment>
			{/* <LoadingBar color="#f11946" ref={ref} /> */}
			<TransitionGroup>
				<CSSTransition
					classNames="fade"
					key={location.pathname}
					onEnter={() => {
						setProgress(true)
					}}
					onEntered={() => {
						setProgress(false)
					}}
					timeout={1200}
				>
					<Switch>{children}</Switch>
				</CSSTransition>
			</TransitionGroup>
		</React.Fragment>
	)
}

export default CustomSwitch
