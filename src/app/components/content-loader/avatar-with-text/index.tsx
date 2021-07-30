import ContentLoader from 'react-content-loader'

interface Props {}

const AvatarWithTextLoader: React.FC<Props> = () => (
	<div className="content-loader">
		<ContentLoader width="100%" height="45" rtl>
			<rect x="60" y="8" rx="4" ry="4" width="70" height="6" />
			<rect x="60" y="28" rx="3" ry="3" width="100" height="7" />
			<circle cx="20" cy="20" r="20" />
		</ContentLoader>
	</div>
)

export default AvatarWithTextLoader
