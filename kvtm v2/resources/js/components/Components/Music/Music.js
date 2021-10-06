import React, { useState, useCallback } from 'react'

import ToogleMusic from './MinorComponents/ToogleMusic';

function Music() {
    const [mute, setMute] = useState(false);
    const changeStatus = useCallback(() => { setMute(!mute) }, [mute])

    if (!mute) {
        return (
            <React.Fragment>
                <audio autoPlay>
                    <source src="/music/background.mp3" type="audio/mpeg" />
                </audio>
                <ToogleMusic mute={mute} changeStatus={changeStatus} />
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <ToogleMusic mute={mute} changeStatus={changeStatus} />
            </React.Fragment>
        )
    }
}

export default Music
