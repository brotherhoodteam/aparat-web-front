import { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkTarget } from '../../../interface/component'

import './styles.scss'

interface NavbarLinkProps {
	label: string
	icon: string
	to: LinkTarget
}
interface NavbarButtonProps {
	label: string
	icon: string
	onClick?: MouseEventHandler
}
interface NavbarSubtitleProps {
	label: string
}

const NavbarVertical: React.FC = ({ children }) => {
	return (
		<div className="navbar navbar-vertical">
			<ul className="navbar-nav">{children}</ul>
		</div>
	)
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, icon, to }) => {
	return (
		<li className="navbar-item">
			<NavLink to={to} exact activeClassName="active" className="navbar-link">
				<i className={`${icon} navbar-icon`}></i>
				<span className="navbar-text text-truncate">{label}</span>
			</NavLink>
		</li>
	)
}
const NavbarButton: React.FC<NavbarButtonProps> = ({ label, icon, onClick }) => {
	return (
		<li className="navbar-item">
			<a href="#" className="navbar-link" onClick={onClick}>
				<i className={`${icon} navbar-icon`}></i>
				<span className="navbar-text text-truncate">{label}</span>
			</a>
		</li>
	)
}

const NavbarSubtitle: React.FC<NavbarSubtitleProps> = ({ label }) => {
	return (
		<li className="navbar-item">
			<span className="navbar-subtitle">{label}</span>
		</li>
	)
}
const NavbarDivider = () => {
	return (
		<li className="navbar-item">
			<div className="navbar-divider"></div>
		</li>
	)
}

export { NavbarVertical, NavbarDivider, NavbarLink, NavbarButton, NavbarSubtitle }
