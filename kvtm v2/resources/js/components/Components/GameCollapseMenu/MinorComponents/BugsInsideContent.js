import React, { useMemo } from 'react'
import styles from '../Styles/CollapseMenu.module.css'

function BugsInsideContent(props) {
    const style = useMemo(() => {
        return {
            backgroundImage: `url(${props.info.url})`,
            backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
        };
    }, [props.info.url])

    if (+props.quantity > 0) {
        return (
            <div style={style} className={styles.item}>
                <div className={styles.quantity}>
                    {props.quantity}
                </div>
            </div>
        )
    }
    else {
        return <></>;
    }
}

export default React.memo(BugsInsideContent)
