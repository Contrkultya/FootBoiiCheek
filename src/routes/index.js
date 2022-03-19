import {ALLOCATE_TEAMS, GAME_FORM_ROUTE, MAIN_PAGE_ROUTE, MANAGE_EXECUTION, MANAGE_GAMES} from "../shared/utils/routeNames";
import {MANAGE_TEAMS_ROUTE} from "../shared/utils/routeNames";
import {ADD_EDIT_TEAM} from "../shared/utils/routeNames";
import {ADD_EDIT_PLAYER} from "../shared/utils/routeNames";
import {MANAGE_TOURNAMENTS} from "../shared/utils/routeNames";

import MainPage from "../pages/main-page";
import ManageTeams from "../pages/manage-teams";
import AddEditTeam from "../pages/add-edit-team";
import AddEditPlayer from "../pages/add-edit-player";
import ManageTournaments from "../pages/manage-tournaments";
import GameFormProxy from "../pages/game-form/game-form-proxy";
import ManageExecution from "../pages/manage-execution";
import ManageGames from "../pages/manage-games";
import AllocateTeams from "../pages/allocate-teams";

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
        path: ADD_EDIT_PLAYER,
        Component: AddEditPlayer
    },
    
    {
        path: MANAGE_TOURNAMENTS,
        Component: ManageTournaments
    },

    {
        // Временный, пока не появятся предыдущии компоненты
        path: GAME_FORM_ROUTE,
        Component: GameFormProxy,
    },
    {
        path: MANAGE_EXECUTION,
        Component: ManageExecution
    },
    {
        path: MANAGE_GAMES,
        Component: ManageGames
    },
    {
        path: ALLOCATE_TEAMS,
        Component: AllocateTeams
    }
];
