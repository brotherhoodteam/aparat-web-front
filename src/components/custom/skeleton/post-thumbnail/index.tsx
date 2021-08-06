import { BaseComponent } from 'lib/types/component'
import ContentLoader from 'react-content-loader'
import SkeletonLoader from '..'

interface PostThumbnailLoaderProps extends BaseComponent<HTMLDivElement> {
	length: number
	size: string
}
const PostThumbnailLoader: React.FC<PostThumbnailLoaderProps> = props => {
	const { children, length, size, ...attr } = props

	return (
		<SkeletonLoader {...attr}>
			<div className="row">
				{Array(length)
					.fill('')
					.map((_, inx) => (
						<div className={size} key={inx}>
							<ContentLoader
								rtl
								height={280}
								width="100%"
								className="content-loader content-loader-rtl"
							>
								<rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
								<circle cx="35" cy="248" r="20" />
								<rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
								<rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
							</ContentLoader>
						</div>
					))}
			</div>
		</SkeletonLoader>
	)
}
export default PostThumbnailLoader
