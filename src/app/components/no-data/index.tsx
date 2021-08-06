import SorryImage from 'static/images/sorry.svg'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

interface NoDataProps extends BaseComponent<HTMLDivElement> {}

const NoData: React.FC<NoDataProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'no-data',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			<div className="no-data-img mb-3">
				<LazyLoadImage effect="blur" src={SorryImage} alt="no data" />
			</div>
			{children && children}
		</div>
	)
}

export default NoData
