import { $host } from "./index";

 async function getAllGroupsInTournament(tournamentId) {
    const { data } = await $host.get(`api/tournaments/${tournamentId}/participant/groups`, );
    return data;
}


export {
    getAllGroupsInTournament
}
