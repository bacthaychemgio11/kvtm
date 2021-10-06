import React, { useContext, useMemo, useRef, useCallback, useState } from 'react'
import { BUY_ITEMS, TYPE_TOOLS } from '../../../Dispatch/type'
import styles from '../Styles/Shop.module.css'
import { UserContext } from '../../../Game';
import { INCREASE_QUANTITY_ITEM_TOOL } from '../../GameCollapseMenu/Dispatch/type';

function Tools(props) {
    const userCtx = useContext(UserContext);
    const [quantity, setQuantity] = useState(1)
    const number = useRef(null);

    const imgStyle = useMemo(() => {
        return {
            backgroundImage: `url(${props.type == TYPE_TOOLS ? props.data.url : ''})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }
    }, [])

    const changeQuantity = useCallback((value) => {
        setQuantity(value);
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

    const buyItems = useCallback(() => {
        let goldLoss = props.data.cost * (+quantity);

        if ((+goldLoss) > (+userCtx.userData.data.money)) {
            alert('Not enough money');
        }
        else {
            // Trừ tiền
            userCtx.dispatchUserData({ type: BUY_ITEMS, gold: goldLoss })
            // Tăng số lượng item trong kho
            userCtx.dispatchToolsStorage({ type: INCREASE_QUANTITY_ITEM_TOOL, itemType: props.data.type, quantity: quantity });
        }
    }, [quantity])

    return (
        <React.Fragment>
            <div className={styles.itemContainer}>
                <div style={imgStyle} className={styles.img} />
                <div className={styles.name}>{props.data.name}</div>
                <div className={styles.toolsDescription}>{props.data.description}</div>

                <div onClick={buyItems} className={styles.buyButton}>
                    {props.data.cost * (+quantity)}$
                </div>

                <input onBlur={handleBlur} onChange={handleChange} ref={number} className={styles.quantity}
                    min="1" max="10" step="1" type="number" name="quantity" defaultValue="1" />
            </div>
        </React.Fragment>
    )
}

export default React.memo(Tools)
