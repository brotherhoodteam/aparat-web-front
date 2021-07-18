import { CSSTransition } from 'react-transition-group'
import './styles.scss'

interface TooltipProps {
	show: boolean
	text: string
}
const Tooltip: React.FC<TooltipProps> = ({ show, text }) => {
	return (
		<CSSTransition
			in={show}
			timeout={200}
			classNames={{
				enterActive: 'show',
				enterDone: 'show'
			}}
			unmountOnExit
		>
			<div className={`tooltip tooltip-top`}>
				<div className="tooltip-inner">{text}</div>
				<div className="arrow"></div>
			</div>
		</CSSTransition>
	)
}
export default Tooltip
