import { Helmet } from 'react-helmet'

interface PayloadLayoutProp {
	title?: string
}

const PanelLayout: React.FC<PayloadLayoutProp> = ({ children, title }) => {
	return (
		<div className="panel">
			{title && (
				<Helmet>
					<meta charSet="utf-8" />
					<title>{title}</title>
				</Helmet>
			)}
			{children}
		</div>
	)
}
export default PanelLayout
