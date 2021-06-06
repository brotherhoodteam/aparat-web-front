import './styles.scss'

interface Props {
	precent: number
}

const Progress: React.FC<Props> = ({ precent }) => {
	return (
		<div className="progress">
			<div className="progress-bar" style={{ width: `${precent}%` }}></div>
		</div>
	)
}

export default Progress
