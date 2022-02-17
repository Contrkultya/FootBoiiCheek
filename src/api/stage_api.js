import { $host } from "./index";

async function getStage(stageId) {
    // get stage games
    const { data } = await $host.get('/api/stage', {
        params: {
            stageId
        }
    });
    return data;
}

async function updateStage(stageId, games) {
    // update tournament stage games
    const { data } = await $host.put('/api/stage', {
        stageId, games
    });
    return data;
}

async function finishStage(stageId) {
    // finish the stage
    const { data } = await $host.put('/api/stage/finish', {
        stageId
    });
    return data;
}

export {
    getStage,
    updateStage,
    finishStage
}