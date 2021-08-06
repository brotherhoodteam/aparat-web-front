import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { CSSTransition } from 'react-transition-group'
import './styles.scss'

interface TooltipProps extends BaseComponent<HTMLDivElement> {
	show: boolean
	text: string
}
const Tooltip: React.FC<TooltipProps> = props => {
	const { className, show, text, children, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'tooltip tooltip-top',
		appendClassName: className
	})

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
			<div className={computedClassName} {...attr}>
				<div className="tooltip-inner">{text}</div>
				<div className="arrow"></div>
			</div>
		</CSSTransition>
	)
}
export default Tooltip
