import { useDispatch } from 'react-redux'
import Dropdown, {
	DropdownButton,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	DropdownMenu
} from 'components/base/dropdown'
import Media, { MediaBody } from 'components/base/media'
import AvatarLoader from 'components/custom/skeleton/avatar'
import AvatarWithTextLoader from 'components/custom/skeleton/avatar-with-text'
import Avatar from 'components/base/avatar'
import Button from 'components/base/button'
import ROUTES from 'core/router/routes'
import { BaseComponent } from 'lib/types/component'
import React from 'react'
import { logoutRequest } from 'store/auth/slice'
import { useUserProfile } from 'store/user/hooks'
import useClassName from 'lib/hooks/use-class'

interface ProfileNavbarProps extends BaseComponent<HTMLUListElement> {}

const ProfileMenu: React.FC<ProfileNavbarProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-nav',
		optionalClass: className
	})

	const dispatch = useDispatch()
	const { data: profile, loading } = useUserProfile()
	const handleLogout = () => {
		dispatch(logoutRequest())
	}

	return (
		<ul className={computedClassName} {...attr}>
			<li className="navbar-item">
				<Button
					variant="ghost"
					color="secondary"
					to={ROUTES.DASHBOARD.ADD_VIDEO().link}
					circle
					icon
				>
					<i className="tio-add"></i>
				</Button>
			</li>
			<li className="navbar-item">
				<Button
					variant="ghost"
					color="secondary"
					to="#"
					status="danger"
					statusSize="sm"
					circle
					icon
				>
					<i className="tio-notifications-on-outlined"></i>
				</Button>
			</li>
			<li className="navbar-item">
				<Dropdown>
					<DropdownButton>
						<div className="navbar-avatar-wrapper">
							{profile && !loading ? (
								<Avatar
									image={profile.avatar}
									alt={profile.name}
									size="sm"
									circle
									status="success"
								/>
							) : (
								<AvatarLoader />
							)}
						</div>
					</DropdownButton>
					<DropdownMenu>
						<DropdownHeader>
							<Media>
								{profile && !loading ? (
									<React.Fragment>
										<Avatar
											image={profile.avatar}
											alt={profile.name}
											size="sm"
											circle
											className="me-2"
										/>
										<MediaBody>
											<span
												style={{ display: 'block', color: '#1e2022', marginBottom: 0 }}
											>
												{profile.name}
											</span>
											<span style={{ display: 'block', color: '#677788', margin: 0 }}>
												{profile.email}
											</span>
										</MediaBody>
									</React.Fragment>
								) : (
									<AvatarWithTextLoader />
								)}
							</Media>
						</DropdownHeader>
						<DropdownDivider />
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.OVERVIEW().link }}>
							<span className="text-truncate" title="??????????????">
								??????????????
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.ADD_VIDEO().link }}>
							<span className="text-truncate" title="???????????? ????????">
								???????????? ????????
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.VIDEOS().link }}>
							<span className="text-truncate" title="???????????????? ????">
								???????????????? ????
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.COMMENTS().link }}>
							<span className="text-truncate" title="???????????????????">
								???????????????????
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.CHANNELS().link }}>
							<span className="text-truncate" title="????????????????????">
								????????????????????
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.SETTINGS().link }}>
							<span className="text-truncate" title="	??????????????">
								??????????????
							</span>
						</DropdownItem>
						<DropdownDivider />
						<DropdownItem onClick={handleLogout}>
							<span className="text-truncate" title="????????">
								????????
							</span>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
		</ul>
	)
}
export default ProfileMenu
