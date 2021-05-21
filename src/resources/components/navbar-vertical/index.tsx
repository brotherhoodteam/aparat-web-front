import { Link } from 'react-router-dom'
import './styles.scss'

interface NavbarLinkProps {
	title: string
	icon: string
	to: string
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
			<Link to={to} className="navbar-link">
				<i className={`${icon} navbar-icon`}></i>
				<span className="navbar-text text-truncate">{title}</span>
			</Link>
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

export { NavbarVertical, NavbarDivider, NavbarLink, NavbarSubtitle }