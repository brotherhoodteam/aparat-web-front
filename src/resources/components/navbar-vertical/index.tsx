import { MouseEventHandler } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LinkTarget } from '../../../interface/component'

import './styles.scss'

interface NavbarLinkProps {
	title: string
	icon: string
	to: LinkTarget
}
interface NavbarButtonProps {
	title: string
	icon: string
	onClick?: MouseEventHandler
}
interface NavbarSubtitleProps {
	title: string
}

const NavbarVertical: React.FC = ({ children }) => {
	return (
		<div className="navbar navbar-vertical">
			<ul className="navbar-nav">{children}</ul>
		</div>
	)
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ title, icon, to }) => {
	return (
		<li className="navbar-item">
			<NavLink to={to} exact activeClassName="active" className="navbar-link">
				<i className={`${icon} navbar-icon`}></i>
				<span className="navbar-text text-truncate">{title}</span>
			</NavLink>
		</li>
	)
}
const NavbarButton: React.FC<NavbarButtonProps> = ({ title, icon, onClick }) => {
	return (
		<li className="navbar-item">
			<a href="#" className="navbar-link" onClick={onClick}>
				<i className={`${icon} navbar-icon`}></i>
				<span className="navbar-text text-truncate">{title}</span>
			</a>
		</li>
	)
}

const NavbarSubtitle: React.FC<NavbarSubtitleProps> = ({ title }) => {
	return (
		<li className="navbar-item">
			<span className="navbar-subtitle">{title}</span>
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
