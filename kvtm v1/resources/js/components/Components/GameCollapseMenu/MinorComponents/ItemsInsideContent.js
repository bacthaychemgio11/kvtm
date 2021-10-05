import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import styles from '../Styles/CollapseMenu.module.css';
import { FlowerContext } from '../../../Game';
import { flowers } from '../../../Data';

function ItemsInsideContent(props) {
    const flowerCtx = useContext(FlowerContext);

    const style = useMemo(() => {
        return {
            backgroundImage: `url(${props.info.seedImg})`,
            backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
        };
    }, [props.info.seedImg])

    useEffect(() => {
        if (props.info.quantity <= 0) {
            flowerCtx.setPickedFlower(null);
            props.click(null);
        }
    }, [props.info.quantity])

    const handleClick = useCallback(
        () => {
            if (!props.picked) {
                flowerCtx.setPickedFlower(flowers.find(ele => ele.id == props.info.id));
                props.click(props.info.id);
            }
            else {
                flowerCtx.setPickedFlower(null);
                props.click(null);
            }
        }, [props.picked, props.info, flowerCtx])

    if (props.info.quantity > 0) {
        return (
            <div onClick={handleClick} style={style} className={`${styles.item} ${props.picked ? styles.picked : ''}`}>
                <div className={styles.quantity}>
                    {props.info.quantity}
                </div>
            </div>
        )
    }
    else {
        return <></>;
    }
}

export default React.memo(ItemsInsideContent)
