import { useEffect, useState } from "react"
import styles from "./index.module.scss"

const Fullscreen = () => {
    const [fullScreen, setFullScreen] = useState<boolean>(false)

    const handleFullScreen = () => {
        if (fullScreen) {
            document.exitFullscreen()
            setFullScreen(false)
        } else {
            const video = document.getElementById('media-video') as HTMLVideoElement
            video.requestFullscreen()
            video.controls = false
            setFullScreen(true)
        }
    }

    return (
        <button id={styles.fs} type="button" onClick={() => handleFullScreen()}>
            <img width={25} src={`/icons/${
                fullScreen == false ?
                    'fullscreen'
                :
                    'fullscreen-exit'
            }.png`} alt="fullscreen" />
        </button>
    )
}

export default Fullscreen;
