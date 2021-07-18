import React, { Fragment, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Location, LocationDescriptor } from 'history'

import Spinner from 'app/elements/spinner'
import useClass from 'core/hooks/use-class'
import { ClassName, Colors, Size, Variants } from 'core/interface/component'

import './styles.scss'

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
	to?:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
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
			const btnLink = `${baseClass}-link`
			const styles = useClass({
				defaultClass: baseClass,
				optionalClass: {
					[defaultVariantAndColor]: !variant && color,
					[variantAndColor]: variant && color,
					[btnSize]: size,
					[btnBlock]: block,
					[btnRounded]: circle,
					[btnIcon]: icon,
					[btnLink]: to
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

			if (to)
				return (
					<Link to={to} onClick={handleClick} className={styles} {...props}>
						{loader ? (
							<Fragment>
								<Spinner variants="border" size="sm" />
								{loaderText ? loaderText : defaultLoaderText}
							</Fragment>
						) : (
							<Fragment>{children}</Fragment>
						)}
						{status && <span className={statusStyle}></span>}
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
