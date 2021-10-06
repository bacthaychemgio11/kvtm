import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../Styles/Music.module.css'

function ToogleMusic(props) {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<div onClick={props.changeStatus}
                    className={`${styles.toogle} ${!props.mute ? styles.on : ''}`} />, document.getElementById('toogleMusic'))
            }
        </React.Fragment>
    )

}

export default React.memo(ToogleMusic)
