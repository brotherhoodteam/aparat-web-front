import './styles.scss'

interface TooltipProps {
	show: boolean
	text: string
}
const Tooltip: React.FC<TooltipProps> = ({ show, text }) => {
	return (
		<div className={`tooltip tooltip-top ${show ? 'show' : ''}`}>
			<div className="tooltip-inner">{text}</div>
			<div className="arrow"></div>
		</div>
	)
}
export default Tooltip
