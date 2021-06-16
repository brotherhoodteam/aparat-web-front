import React, { Fragment, MouseEvent, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../spinner'
import useClass from '../../../hooks/use-class'
import { ClassName, Colors, Size, Variants } from '../../../interface/component'

import './styles.scss'

interface ButtonProps {
	as?: 'a' | 'link'
	type?: 'button' | 'submit' | 'reset'
	href?: string | '#'
	to?: string | '#'
	variant?: Variants
	color?: Colors
	classNames?: ClassName
	size?: Size
	block?: boolean
	loader?: boolean
	loaderText?: string
	disanled?: boolean
	circle?: boolean
	icon?: boolean
	status?: Colors
	statusSize?: Size
	onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = React.memo(
	React.memo(
		({
			as,
			href,
			type,
			variant,
			color,
			classNames,
			size,
			block,
			children,
			loader,
			loaderText,
			disanled,
			circle,
			icon,
			status,
			statusSize,
			onClick,
			to,
			...props
		}) => {
			const btnLink = to ? to : '#'
			const baseClass = 'btn'
			const baseStatusClass = 'btn-status'
			const variantAndColor = `${baseClass}${
				variant === 'solid' ? '' : '-' + variant
			}-${color}`
			const defaultVariantAndColor = `${baseClass}-${color}`
			const btnSize = `${baseClass}-${size}`
			const btnStatusSize = `${baseStatusClass}-${statusSize}`
			const btnBlock = `${baseClass}-block`
			const btnType = type ? type : 'button'
			const btnRounded = `${baseClass}-circle`
			const btnIcon = `${baseClass}-icon`
			const btnStatus = `${baseStatusClass}-${status}`
			const styles = useClass({
				defaultClass: baseClass,
				optionalClass: {
					[defaultVariantAndColor]: !variant && color,
					[variantAndColor]: variant && color,
					[btnSize]: size,
					[btnBlock]: block,
					[btnRounded]: circle,
					[btnIcon]: icon
				},
				otherClass: classNames
			})

			const statusStyle = useClass({
				defaultClass: 'btn-status',
				optionalClass: {
					[btnStatus]: status,
					[btnStatusSize]: status && statusSize
				}
			})
			const defaultLoaderText = 'لطفا صبر کنید'

			const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
				if (disanled || loader) return
				onClick && onClick(e)
			}

			if (as === 'a')
				return (
					<a href={href} onClick={handleClick} className={styles} {...props}>
						{loader ? (
							<Fragment>
								<Spinner variants="border" size="sm" />
								{loaderText ? loaderText : defaultLoaderText}
							</Fragment>
						) : (
							<Fragment>{children}</Fragment>
						)}
						{status && <span className={statusStyle}></span>}
					</a>
				)
			if (as === 'link')
				return (
					<Link to={btnLink} onClick={handleClick} className={styles} {...props}>
						<Fragment>{children}</Fragment>
					</Link>
				)

			return (
				<button
					type={btnType}
					onClick={handleClick}
					className={styles}
					{...props}
					disabled={loader || disanled}
				>
					{loader ? (
						<Fragment>
							<Spinner variants="border" size="sm" />
							{loaderText ? loaderText : defaultLoaderText}
						</Fragment>
					) : (
						<Fragment>{children}</Fragment>
					)}
					{status && <span className={statusStyle}></span>}
				</button>
			)
		}
	)
)
export default Button
