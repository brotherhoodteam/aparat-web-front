import { Helmet } from 'react-helmet'

import LogoImage from '../../../assets/images/logo.svg'
import AbstractBg from '../../../assets/images/abstract-bg-4.svg'
import GoolgleLogo from '../../../assets/images/google.svg'
import { Card, CardBody } from '../../elements/card'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import Button from '../../elements/button'
import Divider from '../../elements/divider'
import SignInForm from '../../components/sign-in-form'
import Alert from '../../elements/alert'

const SignInContainer: React.FC = () => {
	return (
		<>
			{/* HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				<title>Signin Page</title>
			</Helmet>
			{/* Main */}
			<div className="container py-5 py-sm-7">
				{/* BACKGROUND HERO */}
				<div
					className="position-fixed top-0 right-0 left-0 bg-img-hero"
					style={{ height: '32rem', backgroundImage: `url(${AbstractBg})` }}
				>
					<figure className="position-absolute right-0 bottom-0 left-0">
						<svg
							preserveAspectRatio="none"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 1921 273"
						>
							<polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
						</svg>
					</figure>
				</div>
				{/* LOGO */}
				<div className="d-flex justify-content-center mb-5">
					<img
						src={LogoImage}
						alt="logo"
						className="z-index-2"
						style={{ width: '8rem' }}
					/>
				</div>
				{/* CONTENT */}
				<div className="row justify-content-center">
					<div className="col-md-7 col-lg-5">
						{/* CARD */}
						<Card className="mb-5" size="lg">
							<CardBody>
								<div className="text-center">
									<div className="mb-5">
										<h1 className="display-4 text-capitalize">
											<FormattedMessage id="signin" />
										</h1>
										<p>
											<FormattedMessage id="guest-register-message" />

											<Link to={{ pathname: '/signup' }} className="ms-1">
												<FormattedMessage id="sign-up-here" />
											</Link>
										</p>
									</div>
									<div className="mb-4">
										<Button as="a" color="white" size="lg" block classNames="mb-4">
											<span className="d-flex justify-content-center align-items-center">
												<img
													src={GoolgleLogo}
													className="avatar avatar-xss me-2"
													alt="google icon"
												/>
												<FormattedMessage id="sign-in-google" />
											</span>
										</Button>
									</div>
									<div className="mb-4">
										<Divider className="text-muted">
											<FormattedMessage id="or" />
										</Divider>
									</div>
								</div>
								<Alert
									message="ایمیل یا پسورد وارد شده صحیح میباشد"
									color="danger"
									className="mb-4"
								/>
								{/* FORM */}
								<SignInForm />
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignInContainer
