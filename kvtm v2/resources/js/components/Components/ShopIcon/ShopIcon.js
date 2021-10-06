import React, { useContext, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles/ShopIcon.module.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Game';

const Shop = () => {
    const UserCtx = useContext(UserContext);
    const [shopStatus, setShopStatus] = useState(false)
    const history = useHistory();

    const changeStatusShop = useCallback(() => {
        if (!shopStatus) {
            history.push(`/play/${UserCtx.userData.data.id}/shop/seeds`)
        }
        else {
            history.push(`/play/${UserCtx.userData.data.id}`)
        }

        setShopStatus(!shopStatus)
    }, [shopStatus])

    return <div onClick={changeStatusShop} className={styles.icon} />
}

function ShopIcon() {

    return (
        <>
            {ReactDOM.createPortal(<Shop />, document.getElementById('shopIcon'))}
        </>
    )
}

export default ShopIcon
