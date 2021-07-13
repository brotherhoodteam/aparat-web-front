import { Helmet } from 'react-helmet'

const NotFoundContainer: React.FC = props => {
	return (
		<div>
			{/* HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				<title>Notfound Page</title>
			</Helmet>
			Notfound Container
		</div>
	)
}
export default NotFoundContainer
