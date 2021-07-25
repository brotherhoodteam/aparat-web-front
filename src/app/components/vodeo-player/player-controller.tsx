import {
	FastForwardIcon,
	FullScreenIcon,
	MinimizeIcon,
	PauseIcon,
	PlayIcon,
	RewindIcon,
	VolumeDownIcon,
	VolumeUpIcon
} from 'app/elements/icons'
import { FullScreenHandle } from 'react-full-screen'
import ReactSlider from 'react-slider'
import './styles.scss'

interface Props {
	playing: boolean
	title: string
	muted: boolean
	played: number
	onPlayPaused: () => void
	onToggleVolume: () => void
	onFastForward: () => void
	onRewind: () => void
	onFullscreen: FullScreenHandle
	onSeek: (value: number) => void
	onSeekMouseDown: (value: number) => void
	onSeekMouseUp: (value: number) => void
	volume: number
	onVolumeChange: (value: number) => void
	onVolumeSeekUp: (value: number) => void
}
const PlayerController: React.FC<Props> = props => {
	const {
		title,
		playing,
		muted,
		played,
		onPlayPaused,
		onFastForward,
		onRewind,
		onSeek,
		onSeekMouseDown,
		onSeekMouseUp,
		onFullscreen,
		onToggleVolume,
		volume,
		onVolumeChange,
		onVolumeSeekUp
	} = props

	return (
		<div className="video-player-controller">
			{/* TOP CONTROLLER */}
			<div className="video-player-top-controller">
				<h2 className="video-player-title">{title}</h2>
			</div>
			{/* END TOP CONTROLLER */}

			{/* BOTTOM CONTROLLER */}
			<div className="video-player-bottom-controller">
				<div className="video-player-seek-slider">
					<ReactSlider
						min={0}
						max={100}
						value={played * 100}
						className="video-player-seek"
						thumbClassName="video-player-thumb"
						trackClassName="video-player-track"
						onChange={onSeek}
						onBeforeChange={onSeekMouseDown}
						onAfterChange={onSeekMouseUp}
					/>
				</div>
				<div className="d-flex align-items-center justify-content-between">
					{/* RIGHT CONTROLLER */}
					<div className="video-player-bottom-right-controller">
						<div
							className="video-player-control-icon "
							onClick={!onFullscreen.active ? onFullscreen.enter : onFullscreen.exit}
						>
							{!onFullscreen.active ? <FullScreenIcon /> : <MinimizeIcon />}
						</div>
					</div>
					{/* END RIGHT CONTROLLER */}

					{/* LEFT CONTROLLER */}
					<div className="video-player-bottom-left-controller">
						{/* VOLUME SEEK*/}
						<div className="video-player-volume-seek-slider me-2">
							<ReactSlider
								min={0}
								max={100}
								value={volume * 100}
								className="video-player-volume-seek"
								thumbClassName="video-player-volume-thumb"
								trackClassName="video-player-volume-track"
								onChange={onVolumeChange}
								onAfterChange={onVolumeSeekUp}
							/>
						</div>
						{/* END VOLUME SEEK*/}

						{/* MUTED */}
						<div
							className="video-player-control-icon position-relative "
							onClick={onToggleVolume}
						>
							<VolumeUpIcon
								style={{ opacity: !muted ? 1 : 0, transition: 'opacity 100ms' }}
							/>
							<VolumeDownIcon
								style={{ opacity: muted ? 1 : 0, transition: 'opacity 100ms' }}
							/>
						</div>
						{/* END MUTED */}

						{/* PLAY BUTTON */}
						<div className="video-player-control-icon" onClick={onFastForward}>
							<FastForwardIcon />
						</div>
						<div
							className="video-player-control-icon position-relative"
							onClick={onPlayPaused}
						>
							<PlayIcon
								style={{ opacity: !playing ? 1 : 0, transition: 'opacity 100ms' }}
							/>
							<PauseIcon
								style={{ opacity: playing ? 1 : 0, transition: 'opacity 100ms' }}
							/>
						</div>
						<div className="video-player-control-icon" onClick={onRewind}>
							<RewindIcon />
						</div>
						{/* END PLAY BUTTON */}
					</div>
					{/* END LEFT CONTROLLER */}
				</div>
			</div>
			{/* END BOTTOM CONTROLLER */}

			{/* OVERLAY */}
			<div className="video-player-top-gradient"></div>
			<div className="video-player-bottom-gradient"></div>
		</div>
	)
}

export default PlayerController
