import Items from './Items';
import React, { useMemo } from 'react'
import { TYPE_SEEDS, TYPE_TOOLS } from '../../../Dispatch/type';
import styles from '../Styles/Shop.module.css'
import { flowers, tools } from '../../../Data';
import Tools from './Tools';

function ItemDisplayArea(props) {
    const flowersSort = useMemo(() => {
        return flowers.sort((a, b) => a.levelRequire - b.levelRequire)
    }, [flowers])

    switch (props.type) {
        case TYPE_SEEDS:
            return (
                <div className={styles.areaItems}>
                    {
                        flowersSort.map(ele => {
                            return (
                                <Items data={ele} type={TYPE_SEEDS} key={ele.id} />
                            )
                        })
                    }
                </div>
            )

        case TYPE_TOOLS:
            return (
                <div className={styles.areaItems}>
                    {
                        tools.map(ele => {
                            return (
                                <Tools data={ele} type={TYPE_TOOLS} key={ele.id} />
                            )
                        })
                    }
                </div>
            )
        default:
            return null;
    }

}

export default React.memo(ItemDisplayArea)

