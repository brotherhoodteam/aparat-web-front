import ContentLoader from 'react-content-loader'

interface Props {}
const EditVideoLoader: React.FC<Props> = ({}) => {
	return (
		<div className="content-loader">
			<div className="row">
				<div className="col-12 col-md-7 mb-5 mb-md-0">
					<ContentLoader
						rtl
						height={580}
						width="100%"
						className="content-loader content-loader-rtl"
					>
						<rect x="6" y="0" rx="0" ry="0" width="100" height="20" />
						<rect x="6" y="30" rx="0" ry="0" width="100%" height="38" />
						<rect x="6" y="113" rx="0" ry="0" width="100" height="20" />
						<rect x="4" y="143" rx="0" ry="0" width="100%" height="38" />
						<rect x="6" y="226" rx="0" ry="0" width="100" height="20" />
						<rect x="4" y="256" rx="0" ry="0" width="100%" height="100" />
						<rect x="6" y="381" rx="0" ry="0" width="100" height="20" />
						<rect x="4" y="421" rx="0" ry="0" width="100%" height="38" />
						<rect x="6" y="491" rx="0" ry="0" width="100" height="20" />
						<rect x="4" y="531" rx="0" ry="0" width="100%" height="38" />
					</ContentLoader>
				</div>
				<div className="col-12 col-md-5">
					<ContentLoader rtl height="580" width="100%">
						<rect x="16" y="17" rx="0" ry="0" width="100%" height="200" />
						<rect x="16" y="230" rx="0" ry="0" width="100%" height="200" />
						<rect x="16" y="450" rx="0" ry="0" width="100" height="20" />
						<rect x="16" y="480" rx="0" ry="0" width="100%" height="38" />
					</ContentLoader>
				</div>
			</div>
		</div>
	)
}
export default EditVideoLoader
