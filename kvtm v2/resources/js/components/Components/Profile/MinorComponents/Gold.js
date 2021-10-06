import React from 'react'
import styles from '../Styles/Profile.module.css';

function Gold(props) {
    return (
        <div className={`${styles.gold} ${styles.bar}`}>
            <div className={`${styles.goldText}`}>
                {props.gold}
            </div>
        </div>
    )
}

export default React.memo(Gold)
