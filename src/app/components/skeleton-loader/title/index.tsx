import { BaseComponent } from 'lib/types/component'
import ContentLoader from 'react-content-loader'
import SkeletonLoader from '..'
import './styles.scss'

interface TitleLoaderProps extends BaseComponent<HTMLDivElement> {}

const TitleLoader: React.FC<TitleLoaderProps> = props => {
	const { children, ...attr } = props

	return (
		<SkeletonLoader {...attr}>
			<ContentLoader rtl width="100%" height={116} className="content-loader-rtl">
				<rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
				<rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
				<rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
				<rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
				<rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
			</ContentLoader>
		</SkeletonLoader>
	)
}

export default TitleLoader
