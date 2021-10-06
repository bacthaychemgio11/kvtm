import React, { useContext, useMemo, useRef, useCallback, useState } from 'react'
import { BUY_ITEMS, TYPE_SEEDS } from '../../../Dispatch/type'
import styles from '../Styles/Shop.module.css'
import { UserContext } from '../../../Game';
import { DollarCircleFilled, StarFilled } from '@ant-design/icons';
import { bugs } from '../../../Data';
import { INCREASE_SEED } from '../../GameCollapseMenu/Dispatch/type';

function Items(props) {
    const userCtx = useContext(UserContext);
    const [quantity, setQuantity] = useState(1)
    const number = useRef(null);

    const imgStyle = useMemo(() => {
        return {
            backgroundImage: `url(${props.type == TYPE_SEEDS ? props.data.seedImg : ''})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }
    }, [])

    const changeQuantity = useCallback((value) => {
        setQuantity(value);
    }, [])

    const bugStyle = useMemo(() => {
        return {
            backgroundImage: `url(${bugs.find(ele => ele.id == props.data.id_bug).bugImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }
    }, [])

    const handleChange = useCallback(() => {
        if (number.current.value == '') {
            changeQuantity(1);
        }
        else {
            if (number.current.value > 10) {
                number.current.value = 10
            }
            else if (number.current.value < 1) {
                number.current.value = 1;
            }
            changeQuantity(number.current.value);
        }
    }, [])

    const handleBlur = useCallback(() => {
        if (number.current.value == '') {
            number.current.value = 1
        }
    }, [])

    const buySeeds = useCallback(() => {
        if (userCtx.userData.data.level < props.data.levelRequire) {
            alert('Your level is lower than requirement.')
        }
        else {
            let goldLoss = props.data.cost * (+quantity);

            if ((+goldLoss) > (+userCtx.userData.data.money)) {
                alert('Not enough money');
            }
            else {
                userCtx.dispatchUserData({ type: BUY_ITEMS, gold: goldLoss })
                userCtx.dispatchSeedsStorge({ type: INCREASE_SEED, id: props.data.id, quantity: quantity });
            }
        }
    }, [quantity])

    return (
        <React.Fragment>
            <div className={styles.itemContainer}>
                <div style={imgStyle} className={styles.img} />
                <div className={styles.name}>{props.data.name}</div>
                <div className={`${styles.minorInfo} ${styles.moneyGain}`}>{props.data.moneyGain} <DollarCircleFilled /></div>
                <div className={`${styles.minorInfo} ${styles.expGain}`}>{props.data.expGain} <StarFilled /></div>
                <div style={bugStyle} className={`${styles.bug}`}></div>
                <div className={`${styles.timeInfo} ${styles.growTime}`}>Grow : {props.data.timeGrowingStage}s</div>
                <div className={`${styles.timeInfo} ${styles.developeTime}`}>Develope : {props.data.timeDevelopingStage}s</div>

                <div onClick={buySeeds} className={styles.buyButton}>
                    {userCtx.userData.data.level < props.data.levelRequire
                        ? `Level ${props.data.levelRequire}` : `${props.data.cost * (+quantity)} $`}
                </div>
                {
                    userCtx.userData.data.level >= props.data.levelRequire
                        ? <input onBlur={handleBlur} onChange={handleChange} ref={number} className={styles.quantity}
                            min="1" max="10" step="1" type="number" name="quantity" defaultValue="1" />
                        : null
                }
            </div>
        </React.Fragment>
    )
}

export default React.memo(Items)
