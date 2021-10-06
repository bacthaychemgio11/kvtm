import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import styles from '../Styles/CollapseMenu.module.css';
import { UserContext } from '../../../Game';

function ToolsInsideContent(props) {
    const userCtx = useContext(UserContext);

    const style = useMemo(() => {
        return {
            backgroundImage: `url(${props.info.url})`,
            backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
        };
    }, [props.info.url])

    useEffect(() => {
        if (props.info.quantity <= 0) {
            userCtx.setPickedTools(null);
            props.click(null);
        }
    }, [props.info.quantity])

    const handleClick = useCallback(
        () => {
            if (!props.picked) {
                userCtx.setPickedTools(props.info.type);
                props.click(props.info.id);
            }
            else {
                userCtx.setPickedTools(null);
                props.click(null);
            }
        }, [props.picked, props.info, userCtx])

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

export default React.memo(ToolsInsideContent)
