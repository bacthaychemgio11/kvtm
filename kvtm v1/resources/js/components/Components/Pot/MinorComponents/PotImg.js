import React, { useContext, useEffect, useMemo } from 'react';
import styles from '../Styles/Pot.module.css';
import {
    DEFAULT_STATE, SEEDING, GROWING, DEVELOPING, HARVESTABLE,
    DEFAULT_SEEDING_STATE, START_TIMER, END_TIMER,
    HARVEST_TIME, DISABLE_HAVEST, ENABLE_HARVEST, ANIMATION_HAVEST_ON, RUNNING_PROGRESS_BAR,
    HIDE_PROGRESS_BAR, HARVEST_TIMES_DEFAULT, HAVE_BUG, NO_BUG, SET_PLANTED_FLOWER, FERTILIZE_FLOWER
} from '../Dispatch/type';
import PotContext from '../Contexts/PotContext';
import { random } from '../Helper/Random';
import { FlowerContext } from '../../../Game';
import { CHANGE_BUGS_QUANTITY, DECREASE_QUANTITY_ITEM_TOOL, DECREASE_SEED } from '../../GameCollapseMenu/Dispatch/type';
import { UserContext } from '../../../Game';
import { HARVEST, TOOLS_FERTILIZER, TOOLS_NETS } from '../../../Dispatch/type';

