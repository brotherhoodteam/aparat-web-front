import { BaseComponent } from 'lib/types/component'
import ContentLoader from 'react-content-loader'
import SkeletonLoader from '..'

interface AvatarLoaderProps extends BaseComponent<HTMLDivElement> {}

const AvatarLoader: React.FC<AvatarLoaderProps> = props => {
	const { children, ...attr } = props

	return (
		<SkeletonLoader {...attr}>
			<ContentLoader height={40} width={40}>
				<circle cx="50%" cy="50%" r="50%" width="100%" height="100%" />
			</ContentLoader>
		</SkeletonLoader>
	)
}

export default AvatarLoader
