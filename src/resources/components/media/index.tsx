import Avatar from '../../elements/avatar'
import './styles.scss'

interface Props {
	image: string
	alt: string
	title: string
	desc: string
}
const Media: React.FC<Props> = ({ image, alt, title, desc }) => {
	return (
		<div className="media align-items-center">
			<Avatar image={image} alt={alt} size="sm" circle className="me-2" />
			<div className="media-body">
				<span className="media-title h5">{title}</span>
				<span className="media-text">{desc}</span>
			</div>
		</div>
	)
}

export default Media
