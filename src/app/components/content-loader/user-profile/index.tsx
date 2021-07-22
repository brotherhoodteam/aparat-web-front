import ContentLoader from 'react-content-loader'
interface Props {}
const UserProfileLoader: React.FC<Props> = () => (
	<div className="content-loader">
		<ContentLoader
			speed={2}
			width="100%"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			rtl
		>
			<circle cx="50%" cy="59" r="49" />
			<circle cx="50%" cy="66" r="8" />
			<rect x="20%" y="120" rx="0" ry="0" width="60%" height="8" />
			<rect x="30%" y="137" rx="0" ry="0" width="40%" height="8" />
		</ContentLoader>
	</div>
)

export default UserProfileLoader
