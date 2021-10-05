import React, { useState, useCallback, useContext, useMemo, useEffect } from 'react'
import styles from '../Styles/Profile.module.css';
import { expPerLevel } from '../../../Data';
import { calculatePercent } from '../Helper/CalculateExpPercent';
import { UserContext } from '../../../Game';
import { LEVEL_UP } from '../../../Dispatch/type';

function ExpBar(props) {
    const UserCtx = useContext(UserContext)

    const calculateFunc = useCallback(() => {
        return calculatePercent(props.exp, expPerLevel.find(ele => ele.id == props.level).expRequired)
    }, [props.exp, props.level]);

    const percent = useMemo(() => calculateFunc(), [props.exp]);

    // Level Up
    useEffect(() => {
        if (percent >= 100) {
            UserCtx.dispatchUserData({ type: LEVEL_UP, exp: props.exp })
        }
    }, [props.exp])

    return (
        <div className={`${styles.exp} ${styles.bar}`}>
            <div className={styles.expPercent}>
                {`${percent}%`}
            </div>
        </div>
    )
}

export default React.memo(ExpBar)
