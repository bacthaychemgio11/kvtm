import React, { useState, useContext, useCallback, useReducer, useMemo } from 'react';
import 'antd/dist/antd.css';
import styles from './Styles/Pot.module.css';
import {
    DEFAULT_STATE,
    DEFAULT_SEEDING_STATE
} from './Dispatch/type';
import PotImg from './MinorComponents/PotImg';
import Seeding from './MinorComponents/Seeding';
import CountDownTimer from './MinorComponents/CountDownTimer';
import PotContext from './Contexts/PotContext';
import { CDTimerReducer, initialValue } from './Reducers/CDTimerReducer';
import { HarvestReducer, HarvestInitialValue } from './Reducers/HarvestReducer';
import HarvestAnimation from './MinorComponents/HarvestAnimation';
import HarvestTimer from './MinorComponents/HarvestTimer';
import { HarvestProgressBar, HPBIntinialValue } from './Reducers/HarvestProgressBarReducer';
import { findBugsImg } from './Helper/FindBugsImage';
import { bugs, flowers } from '../../Data';
import Bug from './MinorComponents/Bug';
import { BugsReducer, intialBugValue } from './Reducers/BugsReducer';
import { PickedFlowerReducer, startValueOfPlantedFlower } from './Reducers/FlowerReducer';

function Pot(props) {
    const [potState, potSetState] = useState(DEFAULT_STATE);
    const [enableSeeding, setEnableSeeding] = useState(DEFAULT_SEEDING_STATE);
    const [CDTimer, dispatchCDTimer] = useReducer(CDTimerReducer, initialValue);
    const [harvestStatus, setHarvestStatus] = useReducer(HarvestReducer, HarvestInitialValue);
    const [harvestProgress, setHarvestProgress] = useReducer(HarvestProgressBar, HPBIntinialValue);
    const bugsImgUrlFinding = useMemo(() => findBugsImg, []);
    const bugLists = useMemo(() => bugs, []);
    const [stateBugs, dispatchStateBugs] = useReducer(BugsReducer, intialBugValue);
    const [harvestTimes, setHarvestTimes] = useState(3);
    const [fertilize, setFertilize] = useState(true)

    // lưu data cây được trồng
    const [plantedFlower, setPlantedFlower] = useReducer(PickedFlowerReducer, startValueOfPlantedFlower)

    const [potImage, setPotImage] = useState(plantedFlower.imgDefault);

    const positionStyle = useMemo(() => { return { top: `${props.top}px`, left: `${props.left}px` } }, []);
    const bugsImgUrl = useMemo(() => {
        return bugsImgUrlFinding(plantedFlower.id_bug, bugLists);
    }, [plantedFlower])

    const potStateFun = useCallback(function changeStateOfThePot(value) {
        potSetState(value);
    }, [])

    const plantedFlowerFun = useCallback(function (value) {
        setPlantedFlower(value);
    }, [])

    const potImgFun = useCallback(function changePotImage(url) {
        setPotImage(url);
    }, [])

    const seedFun = useCallback(function changeEnableSeeding(value) {
        setEnableSeeding(value)
    }, [])

    const harvestTimesChangeFun = useCallback(function changeHarvestTimes(value) {
        setHarvestTimes(value)
    }, [])

    const harvestStatusChangeFun = useCallback(function changeHarvestStatus(value) {
        setHarvestStatus(value)
    }, [])

    const hPBChangeFun = useCallback(function changeHarvestProgressBarStatus(value) {
        setHarvestProgress(value)
    }, [])

    const bugsStateFun = useCallback(function changeBugsStatus(value) {
        dispatchStateBugs(value)
    }, [])

    const changeStatusFertilizer = useCallback((value) => { setFertilize(value) }, [])

    return (
        <div style={positionStyle} className={styles.potPosition}>
            <PotContext.Provider value={{
                potState: potState,
                setState: potStateFun,
                setRunSeed: seedFun,
                harvestTimes: harvestTimes,
                setHarvestTimes: harvestTimesChangeFun,
                CdTimerReducer: dispatchCDTimer,
                harvestStatus: harvestStatus,
                setHarvestStatus: harvestStatusChangeFun,
                flower: plantedFlower,
                setflower: plantedFlowerFun,
                image: potImage,
                setImage: potImgFun,
                setProgressbar: hPBChangeFun,
                dispatchBug: bugsStateFun,
                bugReducer: stateBugs,
                fertilize: fertilize,
                changeStatusFertilizer: changeStatusFertilizer
            }}>
                {/* Img for pot */}
                <PotImg />
            </PotContext.Provider>

            {/* Seeding animation */}
            <Seeding url={plantedFlower.seedImg} runSeed={enableSeeding} />
            {/* Countdown Timer */}
            <CountDownTimer reducer={CDTimer} dispatch={dispatchCDTimer} />
            {/* Animation when Harvest */}
            <HarvestAnimation value={useMemo(() => {
                return { exp: plantedFlower.expGain, money: plantedFlower.moneyGain }
            }, [plantedFlower.expGain, plantedFlower.moneyGain])}
                setStatus={setHarvestStatus} show={harvestStatus.animation} />
            {/* Progressbar countdown harvest time */}
            <HarvestTimer setProperties={hPBChangeFun} show={harvestProgress.show} percent={harvestProgress.percent} />
            {/* Bugs */}
            <Bug dispatch={bugsStateFun} reducer={stateBugs} url={bugsImgUrl} />
        </div>
    )
}

export default React.memo(Pot)

