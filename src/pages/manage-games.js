import React, { useMemo, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/table';


const ManageGames = ({button}) => {
   const history = useNavigate()
   const [game, setGames] = useState("A")
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

    const B = [
       
        {
            games: "France - Romania",
            result: "2:1",
        },
        {
            games: "France - Romania",
            result: "2:1",
        },
        {
            games: "France - Romania",
            result: "2:1",
        },
        {
            games: "France - Romania",
            result: "2:1",
        },
        {
            games: "France - Romania",
            result: "2:1",
        },
    ];

    return (
      <div>
          <div className="max-w-xl mx-auto font-tahoma p-12">
            <div className="flex flex-col space-y-12">
                <div className="flex space-x-12">
                    <select onChange={e => setGames(e.target.value)} className='border-solid border-2 border-black py-2 px-2 pr-16'>
                    <option selected value="A">Group A</option>
                    <option value="B">Group B</option>
                    <option value="C">Group C</option>
                    <option value="D">Group D</option>
                    <option value="E">Group E</option>
                    <option value="F">Group F</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className='text-left'>Games</th>
                            <th>Result</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {A.map((group, i) => (
                        <tr key={i}>
                        <td>{group.games}</td>
                        <td className='text-center'>{group.result}</td>
                        <td>
                            {" "}
                            <button className='bg-mustard hover:bg-bear text-black font-bold py-2 flex-1' value ={group.games}>
                            Edit...
                            </button>
                        </td>
                        </tr>
                        ))}
                    </tbody>
              </table>
              <div className="w-full flex justify-between mt-12 space-x-12">
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Finish {button}</button>
                <button onClick={() => history('/manage-execution')} className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close</button>
            </div>
            </div>
        </div>
      </div>
    );
};

export default ManageGames;