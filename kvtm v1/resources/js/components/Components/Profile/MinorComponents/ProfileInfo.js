import React, { useContext } from 'react';
import styles from '../Styles/Profile.module.css';
import ImgAvatar from './ImgAvatar';
import Name from './Name';
import { UserContext } from '../../../Game';
import Gold from './Gold';
import ExpBar from './ExpBar';

function ProfileInfo() {
    const userCtx = useContext(UserContext);

    return (
        <React.Fragment>
            <div className={styles.profile}>
                <ImgAvatar level={userCtx.userData.data.level} />
                <div className={styles.wrap}>
                    <Name name={userCtx.userData.data.name} />
                    <Gold gold={userCtx.userData.data.money} />
                    <ExpBar level={userCtx.userData.data.level} exp={userCtx.userData.data.exp} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ProfileInfo)
