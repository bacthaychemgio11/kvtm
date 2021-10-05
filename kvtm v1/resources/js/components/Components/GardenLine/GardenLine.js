import React, { useMemo, useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import styles from './Styles/GardenLine.module.css';
import Pot from '../Pot/Pot';
import { UserContext } from '../../Game';
import { lineRequirement } from '../../Data';
import { OPEN_LINE } from './Dispatch/type';

function GardenLine(props) {
    const userCtx = useContext(UserContext);
    const potsArray = useMemo(() => [1, 2, 3, 4, 5, 6], []);

    useEffect(() => {
        let levelRequire = lineRequirement.find(ele => ele.id == props.id);
        if (userCtx.userData.data.level == levelRequire.level) {
            if (!props.unlock) {
                alert('Congratulation. You have unlocked a new line.')
            }
            userCtx.modifiedLine({ type: OPEN_LINE, idLine: props.id, idPlayer: userCtx.userData.data.id })
        }
    }, [userCtx.userData.data.level])

    return (
        <Row align='center' justify='middle'>
            <Col span={20}>
                <div style={{ top: `${props.top}px` }} className={`${styles.gardenLines}`}>
                    {
                        props.unlock ? (potsArray.map(pot => <Pot top={0} left={440} key={pot} />)) : null
                    }
                </ div>
            </Col>
        </Row>
    )
}

export default GardenLine

