import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImgaePlacehlder from 'static/images/placeholder.png'

interface CardImgTopProps extends BaseComponent<HTMLDivElement> {
	img: string
	alt?: string
}

const CardImgTop: React.FC<CardImgTopProps> = ({
	children,
	className,
	img,
	alt,
	...props
}) => {
	const styles = useClassName({
		defaultClass: 'card-img position-relative',
		appendClassName: className
	})

	return (
		<div className={styles} {...props}>
			<div className="card-img-top">
				<LazyLoadImage
					delayTime={2000}
					placeholderSrc={ImgaePlacehlder}
					effect="blur"
					src={img}
					alt={alt ? alt : ''}
				/>
			</div>
			{children}
		</div>
	)
}

export default CardImgTop
