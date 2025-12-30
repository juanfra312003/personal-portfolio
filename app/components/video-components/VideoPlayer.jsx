import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { VideoControls } from './VideoControls';

export const VideoPlayer = ({ src, isPortrait = false }) => {
	const videoRef = useRef(null);
	const containerRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleTimeUpdate = () => setProgress(video.currentTime);
		const handleLoadedMetadata = () => setDuration(video.duration);
		const handleDurationChange = () => setDuration(video.duration);

		if (video.readyState >= 1) {
			setDuration(video.duration);
		}

		video.addEventListener('timeupdate', handleTimeUpdate);
		video.addEventListener('loadedmetadata', handleLoadedMetadata);
		video.addEventListener('durationchange', handleDurationChange);

		// Escuchar cambios de fullscreen
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

		return () => {
			video.removeEventListener('timeupdate', handleTimeUpdate);
			video.removeEventListener('loadedmetadata', handleLoadedMetadata);
			video.removeEventListener(
				'durationchange',
				handleDurationChange
			);
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
			document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
		};
	}, []);

	const togglePlay = useCallback(() => {
		const video = videoRef.current;

		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	}, []);

	const handleVolumeChange = useCallback(e => {
		const newVolume = e.target.value;

		videoRef.current.volume = newVolume;
		setVolume(newVolume);
	}, []);

	const handlePlaybackRateChange = useCallback(e => {
		const newPlaybackRate = e.target.value;
		videoRef.current.playbackRate = newPlaybackRate;
		setPlaybackRate(newPlaybackRate);
	}, []);

	const toggleFullScreen = useCallback(() => {
		const video = videoRef.current;
		const container = containerRef.current;

		// Detectar si es iOS (Safari en iOS no soporta Fullscreen API estándar)
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

		if (!isFullscreen) {
			if (isIOS && video.webkitEnterFullscreen) {
				// En iOS, usar el fullscreen nativo del video
				video.webkitEnterFullscreen();
			} else if (container.requestFullscreen) {
				container.requestFullscreen();
			} else if (container.webkitRequestFullscreen) {
				container.webkitRequestFullscreen();
			} else if (container.msRequestFullscreen) {
				container.msRequestFullscreen();
			} else if (video.webkitEnterFullscreen) {
				// Fallback para otros dispositivos móviles
				video.webkitEnterFullscreen();
			}
		} else {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			} else if (document.webkitFullscreenElement) {
				document.webkitExitFullscreen();
			} else if (document.msFullscreenElement) {
				document.msExitFullscreen();
			}
		}
	}, [isFullscreen]);

	const handleProgressChange = useCallback(e => {
		const newProgress = e.target.value;
		videoRef.current.currentTime = newProgress;
		setProgress(newProgress);
	}, []);

	return (
		<div 
			ref={containerRef}
			className={`relative border shadow-2xl shadow-black rounded-md overflow-hidden drop-shadow-sm group ${
				isPortrait 
					? 'w-full max-w-[350px] sm:max-w-[400px] aspect-[9/16]' 
					: 'w-full max-w-[900px] aspect-video'
			}`}
		>
			<video
				src={src}
				className='w-full h-full object-cover'
				ref={videoRef}
				onClick={togglePlay}
				playsInline
				webkit-playsinline="true"
			></video>
			<VideoControls
				// State values
				progress={progress}
				duration={duration}
				isPlaying={isPlaying}
				volume={volume}
				playbackRate={playbackRate}
				isFullscreen={isFullscreen}
				// Reproductor functions
				togglePlay={togglePlay}
				handleVolumeChange={handleVolumeChange}
				handlePlaybackRateChange={handlePlaybackRateChange}
				toggleFullScreen={toggleFullScreen}
				handleProgressChange={handleProgressChange}
			/>
		</div>
	);
};