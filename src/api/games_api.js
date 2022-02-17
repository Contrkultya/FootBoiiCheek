import { $host } from "./index";

async function getGames() {
    // get all groups in the tournament
    const { data } = await $host.get('/api/games');
    return data;
}

async function getGame(gameId) {
    // get game data: players, isStarted, isFinished, events
    const { data } = await $host.get('/api/game', {
        params: {
            gameId
        }
    });
    return data;
}

async function addPlayerToGame(gameId, playerId, positionId) {
    // add player to a game
    const { data } = await $host.post('/api/game/player', {
        gameId, playerId, positionId
    });
    return data;
}

async function updatePlayerInGame(gameId, gridId, playerId, positionId) {
    // update player participation data
    const { data } = await $host.put('/api/game/player', {
        params: {
            gameId, gridId, playerId, positionId
        }
    });
    return data;
}

async function deletePlayerFromGame(name, gameId, playerId) {
    // delete player from the game
    const { data } = await $host.delete('/api/game/player', {
        params: {
            gameId, playerId
        }
    });
    return data;
}

async function addGameEvent(gameId, minute, team, eventClass, additionText) {
    // create a new game event
    const { data } = await $host.post('/api/game/event', {
        gameId, minute, team, eventClass, additionText
    });
    return data;
}

async function updateGameEvent(eventId, minute, team, eventClass, additionText) {
    // update game event
    const { data } = await $host.put('/api/game/event', {
        eventId, minute, team, eventClass, additionText
    });
    return data;
}

async function deleteGameEvent(eventId) {
    // remove game event
    const { data } = await $host.delete('/api/game/event', {
        params: {
            eventId
        }
    });
    return data;
}

export {
    getGames,
    getGame,
    addPlayerToGame,
    updatePlayerInGame,
    deletePlayerFromGame,
    addGameEvent,
    updateGameEvent,
    deleteGameEvent
}