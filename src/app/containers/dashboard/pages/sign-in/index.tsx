import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { Card, CardBody } from 'app/elements/card'
import Avatar from 'app/elements/avatar'
import Button from 'app/elements/button'
import Divider from 'app/elements/divider'
import SignInForm from 'app/components/sign-in-form'
import Alert from 'app/elements/alert'

import { useSelector } from 'react-redux'
import { selectSignIn } from 'store/auth/selectors'

import LogoImage from 'assets/images/logo--color-black--without_text.svg'
import AbstractBg from 'assets/images/abstract-bg-4.svg'
import GoolgleLogo from 'assets/images/google.svg'
import ROUTES from 'config/router/routes'
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
									</div>
								</div>
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
