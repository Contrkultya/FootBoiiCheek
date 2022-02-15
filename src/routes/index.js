import {MAIN_PAGE_ROUTE} from "../utils/routeNames";
import {MANAGE_TEAMS_ROUTE} from "../utils/routeNames";
import {ADD_EDIT_TEAM} from "../utils/routeNames";
import {MANAGE_TOURNAMENTS} from "../utils/routeNames";

import MainPage from "../pages/main-page";
import ManageTeams from "../pages/manage-teams";
import AddEditTeam from "../pages/add-edit-team";
import ManageTournaments from "../pages/manage-tournaments";

export const routes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },

    {
        path: MANAGE_TEAMS_ROUTE,
        Component: ManageTeams
    },

    {
        path: ADD_EDIT_TEAM,
        Component: AddEditTeam
    },

    {
        path: MANAGE_TOURNAMENTS,
        Component: ManageTournaments
    },
];
