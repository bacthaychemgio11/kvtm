import React, { useEffect, useMemo } from 'react';
import styles from '../Styles/HarvestTimer.Module.css';
import {
    RUNNING_PROGRESS_BAR, HIDE_PROGRESS_BAR
    , BAR_TIMEOUT_DEFAULT
} from '../Dispatch/type';

function HarvestTimer(props) {
    const milisecond = useMemo(() => +BAR_TIMEOUT_DEFAULT, []);

    useEffect(() => {
        if (props.percent > 0) {
            setTimeout(() => {
                props.setProperties({ type: RUNNING_PROGRESS_BAR })
            }, +milisecond);
        }
        else if (props.percent <= 0) {
            props.setProperties({ type: HIDE_PROGRESS_BAR })
        }
    }, [props.percent, props.show])

    return (
        <div className={`${styles.container} ${props.show ? styles.active : ''}`}>
            <div style={{ width: `${props.percent}%` }} className={styles.bar} />
            <div className={styles.icon} />
        </div>
    )
}

export default React.memo(HarvestTimer)
