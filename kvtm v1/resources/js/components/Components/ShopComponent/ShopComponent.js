import React, { useCallback, useState, useContext } from 'react'
import styles from './Styles/Shop.module.css'
import { tabMenuShop } from '../../Data'
import Tab from './MinorComponents/Tab'
import { Switch, Route } from 'react-router-dom'
import { UserContext } from '../../Game'
import { TYPE_SEEDS, TYPE_TOOLS } from '../../Dispatch/type'
import ItemDisplayArea from './MinorComponents/ItemDisplayArea'

function ShopComponent() {
    const [activeTab, setActiveTab] = useState(TYPE_SEEDS)
    const changeActiveTab = useCallback((value) => {
        setActiveTab(value)
    }, [])
    const userCtx = useContext(UserContext)

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.menuContainer}>
                        <div className={styles.tabContainer}>
                            {
                                tabMenuShop.map(tab => {
                                    return (
                                        <Tab type={TYPE_SEEDS} active={activeTab == tab.type ? true : false} setTab={changeActiveTab} key={tab.id} data={tab} />
                                    )
                                })
                            }
                        </div>

                        {/* PAGES */}
                        <Switch>
                            <Route path={`/play/${userCtx.userData.data.id}/shop/${TYPE_SEEDS}`}>
                                <ItemDisplayArea type={TYPE_SEEDS} />
                            </Route>
                            <Route path={`/play/${userCtx.userData.data.id}/shop/${TYPE_TOOLS}`}>
                                <ItemDisplayArea type={TYPE_TOOLS} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ShopComponent)
