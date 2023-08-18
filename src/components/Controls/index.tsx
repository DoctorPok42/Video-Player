import { useEffect, useState } from 'react'
import styles from './index.module.scss'

import Volume from './volume'
// import Fullscreen from './fullscreen'
import PlayPause from './play'
import Progress from './progress'

interface ControlsProps {
    progress: number
    setProgress: (progress: number) => void
    currentTime: number
    duration: number
    play: boolean
    setPlay: (play: boolean) => void
    style?: React.CSSProperties
}

const Controls = ({
    progress,
    setProgress,
    currentTime,
    duration,
    play,
    setPlay,
    style = {},
}: ControlsProps) => {
    const [volume, setVolume] = useState<number>(100)
    const [isMuted, setIsMuted] = useState<boolean>(false)
    const [changeProgress, setChangeProgress] = useState<boolean>(false)
    const [displayPosition, setDisplayPosition] = useState<boolean>(false)
    const [cursorPosition, setCursorPosition] = useState<number>(0)

    const handleTest = () => {
        setDisplayPosition(true)
        setCursorPosition((event.offsetX / event.target.offsetWidth * 100).toFixed(2) as unknown as number)
    }

    const handlePlay = () => {
        const video = document.getElementById('media-video') as HTMLVideoElement
        if (play) {
            video.pause()
            setPlay(false)
        } else {
            video.play()
            setPlay(true)
        }
    }

    useEffect(() => {
        const video = document.getElementById('media-video') as HTMLVideoElement

        if (video) {
            if (isMuted) {
                video.muted = true
            } else {
                video.muted = false
            }
        }
    }, [isMuted])

    useEffect(() => {
        const video = document.getElementById('media-video') as HTMLVideoElement

        if (video) {
            console.log(volume / 100)
            video.volume = volume / 1000
        }
    }, [volume])

    const handleChangeProgress = () => {
        setProgress(
            event.offsetX / event.target.offsetWidth * 100
        )
        setChangeProgress(true)
    }

    useEffect(() => {
        const video = document.getElementById('media-video') as HTMLVideoElement

        if (video) {
            if (changeProgress) {
            video.currentTime = progress / 100 * duration
            setChangeProgress(false)
            }
        }
    }, [changeProgress])

    return (
        <div id="video-controls" className={styles.controls} style={style}>
            <Progress
                displayPosition={displayPosition}
                cursorPosition={cursorPosition}
                duration={duration}
                progress={progress}
                handleChangeProgress={handleChangeProgress}
                handleTest={handleTest}
                setDisplayPosition={setDisplayPosition}
            />
            <PlayPause play={play} handlePlay={handlePlay} />
            <div className={styles.time}>
                <span>{((currentTime / 100).toFixed(2).replace('.', ':'))} / {(duration / 100).toFixed(2).replace('.', ':')}</span>
            </div>
            <Volume volume={volume} setVolume={setVolume} setIsMuted={setIsMuted} />
            {/* <Fullscreen /> */}
        </div>
    )
}

export default Controls