function PotImg() {
    const potContext = useContext(PotContext);
    const flowerContext = useContext(FlowerContext);
    const userCtx = useContext(UserContext);
    const randomFunction = useMemo(() => random, []);

    // SEEDING STAGE
    async function dropSeed() {
        potContext.setRunSeed(true);
        setTimeout(async () => {
            // kết thúc hiệu ứng gieo hạt
            await potContext.setRunSeed(DEFAULT_SEEDING_STATE);
            // Đổi ảnh
            await potContext.setImage(potContext.flower.growingImg);
            // chuyển trạng thái cây thành giai đoạn phát triển
            potContext.setState(GROWING);
        }, 2000)
    }

    // GROWING STAGE
    async function growingStage() {
        // Bắt đầu đếm ngược thời gian trồng
        await potContext.CdTimerReducer({ type: START_TIMER, seconds: potContext.flower.timeGrowingStage })
        setTimeout(async () => {
            // CHANGE IMAGE
            await potContext.setImage(potContext.flower.developingImg);
            // END COUNTDOWNTIMER
            await potContext.CdTimerReducer({ type: END_TIMER });
            // CHANGE STATE OF POT
            potContext.setState(DEVELOPING);
        }, +potContext.flower.timeGrowingStage * 1000)
    }

    // DEVELOPING STAGE
    async function developingStage() {
        // START COUNTDOWNTIMER
        await potContext.CdTimerReducer({ type: START_TIMER, seconds: potContext.flower.timeDevelopingStage });
        // SPAWN BUGS OR NOT?
        let rate = randomFunction(0, 100);
        if (rate <= potContext.flower.chanceToSpawnBug) {
            potContext.dispatchBug({ type: HAVE_BUG })
        }
        else {
            potContext.dispatchBug({ type: NO_BUG })
        }

        setTimeout(async () => {
            // CHANGE IMAGE
            await potContext.setImage(potContext.flower.harvestabledImg);
            // CHANGE STATE OF POT
            potContext.setState(HARVESTABLE);
        }, +potContext.flower.timeDevelopingStage * 1000)
    }

    // HARVEST STAGE
    async function harvestStage() {
        if (potContext.harvestTimes > 0) {
            //Remove Bugs
            if (potContext.bugReducer.haveBug) {
                potContext.dispatchBug({ type: NO_BUG })
            }
            // Cho phép Hiệu ứng khi thu hoạch
            await potContext.setHarvestStatus({ type: ENABLE_HARVEST })
            // Bắt đầu đếm ngược thời gian thu hoạch
            await potContext.CdTimerReducer({ type: START_TIMER, seconds: HARVEST_TIME })
            // Hiển thị progress bar thu hoạch
            await potContext.setProgressbar({ type: RUNNING_PROGRESS_BAR, percent: 100 })

            setTimeout(async () => {
                // CHANGE HARVEST TIMES
                potContext.setHarvestTimes((+potContext.harvestTimes) - 1);
                // Ẩn progress bar thu hoạch
                await potContext.setProgressbar({ type: HIDE_PROGRESS_BAR })
                // CHANGE STATE OF POT
                if (potContext.harvestTimes > 1) {
                    potContext.setState(DEVELOPING);
                    // CHANGE IMAGE
                    await potContext.setImage(potContext.flower.developingImg);
                }
                else {
                    // END COUNTDOWNTIMER
                    await potContext.CdTimerReducer({ type: END_TIMER });
                    // CHANGE IMAGE
                    await potContext.setImage(potContext.flower.imgDefault);
                    //Không Cho phép hiệu ứng thu hoạch
                    await potContext.setHarvestStatus({ type: DISABLE_HAVEST })
                    // CHANGE STATE OF POT
                    potContext.setState(DEFAULT_STATE);
                }

            }, +HARVEST_TIME * 1000)
        }
        else {
            // END COUNTDOWNTIMER
            await potContext.CdTimerReducer({ type: END_TIMER });
            // CHANGE IMAGE
            await potContext.setImage(potContext.flower.imgDefault);
            // Không Cho phép thu hoạch
            await potContext.setHarvestStatus({ type: DISABLE_HAVEST })
            // CHANGE STATE OF POT
            potContext.setState(DEFAULT_STATE);
        }
    }

    useEffect(async () => {
        switch (potContext.potState) {
            case SEEDING:
                await dropSeed();
                break;
            case GROWING:
                await growingStage();
                break;
            case DEVELOPING:
                await developingStage();
                break;
            case HARVESTABLE:
                await harvestStage();
                break;
            default:
                break;
        }
    }, [potContext.potState])

    async function handleClick() {
        switch (potContext.potState) {
            case DEFAULT_STATE:
                if (flowerContext.pickedFlower != null) {
                    // Trừ số lượng cây trong kho
                    flowerContext.dispatchSeedsStorge({ type: DECREASE_SEED, id: flowerContext.pickedFlower.id, quantity: -1 })
                    // Lưu data cây được chọn
                    let { ...data } = flowerContext.pickedFlower;
                    let newData = data;
                    potContext.setflower({ type: SET_PLANTED_FLOWER, flower: newData });
                    // Cho phép bón phân
                    potContext.changeStatusFertilizer(true)
                    // RESET LẠI SỐ LẦN THU HOẠCH
                    potContext.setHarvestTimes(HARVEST_TIMES_DEFAULT);
                    potContext.setState(SEEDING);
                }
                else {
                    alert('Picked flower to plant.')
                }
                break;
            case GROWING:
                if (userCtx.pickedTool == TOOLS_FERTILIZER && potContext.fertilize) {
                    // Giảm số lượng phân bón trong kho
                    userCtx.dispatchToolsStorage({ type: DECREASE_QUANTITY_ITEM_TOOL, quantity: -1, itemType: TOOLS_FERTILIZER })
                    // Cập nhập exp khi thu hoach
                    potContext.setflower({ type: FERTILIZE_FLOWER, flower: flowerContext.pickedFlower });
                    // Không cho bón phân nữa
                    potContext.changeStatusFertilizer(false)
                }
                break;
            case DEVELOPING:
                if (potContext.bugReducer.haveBug && userCtx.pickedTool == TOOLS_NETS) {
                    // Tăng số lượng bọ trong kho
                    userCtx.dispatchBugsStorage({ type: CHANGE_BUGS_QUANTITY, idBugs: potContext.flower.id_bug, quantity: 1 })
                    // Chuyển trạng thái cây về tình trạng không có bugs
                    potContext.dispatchBug({ type: NO_BUG });
                    // Giảm số lượng vợt
                    userCtx.dispatchToolsStorage({ type: DECREASE_QUANTITY_ITEM_TOOL, itemType: TOOLS_NETS, quantity: -1 })
                }
                break;
            case HARVESTABLE:
                if (potContext.harvestStatus.canHarvest) {
                    potContext.setHarvestStatus({ type: ANIMATION_HAVEST_ON });
                    // Ẩn progress bar thu hoạch
                    potContext.setProgressbar({ type: HIDE_PROGRESS_BAR });
                    // Tăng exp, gold
                    userCtx.dispatchUserData({ type: HARVEST, exp: potContext.flower.expGain, gold: potContext.flower.moneyGain })
                    // CHANGE IMAGE
                    await potContext.setImage(potContext.flower.developingImg);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div onClick={handleClick} style={{
            backgroundImage: `url(${potContext.image})`,
            backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
        }} className={`
        ${styles.potImg}`} />
    )
}

export default React.memo(PotImg)
