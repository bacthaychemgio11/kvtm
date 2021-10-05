import React, { useMemo} from 'react';
import styles from '../Styles/Bug.module.css';

function Bug(props) {
    const style = useMemo(() => {
        return { backgroundImage: `url(${props.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' };
    }, [props.url]);

    return (
        <div style={style} className={`${styles.container} ${props.reducer.haveBug ? styles.active : ''}`} />
    )
}

export default React.memo(Bug)

