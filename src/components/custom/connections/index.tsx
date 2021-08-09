import Avatar from 'components/base/avatar'
import Badge from 'components/base/badge'
import Button from 'components/base/button'
import { Card, CardBody, CardFooter } from 'components/base/card'
import { BaseComponent } from 'lib/types/component'
import { Link } from 'react-router-dom'

interface ConnectionProps extends BaseComponent<HTMLDivElement> {}
const Connection: React.FC<ConnectionProps> = props => {
	const { children, className, ...attr } = props
	return (
		<Card className="h-100">
			<CardBody className="text-center">
				{/* AVATAR */}
				<Avatar
					image="https://htmlstream.com/front-dashboard/assets/img/160x160/img8.jpg"
					alt=""
					size="xl"
					className="d-block mx-auto mb-3"
					circle
				></Avatar>
				{/* END AVATAR */}
				<h3>
					<Link to="/" className="text-dark">
						سارا مدرس
					</Link>
				</h3>
				{/* BADGE */}
				<div className="mb-3">
					<i className="tio-video-gallery ms-1"></i>
					<span>Unassigned</span>
				</div>
				{/* END BADGE */}
			</CardBody>
			<CardFooter>
				<div className="row justify-content-between align-items-center">
					<div className="col-auto py-1">
						<span className="font-size-sm text-body">25 دنبال‌کننده</span>
					</div>
					<div className="col-auto py-1">
						<Button color="primary" size="sm">
							فالو شده
							<i className="tio-done ms-1"></i>
						</Button>
						<Button color="primary" variant="outline" size="sm">
							دنبال شود
							<i className="tio-user-add ms-1"></i>
						</Button>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default Connection
