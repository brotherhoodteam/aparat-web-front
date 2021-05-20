import Header from '../../components/header'

import './styles.scss'

interface Props {}
const DashboardContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className="dashboard">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-4">aside</div>
					<div className="col-8">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardContainer
