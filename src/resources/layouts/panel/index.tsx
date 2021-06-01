import { Helmet } from 'react-helmet'
import { Card, CardBody, CardHeader, CardTitle } from '../../elements/card'

interface PayloadLayoutProp {
	title?: string
	pageTitle?: string
}

const PanelLayout: React.FC<PayloadLayoutProp> = ({ children, title, pageTitle }) => {
	return (
		<div className="panel">
			{pageTitle && (
				<Helmet>
					<meta charSet="utf-8" />
					<title>{pageTitle}</title>
				</Helmet>
			)}
			<Card>
				{title && (
					<CardHeader>
						<CardTitle className="h5">{title}</CardTitle>
					</CardHeader>
				)}
				<CardBody>{children}</CardBody>
			</Card>
		</div>
	)
}
export default PanelLayout
