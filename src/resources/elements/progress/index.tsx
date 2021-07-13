import useClass from 'core/hooks/use-class'
import './styles.scss'

interface Props {
	precent: number
	isCompleted: boolean
	isFailed: boolean
}

const Progress: React.FC<Props> = ({ precent, isCompleted, isFailed }) => {
	const styles = useClass({
		defaultClass: 'progress-bar',
		optionalClass: {
			'bg-success': isCompleted,
			'bg-danger': isFailed
		}
	})
	return (
		<div className="progress">
			<div className={styles} style={{ width: `${precent}%` }}></div>
		</div>
	)
}

export default Progress
