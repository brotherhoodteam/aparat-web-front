import { Fragment, MouseEventHandler } from 'react'
import useClass from '../../../hooks/use-class'
import { UiColors, UiVariants } from '../../../interface/ui'
import Spinner from '../spinner'

import './styles.scss'

interface Props {
	as?: 'a'
	type?: 'button' | 'submit' | 'reset'
	href?: string | '#'
	variant?: UiVariants
	color?: UiColors
	classNames?: string
	size?: 'xs' | 'sm' | 'md' | 'lg'
	block?: boolean
	loader?: boolean
	loaderText?: string
	disanled?: boolean
	circle?: boolean
	icon?: boolean
	status?: 'danger' | 'success' | 'warning'
	statusSize?: 'xs ' | 'sm' | 'md' | 'lg'
	onClick?: MouseEventHandler
}

const Button: React.FC<Props> = ({
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

	if (as === 'a')
		return (
			<a href={href} onClick={onClick} className={styles} {...props}>
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
	return (
		<button
			type={btnType}
			onClick={onClick}
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

export default Button
