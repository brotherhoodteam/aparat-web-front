import { useRef, useState } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { ClassName } from 'core/interface/component'
import PlayerController from './player-controller'
import BaseReactPlayer from 'react-player/base'
import './styles.scss'

interface Props {
	className?: ClassName
	banner?: string
	url: string
	title: string
}
const VideoPlayer: React.FC<Props> = props => {
	const { title, url } = props
	const [state, setState] = useState({
		playing: false,
		muted: false,
		played: 0,
		volume: 0.5,
		seeking: false,
		playedSeconds: 0,
		loaded: 0,
		loadedSeconds: 0
	})
	const { playing, muted, played, volume, seeking } = state

	const handleFullscreen = useFullScreenHandle()

	const playerRef = useRef<BaseReactPlayer<ReactPlayerProps>>(null)

	const handlePlayPause = () => {
		setState(cur => ({ ...cur, playing: !cur.playing }))
	}

	const hanedleFastForward = () => {
		if (playerRef.current) {
			playerRef.current.seekTo(playerRef.current.getCurrentTime() + 2)
		}
	}

	const hanedleRewind = () => {
		if (playerRef.current) {
			playerRef.current.seekTo(playerRef.current.getCurrentTime() - 2)
		}
	}

	const handleChangeSeek = (value: number) => {
		setState(cur => ({ ...cur, played: Number((value / 100).toFixed(2)) }))
	}

	const handleSeekMouseDown = (value: number) => {
		setState(cur => ({ ...cur, seeking: true }))
	}

	const handleSeekMouseUp = (value: number) => {
		setState(cur => ({ ...cur, seeking: false }))
		if (playerRef.current) {
			playerRef.current.seekTo(Number((value / 100).toFixed(2)))
		}
	}

	const handleProgress = (value: {
		played: number
		playedSeconds: number
		loaded: number
		loadedSeconds: number
	}) => {
		if (playing) {
			if (!seeking) {
				setState({ ...state, ...value })
			}
		}
	}

	const toggleVolume = () => {
		setState(cur => ({
			...cur,
			muted: !cur.muted,
			volume: cur.muted && cur.volume === 0 ? 0.5 : volume
		}))
	}

	const handleChangeVolume = (value: number) => {
		setState({ ...state, volume: Number((value / 100).toFixed(1)) })
	}

	const handleVolumeSeekUp = (value: number) => {
		setState({
			...state,
			volume: Number((value / 100).toFixed(1)),
			muted: Number((value / 100).toFixed(1)) === 0
		})
	}

	const handleEnded = () => {
		setState({
			...state,
			playing: false,
			played: 0
		})
	}
	const handleStart = () => {
		setState({
			...state,
			playing: true,
			played: 0
		})
	}

	const handleReadyPlayer = (player: ReactPlayer) => {
		console.log('player', player)
	}

	return (
		<div className="player">
			<div className="acsept-16-9">
				<div className="player-container">
					{/* VIDEO BANNER */}

					{/* <div className="player-banner">
							<LazyLoadImage src="https://static.cdn.asset.aparat.com/avt/35640198-7473-b.jpg" />

							<span
								className="video-player-btn video-player-centered text-center"
								onClick={handlePlayPause}
							>
								<span className="video-player-icon mb-2">
									<i className="fa fa-play"></i>
								</span>
								<span className="d-block text-center text-white">نمایش ویدئو</span>
							</span>
						</div> */}

					{/* END VIDEO BANNER  */}

					{/* VIDEO PLAYER */}
					<FullScreen handle={handleFullscreen}>
						<div className="video-player">
							<ReactPlayer
								ref={playerRef}
								width="100%"
								height="100%"
								url={url}
								light={false}
								onReady={handleReadyPlayer}
								// url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
								playing={playing}
								volume={volume}
								muted={muted}
								onProgress={handleProgress}
								onStart={handleStart}
								onEnded={handleEnded}
							></ReactPlayer>
							<PlayerController
								title={title}
								playing={playing}
								muted={muted}
								played={played}
								onPlayPaused={handlePlayPause}
								onFastForward={hanedleFastForward}
								onRewind={hanedleRewind}
								onSeek={handleChangeSeek}
								onSeekMouseDown={handleSeekMouseDown}
								onSeekMouseUp={handleSeekMouseUp}
								onFullscreen={handleFullscreen}
								onToggleVolume={toggleVolume}
								volume={volume}
								onVolumeChange={handleChangeVolume}
								onVolumeSeekUp={handleVolumeSeekUp}
							/>
						</div>
					</FullScreen>
					{/*  */}
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer