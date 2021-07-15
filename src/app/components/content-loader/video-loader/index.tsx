import ContentLoader from 'react-content-loader'

interface Props {
	length: number
	size: string
}
const videoLoader: React.FC<Props> = ({ length, size }) => {
	return (
		<div className="content-loader">
			<div className="row">
				{Array(length - 1)
					.fill('')
					.map((_, inx) => (
						<div className={size} key={inx}>
							<ContentLoader
								rtl
								height={280}
								width="100%"
								className="content-loader content-loader-rtl"
							>
								<rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
								<circle cx="35" cy="248" r="20" />
								<rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
								<rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
							</ContentLoader>
						</div>
					))}
			</div>
		</div>
	)
}
export default videoLoader
