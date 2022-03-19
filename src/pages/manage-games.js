import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getAllGroups} from "../api/participant-api"
import {getGame} from "../api/games_api";


const ManageGames = () => {
   const history = useNavigate();
   let {id} = useParams();
   const [groups, setGroups] = useState([]);
   const [currentGroup, setCurrentGroup] = useState('');
   const [games, setGames] = useState([]);

    const buttons = [
        {id: 0, name: "Allocate Teams to Group", value: "Group stage"},
        {id: 1, name: "Manage Groups Stage Games", value: "Group stage"},
        {id: 2, name: "Manage Round of 16 Games", value: "Round of 16"},
        {id: 3, name: "Manage Quarter-Final Games", value: "Quarter final"},
        {id: 4, name: "Manage Semi-Final Games", value: "Semi-Final"},
        {id: 5, name: "Manage Final Games", value: "Final"},
    ];

    useEffect(async () => {
        //const groups = await getAllGroups();
        //const game = await getGame(1)
        setGroups(groupsSample)
        setGames(A)
    },[]);

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

    const onFinish = () =>{

    }

    return (
      <div>
          <div className="max-w-xl mx-auto font-tahoma p-12">
              <p className="text-lg mb-8 font-bold">{buttons[id].name}</p>
            <div className="flex flex-col space-y-12">
                {id === "1"?
                <div className="flex space-x-12">
                    <select onChange={e => setCurrentGroup(e.target.value)} className='border-solid border-2 border-black py-2 px-2 pr-16'>
                        {groups.map(data =>
                            <option value={data.value}>{data.name}</option>
                        )}
                    </select>
                </div>:null}

                <div className="flex flex-col">
                    <div className="grid grid-cols-3 gap-4">
                        <p className="text font-bold grow">Games</p>
                        <p className="text font-bold text-center">Result</p>
                    </div>

                    {games.map(data =>
                        <div className="grid grid-cols-3 gap-4 my-2">
                            <p className="text grow ">{data.games}</p>
                            <p className="text text-center">{data.result}</p>
                            <button className='bg-mustard hover:bg-bear text-black font-bold h-10' value={data.games}>
                                Edit
                            </button>
                        </div>
                    )}
                </div>

              <div className="w-full flex justify-between mt-12 space-x-12">
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1" onClick={onFinish} value={buttons[id].id}>Finish {buttons[id].value}</button>
                <button onClick={() => history('/manage-execution')} className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close</button>
            </div>
            </div>
        </div>
      </div>
    );
};

export default ManageGames;
