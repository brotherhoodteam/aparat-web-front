import ContentLoader from 'react-content-loader'

interface Props {}

const AvatarLoader: React.FC<Props> = () => (
	<div className="content-loader">
		<ContentLoader height={40} width={40}>
			<circle cx="50%" cy="50%" r="50%" width="100%" height="100%" />
		</ContentLoader>
	</div>
)

export default AvatarLoader
