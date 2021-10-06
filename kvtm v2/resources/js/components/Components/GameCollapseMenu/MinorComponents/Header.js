import React, { useMemo } from 'react'
import styles from '../Styles/CollapseMenu.module.css'

function Header(props) {
    const style = useMemo(() => {
        return {
            backgroundImage: `url(${props.icon})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain', backgroundPosition: 'center'
        };
    }, []);

    return (
        <React.Fragment>
            <div onClick={props.onClick} className={styles.header}>
                <div style={style} className={styles.icon} />
                <div className={styles.name}>{props.name}</div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Header)
