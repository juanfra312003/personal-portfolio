import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { MdFullscreen } from 'react-icons/md';

const formatTime = time => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};

export const VideoControls = ({
	progress,
	duration,
	isPlaying,
	volume,
	playbackRate,
	isFullscreen,
	togglePlay,
	handleVolumeChange,
	handlePlaybackRateChange,
	toggleFullScreen,
	handleProgressChange,
}) => {
	return (
		<div
			className={`absolute bottom-0 left-0 w-full p-2 sm:p-4 flex items-center bg-black bg-opacity-75 ${
				isPlaying ? 'hidden group-hover:flex' : ''
			}`}
		>
			{/* Mobile Layout */}
			<div className='flex sm:hidden flex-col gap-2 w-full'>
				{/* Progress bar row */}
				<div className='flex items-center gap-2 w-full'>
					<span className='text-white text-xs'>
						{formatTime(progress)}
					</span>
					<div className='relative flex-1 h-1.5 bg-gray-600 rounded-full'>
						<input
							type='range'
							className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
							min='0'
							max={duration}
							step={1}
							value={progress}
							onChange={handleProgressChange}
						/>
						<div
							className='absolute top-0 left-0 h-full bg-blue-500 rounded-full'
							style={{ width: `${(progress / duration) * 100}%` }}
						></div>
					</div>
					<span className='text-white text-xs'>
						{formatTime(duration)}
					</span>
				</div>
				{/* Controls row */}
				<div className='flex items-center justify-between w-full'>
					<button
						className='text-white focus:outline-none'
						onClick={togglePlay}
					>
						{isPlaying ? (
							<BsPauseFill size={20} />
						) : (
							<BsFillPlayFill size={20} />
						)}
					</button>
					<div className='flex items-center gap-2'>
						<input
							type='range'
							className='w-12 h-1.5 bg-gray-600 rounded-full'
							min={0}
							max={1}
							step={0.1}
							value={volume}
							onChange={handleVolumeChange}
						/>
						<select
							className='bg-black text-white text-xs px-1 py-0.5 rounded-md focus:outline-none'
							value={playbackRate}
							onChange={handlePlaybackRateChange}
						>
							<option value='0.5'>0.5x</option>
							<option value='1'>1x</option>
							<option value='1.5'>1.5x</option>
							<option value='2'>2x</option>
						</select>
						<button
							className='text-white focus:outline-none'
							onClick={toggleFullScreen}
						>
							<MdFullscreen size={20} />
						</button>
					</div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className='hidden sm:flex items-center justify-between gap-3 w-full'>
				<button
					className='text-white focus:outline-none'
					onClick={togglePlay}
				>
					{isPlaying ? (
						<BsPauseFill size={24} />
					) : (
						<BsFillPlayFill size={24} />
					)}
				</button>

				<div className='flex items-center flex-1'>
					<span className='text-white mr-2 text-sm'>
						{formatTime(progress)}
					</span>
					<div className='relative flex-1 max-w-xs lg:max-w-md h-1.5 bg-gray-600 rounded-full mr-2'>
						<input
							type='range'
							className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
							min='0'
							max={duration}
							step={1}
							value={progress}
							onChange={handleProgressChange}
						/>
						<div
							className='absolute top-0 left-0 h-full bg-blue-500 rounded-full'
							style={{ width: `${(progress / duration) * 100}%` }}
						></div>
					</div>
					<span className='text-white mr-2 text-sm'>
						{formatTime(duration)}
					</span>
				</div>

				<div className='flex items-center'>
					<input
						type='range'
						className='w-16 h-1.5 bg-gray-600 rounded-full mr-2'
						min={0}
						max={1}
						step={0.1}
						value={volume}
						onChange={handleVolumeChange}
					/>
					<select
						className='bg-black text-white px-2 py-1 rounded-md focus:outline-none text-sm'
						value={playbackRate}
						onChange={handlePlaybackRateChange}
					>
						<option value='0.5'>0.5x</option>
						<option value='1'>1x</option>
						<option value='1.5'>1.5x</option>
						<option value='2'>2x</option>
					</select>
				</div>

				<button
					className='text-white focus:outline-none'
					onClick={toggleFullScreen}
				>
					<MdFullscreen size={24} />
				</button>
			</div>
		</div>
	);
};