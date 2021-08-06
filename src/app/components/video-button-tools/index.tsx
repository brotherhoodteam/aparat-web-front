import Button from 'app/elements/button'
import ROUTES from 'core/router/routes'
import { BaseComponent } from 'lib/types/component'
import React, { useState } from 'react'
import Tooltip from '../tooltip'

interface VideoButtonToolsProps extends BaseComponent<HTMLDivElement> {
	slug: string
}

const VideoButtonTools: React.FC<VideoButtonToolsProps> = props => {
	const { slug, className, children, ...attr } = props
	const [editIsHover, setEditIsHover] = useState<boolean>(false)
	const [viewIsHover, setViewIsHover] = useState<boolean>(false)

	return (
		<div className={className} {...attr}>
			<span className="d-block text-cap mb-2"> دسترسی سریع</span>
			<div className="d-flex">
				<Button
					color="secondary"
					variant="soft"
					classNames="me-2"
					circle
					icon
					to={{
						pathname: ROUTES.DASHBOARD.EDIT_VIDEO(slug).link
					}}
					onMouseEnter={event => {
						setEditIsHover(true)
					}}
					onMouseLeave={event => {
						setEditIsHover(false)
					}}
				>
					<Tooltip show={editIsHover} text={'ویرایش ویدئو'} />
					<i className="tio tio-edit"></i>
				</Button>
				<Button
					color="success"
					variant="soft"
					circle
					icon
					to={{
						pathname: ROUTES.VIDEO.SINGLE(slug).link
					}}
					onMouseEnter={event => {
						setViewIsHover(true)
					}}
					onMouseLeave={event => {
						setViewIsHover(false)
					}}
				>
					<Tooltip show={viewIsHover} text={'مشاهده ویدئو'} />
					<i className="tio tio-open-in-new"></i>
				</Button>
			</div>
		</div>
	)
}

export default VideoButtonTools
