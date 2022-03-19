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
async function getCurrentStageInTournament(tournamentId, stage) {
    const { data } = await $host.get(`api/tournaments/${tournamentId}/games/stages/${stage}`, );
    return data;
}

async function getAllStagesInTournament(tournamentId) {
    const { data } = await $host.get(`api/tournaments/${tournamentId}/games/stages`, );
    return data;
}

export {
    getStage,
    updateStage,
    finishStage,
    getCurrentStageInTournament,
    getAllStagesInTournament
}
