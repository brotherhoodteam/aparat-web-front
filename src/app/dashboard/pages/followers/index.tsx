import Connection from 'components/custom/connections'
import React from 'react'

const DashboardFollowers: React.FC = props => {
	return (
		<div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
				{Array(9)
					.fill('')
					.map(_ => (
						<div className="col mb-3 mb-lg-5">
							<Connection />
						</div>
					))}
			</div>
		</div>
	)
}

export default DashboardFollowers
