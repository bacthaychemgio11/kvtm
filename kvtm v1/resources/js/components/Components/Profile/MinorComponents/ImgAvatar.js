import React from 'react';
import styles from '../Styles/Profile.module.css'

function ImgAvatar(props) {
    return (
        <React.Fragment>
            <div className={styles.avatar}>
                <div className={styles.levelText}>
                    {`Level ${props.level}`}
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ImgAvatar)
