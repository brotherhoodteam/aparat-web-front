import React, { Fragment, MouseEvent, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Location, LocationDescriptor } from 'history'

import Spinner from 'app/elements/spinner'
import useClassName from 'lib/hooks/use-class'
import { ClassName, Colors, Size, Variants } from 'lib/types/component'

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
	onMouseEnter?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
	onMouseLeave?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = React.memo(
	React.memo(props => {
		const {
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
			to,
			onClick,
			onMouseEnter,
			onMouseLeave,
			...attr
		} = props
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

		const computedClassName = useClassName({
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
			appendClassName: classNames
		})

		const statusStyle = useClassName({
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

		const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
			if (disanled || loader) return
			onMouseEnter && onMouseEnter(e)
		}

		const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
			if (disanled || loader) return
			onMouseLeave && onMouseLeave(e)
		}

		if (to)
			return (
				<Link
					to={to}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={computedClassName}
					{...attr}
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
				</Link>
			)

		return (
			<button
				type={btnType}
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={computedClassName}
				{...attr}
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
	})
)
export default Button
