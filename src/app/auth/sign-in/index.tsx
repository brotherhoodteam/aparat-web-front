import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { Card, CardBody } from 'components/base/card'
import Avatar from 'components/base/avatar'
import Button from 'components/base/button'
import Divider from 'components/base/divider'
import SignInForm from 'components/custom/sign-in-form'
import Alert from 'components/base/alert'

import { useSelector } from 'react-redux'
import { selectSignIn } from 'store/auth/selectors'

import LogoImage from 'static/images/logo--color-black--without_text.svg'
import AbstractBg from 'static/images/abstract-bg-4.svg'
import GoolgleLogo from 'static/images/google.svg'
import ROUTES from 'core/router/routes'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SignInContainer: React.FC = () => {
	// TODO باید متن اررور الرت فرم داینامیک شود
	const { error } = useSelector(selectSignIn)
	return (
		<React.Fragment>
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
					<LazyLoadImage
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

											<Link to={{ pathname: ROUTES.AUTH.SIGNUP().link }} className="ms-1">
												<FormattedMessage id="sign-up-here" />
											</Link>
										</p>
									</div>
									<div className="mb-4">
										<Button color="white" size="lg" block classNames="mb-4">
											<span className="d-flex justify-content-center align-items-center">
												<Avatar
													image={GoolgleLogo}
													size="xs"
													circle={true}
													alt="google icon"
													className="me-2"
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
								{/* Form Error Handler */}
								<div className="mb-4">
									<Alert
										message={error?.message}
										color="danger"
										animated
										show={!!error}
									/>
								</div>
								{/* FORM */}
								<SignInForm />
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default SignInContainer
