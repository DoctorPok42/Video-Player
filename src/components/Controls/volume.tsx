import { useState } from 'react';
import styles from './index.module.scss'

interface VolumeProps {
    volume: number
    setVolume: (volume: number) => void
    setIsMuted: (isMuted: boolean) => void
}

const Volume = ({ volume, setVolume, setIsMuted}: VolumeProps) => {
    const [hover, setHover] = useState<boolean>(false)

    const handleMute = () => {
        if (volume > 0) {
            setVolume(0)
            setIsMuted(true)
        } else {
            setVolume(100)
            setIsMuted(false)
        }
    }

    return (
        <div className={styles.volumeContainer} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            {hover &&
                <div className={styles.volumeRange}>
                    <input
                        id="range"
                        type="range"
                        min="0"
                        max="100"
                        style={{ '--value': volume }}
                        value={volume}
                        onChange={() => setVolume(event.target.value as unknown as number)}
                    />
                </div>
            }
            <div className={styles.volume}>
                {
                    volume == 0 ?
                        <img width={25} src={`/icons/mute.png`} alt="volume" onClick={() => handleMute()} />
                        :
                        <img width={25} src={`/icons/s${
                            volume <= 33 ?
                                '0'
                            :
                                volume <= 66 ?
                                    '1'
                                :
                                    '2'
                        }.png`} alt="volume" onClick={() => handleMute()} />
                }
            </div>
        </div>
    )
}

export default Volume
