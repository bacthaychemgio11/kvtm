import React, { useEffect } from 'react';
import styles from "../Styles/HarvestAnimation.module.css";
import { HARVEST_ANIMATION_TIME, DISABLE_HAVEST } from '../Dispatch/type'
import {
    StarFilled,
    DollarCircleFilled
} from '@ant-design/icons';

function HarvestAnimation(props) {
    useEffect(() => {
        if (props.show) {
            setTimeout(() => {
                props.setStatus({ type: DISABLE_HAVEST });
            }, +HARVEST_ANIMATION_TIME * 1000);
        }
    }, [props.show])

    return (
        <div className={`${styles.harvestGain} ${props.show ? styles.activeGainExp : ''}`}>
            <div style={{ color: "blue", fontSize: '0.8rem', fontWeight: '600' }}>{props.value.exp} <StarFilled /></div>
            <div style={{ color: "#CFB53B", fontSize: '0.8rem', fontWeight: '600' }}>{props.value.money} <DollarCircleFilled /></div>
        </div >
    )
}

export default React.memo(HarvestAnimation)
