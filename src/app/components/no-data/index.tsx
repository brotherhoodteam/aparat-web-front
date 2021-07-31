import SorryImage from 'static/images/sorry.svg'
import useClass from 'lib/hooks/use-class'
import { ClassName } from 'lib/interface/component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
				<LazyLoadImage effect="blur" src={SorryImage} alt="no data" />
			</div>
			{children && children}
		</div>
	)
}

export default NoData
