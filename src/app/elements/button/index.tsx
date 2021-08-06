import React, { Fragment, MouseEvent } from 'react'
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

		const options = {
			className: 'btn',
			type: type ? type : 'button',
			block: `btn-block`,
			size: `btn-${size}`,
			rounded: `btn-circle`,
			icon: `btn-icon`,
			link: 'btn-link',
			variantAndColor: {
				default: `btn-${color}`,
				color: `btn${variant === 'solid' ? '' : '-' + variant}-${color}`
			},
			status: {
				className: 'btn-status',
				size: `btn-status-${statusSize}`,
				color: `btn-status-${status}`
			},
			loaderText: {
				default: 'لطفا صبر کنید'
			}
		}

		const computedClassName = useClassName({
			defaultClass: options.className,
			optionalClass: {
				[options.variantAndColor.default]: !variant && color,
				[options.variantAndColor.color]: variant && color,
				[options.size]: size,
				[options.block]: block,
				[options.rounded]: circle,
				[options.icon]: icon,
				[options.link]: to
			},
			appendClassName: classNames
		})

		const statusStyle = useClassName({
			defaultClass: 'btn-status',
			optionalClass: {
				[options.status.color]: status,
				[options.status.size]: statusSize
			}
		})

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
							{loaderText ? loaderText : options.loaderText.default}
						</Fragment>
					) : (
						<Fragment>{children}</Fragment>
					)}
					{status && <span className={statusStyle}></span>}
				</Link>
			)

		return (
			<button
				type={options.type}
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={computedClassName}
				disabled={loader || disanled}
				{...attr}
			>
				{loader ? (
					<Fragment>
						<Spinner variants="border" size="sm" />
						{loaderText ? loaderText : options.loaderText.default}
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
