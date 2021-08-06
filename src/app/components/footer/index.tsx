import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import './styles.scss'

interface FooterProps extends BaseComponent<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'filter',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<span className="text-muted">
							تمامی حقوق این وبسایت متعلق به صاحب سایت میباشد{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
