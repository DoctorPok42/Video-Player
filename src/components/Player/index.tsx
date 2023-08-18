import { useState } from 'react'
import { Controls } from '@/components'
import styles from './index.module.scss'

interface PlayerProps {
    src: string
    width?: number
    height?: number
    style?: React.CSSProperties
    controls?: boolean
    muted?: boolean
    preload?: 'auto' | 'metadata' | 'none'
}

const Player = ({
    src,
    width = 600,
    height = 340,
    style = {},
    controls = true,
    muted = false,
    preload = 'auto',
}: PlayerProps) => {
    const [progress, setProgress] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [play, setPlay] = useState<boolean>(false)
    const [showControls, setShowControls] = useState<boolean>(false)

    const handleDuration = (e: any) => {
        setProgress(e.currentTarget.currentTime / e.currentTarget.duration * 100)
        setCurrentTime(e.currentTarget.currentTime)
        setDuration(e.currentTarget.duration)
    }

    return (
        <div className={styles.player} style={{
            width: width,
            height: height,
        }}
            onMouseOver={() => setShowControls(true)}
            onMouseOut={() => setShowControls(false)}
        >
            <video
                style={{ width, height, ...style }}
                className={styles.mediaVideo}
                id='media-video'
                src={src}
                controls={false}
                muted={muted}
                preload={preload}
                onEnded={() => setPlay(false)}
                onTimeUpdate={(e) => handleDuration(e)}
            />
                {controls && (
                    <Controls
                        progress={progress}
                        setProgress={setProgress}
                        currentTime={currentTime}
                        duration={duration}
                        play={play}
                        setPlay={setPlay}
                        style={{ top: height - (
                            showControls ? 35 : 6.5
                        ) }}
                    />
                )}
        </div>
    )
}

export default Player