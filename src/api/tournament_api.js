import { $host } from "./index";

async function getTournamentGroups(tournamentId) {
    // get all groups in the tournament
    const { data } = await $host.get('/api/tournament/groups', {
        params: {
            tournamentId
        }
    });
    return data;
}

async function getTournaments() {
    // get all tournaments and their dates
    const { data } = await $host.get('/api/tournaments');
    return data;
}

async function getTournamentStages() {
    // stagesJSON
    const { data } = await $host.get('/api/tournament/stages');
    return data;
}

async function getTournament(tournamentId) {
    // get tournament start, end date, name, teams
    const { data } = await $host.get('/api/tournament/read', {
        params: {
            tournamentId
        }
    });
    return data;
}

async function addTournament(name, startDate, endDate, teams) {
    // create a new tournament
    const { data } = await $host.post('/api/tournament/add', {
        name, startDate, endDate, teams
    });
    return data;
}

async function updateTournament(name, startDate, endDate, teams) {
    // update a tournament, don't forget to check for nulls or smth on the back
    const { data } = await $host.put('/api/tournament/update', {
        name, startDate, endDate, teams
    });
    return data;
}

async function deleteTeamFromTournament(teamId, tournamentId) {
    // remove a team from the tournament
    const { data } = await $host.delete('/api/tournament/deleteTeam', {
        params: {
            teamId, tournamentId
        }
    });
    return data;
}

async function getTournamentState(tournamentId) {
    const { data } = await $host.get('/api/tournament/state', {
        params: {
            tournamentId
        }
    });
    return data;
}

async function getTournamentStage(tournamentId) {
    const { data } = await $host.get('/api/tournament/stage', {
        params: {
            tournamentId
        }
    });
    return data;
}

export {
    getTournamentGroups,
    getTournaments,
    getTournamentStages,
    getTournament,
    addTournament,
    updateTournament,
    deleteTeamFromTournament,
    getTournamentState,
    getTournamentStage
}