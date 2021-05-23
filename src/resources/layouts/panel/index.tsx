import { Card, CardBody, CardHeader } from '../../elements/card'

const PanelLayout: React.FC = ({ children }) => {
	return (
		<div className="panel">
			<Card>
				<CardHeader></CardHeader>
				<CardBody>{children}</CardBody>
			</Card>
		</div>
	)
}

export default PanelLayout
