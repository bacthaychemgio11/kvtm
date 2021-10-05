import React, { useCallback, useContext } from 'react'
import styles from '../Styles/Shop.module.css'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../Game';
import { TYPE_SEEDS, TYPE_TOOLS } from '../../../Dispatch/type';

function Tab(props) {
    const UserCtx = useContext(UserContext);
    const history = useHistory();

    const style = {
        backgroundImage: `url(${props.active ? props.data.urlActive : props.data.urlDeactive})`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right'
    }

    const setTab = useCallback((value) => {
        props.setTab(value)
    }, [])

    const handleClick = useCallback(() => {
        // Chuyển trang
        if (!props.active) {
            history.push(`/play/${UserCtx.userData.data.id}/shop/${props.data.path}`)
            setTab(props.data.type)
        }
        else {
            history.push(`/play/${UserCtx.userData.data.id}/shop`)
            setTab(null)
        }

    }, [props.active])

    return (
        <React.Fragment>
            <div onClick={handleClick} style={style} className={styles.tab} />
        </React.Fragment>
    )
}

export default React.memo(Tab)
