import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react'
import Table from "../components/table";
import "../components/Text_border_css.css";
import AddTournaments from "../pages/modals_add_edit_tournaments/index_add";
import EditTournaments from "../pages/modals_add_edit_tournaments/index_edit";

const ManageTournaments = () => {


    const [addTournamentsVisible, setAddTournamentsVisible] = useState(false)
    const [editTournamentsVisible, setEditTournamentsVisible] = useState(false)

    const data = [
        {
            id: 1,
            tournaments: 'World Cup',
            date: '12.06.14 - 13.07.14'
        },
        {
            id: 2,
            tournaments: 'World Cup2',
            date: '12.06.15 - 13.07.15'
        },
        {
            id: 3,
            tournaments: 'World Cup3',
            date: '12.06.16 - 13.07.16'
        }
    ];

    const columns = useMemo(() => ([
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Tournaments',
            accessor: 'tournaments'
        },
        {
            Header: 'Date',
            accessor: 'date'
        }
    ]), []);


    return (
        <>
            <div className="max-w-6xl mx-auto font-tahoma p-12">
                <div className="flex flex-col space-y-12">
                    <Table columns={columns} data={data}/>
                </div>


                <div className="w-full flex justify-between mt-12 space-x-12">
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1"
                            onClick={()=>
                            {
                                setAddTournamentsVisible(true)
                            }}
                    >Add</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1"
                            onClick={()=>
                            {
                                setEditTournamentsVisible(true)
                            }}
                    >Edit</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Delete</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close</button>
                </div>

            </div>

            <AddTournaments
                show={addTournamentsVisible} onHide={()=> {
                setAddTournamentsVisible(false)
            }}
            />

            <EditTournaments show={editTournamentsVisible} onHide={()=> {
                setEditTournamentsVisible(false)
            }}/>

        </>
    );
};

export default ManageTournaments;

