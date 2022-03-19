import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {getTournamentStageState, getTournamentTeamsAllocated} from '../api/tournament_api';


const ManageExecution = (props) => {
    const history = useNavigate();
    const [teamsAllocated, setTeamsAllocated] = React.useState("");
    const [stageFinished, setStageFinished] = React.useState([])

    useEffect(async() => {
        getTournamentTeamsAllocated(props.id).then(data => setTeamsAllocated(data));
        let stage = await getTournamentStageState(props.id);
        setStageFinished(stage);
    }, [])

    const buttons = [
        {id: 1, name: "Manage Groups Stage Games", value: "Group stage"},
        {id: 2, name: "Manage Round of 16 Games", value: "Round of 16"},
        {id: 3, name: "Manage Quarter-Final Games", value: "Quarter final"},
        {id: 4, name: "Manage Semi-Final Games", value: "Semi-Final"},
        {id: 5, name: "Manage Final Games", value: "Final"},
    ]

    const getButton = (onClick = ()=>{}, text) =>{
        return <button onClick={onClick} className="bg-mustard hover:bg-bear text-black font-bold h-10">{text}</button>
    }
    return (
        <div className='max-w-2xl  mx-auto font-tahoma p-12'>
            <p className="text-lg mb-8 font-bold">Manage Execution</p>

            <div className="flex flex-col">
                <div className="grid grid-cols-2 pb-3">
                    <div className="col-start-2 col-end-3 font-bold font-bold text-center">Teams allocated</div>
                </div>
                <div className="grid grid-cols-2 pb-3">
                    {getButton(() => history("/allocate-teams"), "Allocate Teams to Group")}
                    <div className="font-bold text-center align-middle"> {teamsAllocated.message} </div>
                </div>
                <div className="grid grid-cols-2 pb-3">
                    <div className="col-start-2 col-end-3 font-bold font-bold text-center">Finished</div>
                </div>
                {
                    buttons.map(data =>
                        <div className="grid grid-cols-2 pb-3">
                            {getButton(() => history("/manage-games/"+data.id), data.name)}
                            <div className="font-bold text-center align-middle "> {stageFinished[data.value] === false? "No" : "Yes"} </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default ManageExecution;
