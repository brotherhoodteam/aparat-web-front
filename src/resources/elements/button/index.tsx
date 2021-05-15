import { Fragment } from 'react'
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
	size?: 'xs ' | 'sm' | 'md' | 'lg'
	block?: boolean
	loader?: boolean
	loaderText?: string
	disanled?: boolean
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
	...props
}) => {
	const baseClass = 'btn'
	const variantAndColor = `${baseClass}${
		variant === 'solid' ? '' : '-' + variant
	}-${color}`
	const defaultVariantAndColor = `${baseClass}-${color}`
	const btnSize = `${baseClass}-${size}`
	const btnBlock = `${baseClass}-block`
	const btnType = type ? type : 'button'
	const styles = useClass({
		defaultClass: baseClass,
		optionalClass: {
			[defaultVariantAndColor]: !variant && color,
			[variantAndColor]: variant && color,
			[btnSize]: size,
			[btnBlock]: block
		},
		otherClass: classNames
	})
	const defaultLoaderText = 'لطفا صبر کنید'

	if (as === 'a')
		return (
			<a href={href} className={styles} {...props}>
				{loader ? (
					<Fragment>
						<Spinner variants="border" size="sm" />
						{loaderText ? loaderText : defaultLoaderText}
					</Fragment>
				) : (
					<Fragment>{children}</Fragment>
				)}
			</a>
		)
	return (
		<button type={btnType} className={styles} {...props} disabled={loader || disanled}>
			{loader ? (
				<Fragment>
					<Spinner variants="border" size="sm" />
					{loaderText ? loaderText : defaultLoaderText}
				</Fragment>
			) : (
				<Fragment>{children}</Fragment>
			)}
		</button>
	)
}

export default Button
