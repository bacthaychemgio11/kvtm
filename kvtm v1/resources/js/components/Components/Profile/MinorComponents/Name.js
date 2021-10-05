import React from 'react'
import styles from '../Styles/Profile.module.css';

function Name(props) {
    return (
        <div className={`${styles.name}`}>
            {props.name}
        </div>
    )
}

export default React.memo(Name)
