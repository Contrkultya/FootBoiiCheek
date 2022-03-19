import { $host } from "./index";

 async function getAllGroups() {
    const { data } = await $host.get('/api/groups');
    return data;
}
export {
    getAllGroups
}
