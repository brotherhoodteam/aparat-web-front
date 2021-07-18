import { Helmet } from 'react-helmet'
import './styles.scss'
interface PanelLayout {
	title?: string
}
interface PanelHeader {
	title?: string
}
interface PanelTitle {}

const PanelLayout: React.FC<PanelLayout> = ({ children, title }) => {
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

const PanelHeader: React.FC<PanelHeader> = ({ children }) => {
	return <div className="panel-header">{children}</div>
}

const PanelTitle: React.FC<PanelTitle> = ({ children }) => {
	return <h1 className="panel-title">{children}</h1>
}

export { PanelHeader, PanelTitle }
export default PanelLayout
