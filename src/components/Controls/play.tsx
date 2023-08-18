interface PlayPauseProps {
    play: boolean
    handlePlay: () => void
}

const PlayPause = ({ play, handlePlay }: PlayPauseProps) => {
    return (
        <button id="playpause" type="button" onClick={() => handlePlay()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none">
                {play == false ?
                    <path fill-rule="" clip-rule="evenodd" d="M3 5.49686C3 3.17662 5.52116 1.73465 7.52106 2.91106L18.5764 9.41423C20.5484 10.5742 20.5484 13.4259 18.5764 14.5858L7.52106 21.089C5.52116 22.2654 3 20.8234 3 18.5032V5.49686Z" fill="var(--grey)"/>
                    :
                    (
                        <>
                            <rect x="4" y="5" width="6" height="16" rx="2" fill="var(--grey)"/>
                            <rect x="12" y="5" width="6" height="16" rx="2" fill="var(--grey)"/>
                        </>
                    )
                }
            </svg>
        </button>
    )
}

export default PlayPause