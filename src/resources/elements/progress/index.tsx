import './styles.scss'

interface Props {
	precent: number
	isCompleted: boolean
}

const Progress: React.FC<Props> = ({ precent, isCompleted }) => {
	return (
		<div className="progress">
			<div
				className={`progress-bar ${isCompleted ? 'bg-success' : ''}`}
				style={{ width: `${precent}%` }}
			></div>
		</div>
	)
}

export default Progress
