import { $host } from "./index";

async function getPlayer(playerId) {
    // get player data: name, surname, positionId, positionEnum, shirtNumber, dateOfBirth
    const { data } = await $host.get('/api/player', {
        params: {
            playerId
        }
    });
    return data;
}

async function getAllPositions(teamId) {
    const { data } = await $host.get(`/api/team/${teamId}/player/positions`)
    return data
}


async function createPlayer(name, surname, positionId, positionsEnum, shirtNumber, dateOfBirth) {
    // create a new player
    const { data } = await $host.post('/api/player', {
        name, surname, positionId, positionsEnum, shirtNumber, dateOfBirth
    });
    return data;
}

async function updatePlayer(playerId, name, surname, positionId, positionsEnum, shirtNumber, dateOfBirth) {
    // Update a player
    const { data } = await $host.put('/api/player', {
        playerId, name, surname, positionId, positionsEnum, shirtNumber, dateOfBirth
    });
    return data;
}

async function deletePlayer(playerId) {
    // remove a player, play remove kebab if he's turkish
    const { data } = await $host.delete('/api/player', {
        params: {
            playerId
        }
    });
    return data;
}

export {
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}
