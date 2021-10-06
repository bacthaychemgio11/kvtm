import React, { useEffect, useCallback } from 'react';
import styles from '../Styles/Pot.module.css';
import { DEFAULT_SECOND, COUNTING_TIMER } from '../Dispatch/type';
import { changeSeconds } from '../Helper/ChangeSeconds';

function CountDownTimer(props) {
    const clock = useCallback(changeSeconds, []);

    let time = +props.reducer.seconds;

    // ĐẾM NGƯỢC (HỖ TRỢ QUAN SÁT TRONG THỜI GIAN TRỒNG CÂY)
    useEffect(() => {
        if (props.reducer.active && time > 0) {
            setTimeout(() => {
                --time;
                props.dispatch({ type: COUNTING_TIMER, seconds: time });
            }, 1000);
        }
    }, [props.reducer.seconds, props.reducer.active])

    return (
        <div className={styles.countdownTimer}>
            {props.reducer.active ? clock(props.reducer.seconds) : clock(DEFAULT_SECOND)}
        </div>
    )
}

export default React.memo(CountDownTimer)
