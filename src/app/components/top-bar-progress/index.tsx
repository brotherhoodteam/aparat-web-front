import { useNProgress } from '@tanem/react-nprogress'
import Spinner from './spinner'
import Bar from './bar'
import Container from './container'

interface Props {
	isAnimating: boolean
}
const TopBarProgress: React.FC<Props> = ({ isAnimating }) => {
	const { isFinished, progress, animationDuration } = useNProgress({
		isAnimating
	})

	return (
		<Container animationDuration={animationDuration} isFinished={isFinished}>
			<Bar animationDuration={animationDuration} progress={progress} />
		</Container>
	)
}

export default TopBarProgress
