import accountBg from '../../../assets/images/abstract-shapes-20.svg'
import Sidebar from '../../components/sidebar'
import Button from '../../elements/button'
import './styles.scss'

interface Props {}
const DashboardContainer: React.FC<Props> = ({ children }) => {
	const handleClose = () => {
		console.log('logout')
	}
	return (
		<div className="dashboard">
			<div className="bg-dark" style={{ backgroundImage: `url(${accountBg})` }}>
				<div className="container space-1 space-top-lg-2 space-bottom-lg-3">
					<div className="row align-items-center">
						<div className="col">
							<div className="d-none d-lg-block">
								<h1 className="h2 text-white">حساب کاربری</h1>
							</div>
						</div>
						<div className="col-auto">
							<Button variant="soft" color="light" onClick={handleClose}>
								خروج از حساب ‌کاربری
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="container space-1 space-top-lg-0 space-bottom-lg-2 mt-lg-n10">
				<div className="row">
					<div className="col-lg-3">
						<Sidebar />
					</div>
					<div className="col-8">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardContainer
