import useClass from '../../../hooks/use-class'
import './index'

interface LogoProp {
	size: 'sm' | 'md' | 'lg'
}

const Logo: React.FC<LogoProp> = () => {
	const styles = useClass({
		defaultClass: 'logo',
		optionalClass: {}
	})
	return <div className={styles}>ee</div>
}

export default Logo
