import React from 'react';
import styles from '../Styles/Pot.module.css';

function Seeding(props) {
    const style = {
        backgroundImage: `url(${props.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    }
    return (
        < div style={style} className={`${styles.seedDrop} ${props.runSeed ? styles.activeDropSeed : ''}`
        } />
    )
}

export default React.memo(Seeding)
