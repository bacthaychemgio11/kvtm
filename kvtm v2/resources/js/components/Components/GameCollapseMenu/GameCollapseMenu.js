import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles/CollapseMenu.module.css';
import { collapseMenu } from '../../Data';
import Item from './MinorComponents/Item';

const ContainerMenu = (props) => {
    return (
        <div className={styles.container}>
            {
                props.menuHeaders.map((item) => {
                    return (
                        <Item data={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

function GameCollapseMenu() {
    const menuHeaders = useMemo(() => collapseMenu, []);
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<ContainerMenu menuHeaders={menuHeaders}></ContainerMenu>, document.getElementById('collapse'))
            }
        </React.Fragment>
    )
}

export default React.memo(GameCollapseMenu)
