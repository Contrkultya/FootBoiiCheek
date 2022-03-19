import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getAllGroupsInTournament} from "../api/participant-api"
import {getGame} from "../api/games_api";
import {getAllStagesInTournament, getCurrentStageInTournament,} from "../api/stage_api";
import {getTeam, getTeams} from "../api/teams_api";


const ManageGames = () => {

    //tournamentId 0, GroupId 1,
    const history = useNavigate();
    let {id} = useParams();
    const [groups, setGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState('A');
    const [games, setGames] = useState([]);
    const [teams, setTeams] = useState([]);
    const [stage, setStage] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const buttons = [
        {id: 0, name: "Allocate Teams to Group", value: "Group stage"},
        {id: 1, name: "Manage Groups Stage Games", value: "Group stage"},
        {id: 2, name: "Manage Round of 16 Games", value: "Round of 16"},
        {id: 3, name: "Manage Quarter-Final Games", value: "Quarter final"},
        {id: 4, name: "Manage Semi-Final Games", value: "Semi-Final"},
        {id: 5, name: "Manage Final Games", value: "Final"},
    ];

    useEffect(async () => {
        await load();
    }, [])

    useEffect(async () => {

        const stageGames = stage.map((x, i) => ({
            ["id"]: i,
            ["stageId"]: x.id,
            ["guestTeam"]: x.guestTeam,
            ["homeTeam"]: x.homeTeam,
            ["guestTeamResult"]: x.guestTeamResult,
            ["homeTeamResult"]: x.homeTeamResult,
            ["finished"]: x.finished,
            ["started"]: x.started,
        }));
        setGames(stageGames);
        console.log("stage games", stageGames);
        console.log("games", games)
        console.log("tems", teams)
        console.log("data", teams.find(data => data.id == 2).name)


    }, [loaded]);

    const stageGamesSample = [{
        guestTeam: {group: "A", id: 2}, homeTeam: {group: "B", id: 2}, guestTeamResult: 1,
        homeTeamResult: 2, finished: true, started: true
    }];

    const load = async () => {
        //const groups = await getAllGroupsInTournament();
        const currentGame = await getGame(0, 1);
        const loadedStage = await getCurrentStageInTournament(0, buttons[id].value);
        const loadedTeams = await getTeams();
        setTeams(loadedTeams);
        setStage(loadedStage);
        setGroups(groupsSample);
        if (loadedStage && loadedTeams)
            setLoaded(true);
    }
    const getTeamNameById = (id) => {
        return teams.find(data => data.id === id).name;
    }
    const groupsSample = [
        {value: "A", name: "Group A"},
        {value: "B", name: "Group B"},
        {value: "C", name: "Group C"},
        {value: "D", name: "Group D"},
        {value: "E", name: "Group E"},
        {value: "F", name: "Group F"},
    ]

    const A = [

        {
            games: "France - Romania",
            result: "2:1",
        },
        {
            games: "Albania - Switzerland",
            result: "0:1*",
        },
        {
            games: "Romania - Switzerland",
            result: "-:-",
        },
        {
            games: "Romania - Switzerland",
            result: "-:-",
        },
        {
            games: "Romania - Switzerland",
            result: "-:-",
        },
    ];



    return (
        <div>
            <div className="max-w-xl mx-auto font-tahoma p-12">
                <p className="text-lg mb-8 font-bold">{buttons[id].name}</p>
                <div className="flex flex-col space-y-12">
                    {id === "1" ?
                        <div className="flex space-x-12">
                            <select onChange={e => setCurrentGroup(e.target.value)}
                                    className='border-solid border-2 border-black py-2 px-2 pr-16'>
                                {groups.map(data =>
                                    <option value={data.value}>{data.name}</option>
                                )}
                            </select>
                        </div> : null}

                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 gap-4">
                            <p className="text font-bold grow">Games</p>
                            <p className="text font-bold text-center">Result</p>
                        </div>
                        {loaded && games?.map(data => {
                                if (id == 1) {
                                    if (data.homeTeam.group === currentGroup) {
                                        return <div className="grid grid-cols-3 gap-4 my-2">
                                            <p className="text grow ">{getTeamNameById(data.guestTeam.id)} - {getTeamNameById(data.homeTeam.id)}</p>
                                            <p className="text text-center">{data.guestTeamResult} - {data.homeTeamResult}</p>
                                            <button className='bg-mustard hover:bg-bear text-black font-bold h-10'
                                                    value={data.id}>
                                                Edit
                                            </button>
                                        </div>
                                    }
                                } else {
                                    return <div className="grid grid-cols-3 gap-4 my-2">
                                        <p className="text grow ">{getTeamNameById(data.guestTeam.id)} - {getTeamNameById(data.homeTeam.id)}</p>
                                        <p className="text text-center">{data.guestTeamResult} - {data.homeTeamResult}</p>
                                        <button className='bg-mustard hover:bg-bear text-black font-bold h-10'
                                                value={data.id}>
                                            Edit
                                        </button>
                                    </div>
                                }


                            }
                        )}
                    </div>

                    <div className="w-full flex justify-between mt-12 space-x-12">
                        <button onClick={() => history('/manage-execution')}
                                className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageGames;
