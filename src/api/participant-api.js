import { $host } from "./index";

 async function getAllGroupsInTournament(tournamentId) {
    const { data } = await $host.get(`api/tournaments/${tournamentId}/participant/groups`);
    return data;
}
 async function allocateRandomly(tournamentId) {
    const { data } = await $host.get(`api/tournaments/${tournamentId}/participant/randomAllocation`);
    return data;
}


export {
    getAllGroupsInTournament,
    allocateRandomly
}
