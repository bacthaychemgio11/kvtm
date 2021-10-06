import React, { useState, useCallback, useMemo } from 'react';
import {
    SEEDS_MENU_COLLAPSE,
    TOOLS_MENU_COLLAPSE, UPGRADE_MENU_COLLAPSE
} from '../../Pot/Dispatch/type';
import Header from './Header';
import Content from './Content';

function Item(props) {
    const [show, setShow] = useState(false);

    const typeMenu = useMemo(() => [
        { id: 1, type: SEEDS_MENU_COLLAPSE },
        { id: 2, type: TOOLS_MENU_COLLAPSE },
        { id: 3, type: UPGRADE_MENU_COLLAPSE }],
        []);

    const findType = useCallback(
        (id) => {
            let result = typeMenu.find(ele => ele.id === id);
            return result.type;
        }, [])

    const clickEvent = useCallback(
        () => {
            setShow(!show);
        }, [show])

    return (
        <React.Fragment>
            <Header onClick={clickEvent} icon={props.data.icon} name={props.data.name} />
            <Content show={show} type={findType(props.data.id)} />
        </React.Fragment>
    )
}

export default React.memo(Item)
