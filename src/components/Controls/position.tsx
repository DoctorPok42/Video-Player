import styles from './index.module.scss'

interface PositionProps {
    displayPosition: boolean
    cursorPosition: number
    duration: number
}

const Position = ({ displayPosition, cursorPosition, duration }: PositionProps) => {
    return (
        <>
            {displayPosition &&
                <div className={styles.position} style={{
                    left: `${
                        cursorPosition - 1.5
                    }%`
                }}>
                    <span>{((duration / 100 * cursorPosition) / 100).toFixed(2)}</span>
                    <p></p>
                </div>
            }
        </>
    )
}

export default Position