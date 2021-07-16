import SorryImage from 'assets/images/sorry.svg'
import useClass from 'core/hooks/use-class'
import { ClassName } from 'core/interface/component'
import './styles.scss'

interface Props {
	className?: ClassName
}

const NoData: React.FC<Props> = ({ children, className }) => {
	const styles = useClass({
		defaultClass: 'no-data',
		otherClass: className
	})
	return (
		<div className={styles}>
			<div className="no-data-img mb-3">
				<img src={SorryImage} alt="no data" />
			</div>
			{children && <p>{children}</p>}
		</div>
	)
}

export default NoData
