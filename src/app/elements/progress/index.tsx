import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import './styles.scss'

interface ProgressProps extends BaseComponent<HTMLDivElement> {
	precent: number
	isCompleted: boolean
	isFailed: boolean
}

const Progress: React.FC<ProgressProps> = props => {
	const { children, className, precent, isCompleted, isFailed, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'progress-bar',
		optionalClass: {
			'bg-success': isCompleted,
			'bg-danger': isFailed
		},
		appendClassName: className
	})

	return (
		<div className="progress" {...attr}>
			<div className={computedClassName} style={{ width: `${precent}%` }}></div>
		</div>
	)
}

export default Progress
