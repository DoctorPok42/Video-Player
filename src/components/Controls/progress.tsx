import Position from "./position"

interface ProgressProps {
    displayPosition: boolean
    cursorPosition: number
    duration: number
    progress: number
    handleChangeProgress: () => void
    handleTest: () => void
    setDisplayPosition: (displayPosition: boolean) => void
}

const Progress = ({displayPosition, cursorPosition, duration, progress, handleChangeProgress, handleTest, setDisplayPosition}: ProgressProps) => {
    return (
        <>
            <Position displayPosition={displayPosition} cursorPosition={cursorPosition} duration={duration} />
            <progress
                id="progress"
                value={progress}
                max={100}
                onClick={() => handleChangeProgress()}
                onMouseMove={() => handleTest()}
                onMouseOut={() => setDisplayPosition(false)}
            >
              <span id="progress-bar"></span>
            </progress>
        </>
    )
}

export default Progress