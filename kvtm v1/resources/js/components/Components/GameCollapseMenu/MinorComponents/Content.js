import React, { useCallback, useContext, useState } from 'react';
import { SEEDS_MENU_COLLAPSE, TOOLS_MENU_COLLAPSE, UPGRADE_MENU_COLLAPSE } from '../../Pot/Dispatch/type';
import styles from '../Styles/CollapseMenu.module.css';
import { FlowerContext, UserContext } from '../../../Game';
import ItemsInsideContent from './ItemsInsideContent';
import ToolsInsideContent from './ToolsInsideContent';
import BugsInsideContent from './BugsInsideContent';

function Content(props) {
    const flowerCtx = useContext(FlowerContext);
    const userCtx = useContext(UserContext)

    const [pick, setPick] = useState(null);
    const handlePick = useCallback((value) => { setPick(value) }, []);

    const [pickedTools, setPickedTools] = useState(null);
    const handlePickTools = useCallback((value) => { setPickedTools(value) }, []);

    switch (props.type) {
        case SEEDS_MENU_COLLAPSE:
            return (
                <React.Fragment>
                    <div className={`${styles.collapseItemWrap} ${props.show ? styles.show : ''}`}>
                        {
                            flowerCtx.seedsStorge.data.map(ele => {
                                return (
                                    <ItemsInsideContent click={handlePick} picked={ele.id == pick} info={ele} key={ele.id} />
                                )
                            })
                        }
                    </div>
                </React.Fragment>
            )

        case TOOLS_MENU_COLLAPSE:
            return (
                <React.Fragment>
                    <div className={`${styles.collapseItemWrap} ${props.show ? styles.show : ''}`}>
                        {
                            userCtx.toolsData.data.map(
                                ele => {
                                    return (
                                        <ToolsInsideContent click={handlePickTools} picked={ele.id == pickedTools} info={ele} key={ele.id} />
                                    )
                                }
                            )
                        }
                    </div>
                </React.Fragment>
            )

        case UPGRADE_MENU_COLLAPSE:
            return (
                <React.Fragment>
                    <div className={`${styles.collapseItemWrap} ${props.show ? styles.show : ''}`}>
                        {
                            userCtx.bugsStorage.data.map(
                                ele => {
                                    return (
                                        <BugsInsideContent quantity={ele.quantity} info={ele} key={ele.id} />
                                    )
                                }
                            )
                        }
                    </div>
                </React.Fragment>
            )

        default:
            return null;
    }

}

export default React.memo(Content)
