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

    const getButton = (onClick = ()=>{}, text) =>{
        return <button style={{width:"300px"}} onClick={onClick} className="bg-mustard hover:bg-bear text-black font-bold py-2 px-6 flex-1">{text}</button>
    }
    return (
        <div className='flex text-center mx-auto max-w-6xl mt-12'>
            <div className="font-tahoma mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>&nbsp;&nbsp;&nbsp;Teams allocated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{getButton(() => history("/allocate-teams"), "Allocate Teams to Groups...")}</td>
                            <td><p>{teamsAllocated.message}</p></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Finish
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{getButton(() => history('/manage-games'),"Manage Groups Stage Games..." )}</td>
                            <td>
                                <p className="pl-10">
                                    {stageFinished["Group stage"] === false? "No" : "Yes"}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>{getButton(() => history('/'),"Manage Round of 16 Games..." )}</td>
                            <td>
                                <p className="pl-10">

                                    {stageFinished["Round of 16"] === false? "No" : "Yes"}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>{getButton(() => history('/'),"Manage Quarter-Final Games..." )}</td>
                            <td>
                                <p className="pl-10">
                                    {stageFinished["Quarter final"] === false? "No" : "Yes"}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>{getButton(() => history('/'),"Manage Semi-Final Games..." )}</td>
                            <td>
                                <p className="pl-10">
                                    {stageFinished["Semi-Final"] === false? "No" : "Yes"}
                                </p>
                            </td>
                        </tr>
                        <tr>

                            <td>{getButton(() => history('/'),"Manage Final Games..." )}</td>
                            <td>
                                <p className="pl-10">
                                    {stageFinished["Final"] === false? "No" : "Yes"}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageExecution;
