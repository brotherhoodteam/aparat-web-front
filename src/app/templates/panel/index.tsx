import { Helmet } from 'react-helmet'
import './styles.scss'

interface PanelLayoutProps {
	title?: string
}
interface PanelHeaderProps {
	title?: string
}
interface PanelTitleProps {}

const PanelLayout: React.FC<PanelLayoutProps> = ({ children, title }) => {
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

const PanelHeader: React.FC<PanelHeaderProps> = ({ children }) => {
	return <div className="panel-header">{children}</div>
}

const PanelTitle: React.FC<PanelTitleProps> = ({ children }) => {
	return <h1 className="panel-title">{children}</h1>
}

export { PanelHeader, PanelTitle }
export default PanelLayout
