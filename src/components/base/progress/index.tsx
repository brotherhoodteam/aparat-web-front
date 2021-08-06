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
	const options = {
		className: 'progress-bar',
		danger: 'bg-danger',
		success: 'bg-success'
	}
	const computedClassName = useClassName({
		defaultClass: options.className,
		optionalClass: {
			[options.success]: isCompleted,
			[options.danger]: isFailed
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
