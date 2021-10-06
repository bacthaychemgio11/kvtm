import React, { useState, useCallback, useReducer, useEffect, useMemo } from 'react';
import { Route, useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import GardenLine from './Components/GardenLine/GardenLine';
import ShopIcon from './Components/ShopIcon/ShopIcon'
import GameCollapseMenu from './Components/GameCollapseMenu/GameCollapseMenu';
import { SeedsStorageReducer, initialValueOfSeedsStorage } from './Components/GameCollapseMenu/Reducers/SeedsStorageReducer';
import { startValueOfUser, dispatchUser } from './Reducer/AppReducer';
import { LOG_IN } from './Dispatch/type';
import { CHANGE_ID_STORAGE, CHANGE_ID_TOOLS_STORAGE } from './Components/GameCollapseMenu/Dispatch/type';
import Profile from './Components/Profile/Profile';
import Shop from './Pages/Shop';
import { ToolsStorageReducer, startValueOfToolsStorage } from './Components/GameCollapseMenu/Reducers/ToolsStorageReducer';
import { bugsStorgageReducer, startValueOfBugsStorage } from './Components/GameCollapseMenu/Reducers/BugsStorage';
import { defaultLineValue, LineReducer } from './Components/GardenLine/Contexts/LineContext';
import Music from './Components/Music/Music';
import LogOut from './Components/LogOut/LogOut';

export const FlowerContext = React.createContext();
export const UserContext = React.createContext();

function Game() {
    const parameter = useParams();

    // SEEDS HOOK
    const [pickedFlower, setPickedFlower] = useState(null);
    const [seedsStorge, dispatchSeedsStorge] = useReducer(SeedsStorageReducer, initialValueOfSeedsStorage);
    const changeDataSeeds = useCallback((data) => dispatchSeedsStorge(data), [])
    const changePickedFlower = useCallback((data) => setPickedFlower(data), [])

    // TOOLS HOOK
    const [toolsStorage, dispatchToolsStorage] = useReducer(ToolsStorageReducer, parameter.idUser, startValueOfToolsStorage);
    const [pickedTool, setPickedTools] = useState(null);
    const changeTool = useCallback((data) => setPickedTools(data), []);
    const changeDataToolsStorage = useCallback((data) => dispatchToolsStorage(data), [])

    // BUGS STORAGE HOOK
    const [bugsStorage, dispatchBugsStorage] = useReducer(bugsStorgageReducer, parameter.idUser, startValueOfBugsStorage);
    const changeDataBugsStorage = useCallback((data) => dispatchBugsStorage(data), [])

    // LINE HOOK
    const [line, lineReducer] = useReducer(LineReducer, parameter.idUser, defaultLineValue);
    const modifiedLine = useCallback((data) => lineReducer(data), []);

    // REDUCER LOGIN-LOGOUT 
    const [userData, dispatchUserData] = useReducer(dispatchUser, parameter.idUser, startValueOfUser)

    const setUserData = useCallback((value) => { dispatchUserData(value) }, []);

    // LOG IN
    useEffect(() => {
        setUserData({ type: LOG_IN, id: parameter.idUser });
        // GET DATA FOR STORAGE
        changeDataSeeds({ type: CHANGE_ID_STORAGE, idUser: parameter.idUser })
        changeDataToolsStorage({ type: CHANGE_ID_TOOLS_STORAGE, idUser: parameter.idUser })
    }, [userData.data.id])

    return (
        <>
            <UserContext.Provider value={
                {
                    userData: userData,
                    dispatchUserData: setUserData,
                    dispatchSeedsStorge: changeDataSeeds,
                    // TOOLS
                    dispatchToolsStorage: changeDataToolsStorage,
                    toolsData: toolsStorage,
                    pickedTool: pickedTool,
                    setPickedTools: changeTool,
                    // BUGS STORAGE
                    bugsStorage: bugsStorage,
                    dispatchBugsStorage: changeDataBugsStorage,
                    // LINE MODIFIER
                    modifiedLine: modifiedLine
                }
            }>
                <FlowerContext.Provider value={{
                    pickedFlower: pickedFlower,
                    setPickedFlower: changePickedFlower,
                    seedsStorge: seedsStorge,
                    dispatchSeedsStorge: changeDataSeeds
                }}>
                    <Row align='center' justify='middle'>
                        <Col style={{
                            background: 'rgb(153, 218, 218)',
                        }} span={24}>
                            <div style={{
                                backgroundImage: 'url(/images/bg_hoan_chinh.png)',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                width: '100vw',
                                height: '100vh'
                            }}>
                                {
                                    line.map((line, index) => <GardenLine id={index} key={index} top={line.top} unlock={line.unlock} />)
                                }
                            </div>
                        </Col>
                    </Row>
                    <GameCollapseMenu />
                </FlowerContext.Provider>
                <Profile />
                <ShopIcon />
                <Route path={`/play/${parameter.idUser}/shop`}>
                    <Shop />
                </Route>
            </UserContext.Provider>
            <Music />
            <LogOut />
        </>
    )
}

export default Game
