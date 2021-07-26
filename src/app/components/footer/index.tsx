import Pagination from '../pagination'
import './styles.scss'

interface Props {}
const Footer: React.FC<Props> = ({}) => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<span className="text-muted">
							تمامی حقوق این وبسایت متعلق به صاحب سایت میباشد{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
