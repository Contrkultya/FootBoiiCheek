import React, {useMemo}  from 'react';
import Table from "../components/table";

const ManageTeams = () => {
    const data = [
        {
            id: 1,
            price: 500,
            title: 'juice'
        },
        {
            id: 2,
            price: 700,
            title: 'potato'
        },
        {
            id: 3,
            price: 1000,
            title: 'cucumber'
        }
    ];

    const columns = useMemo(() => ([
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },
        {
            Header: 'Title',
            accessor: 'title'
        }
    ]), []);

    return (
        <div className="max-w-6xl mx-auto font-tahoma p-12">
            <div className="flex flex-col space-y-12">
                <div className="flex space-x-12">
                    <span className="py-2">Search Team</span>
                    <input type="text" className="border-solid border-2 border-black py-2 px-2 pr-16"/>
                </div>
                <Table columns={columns} data={data}/>
            </div>
            <div className="w-full flex justify-between mt-12 space-x-12">
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Add</button>
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Edit</button>
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Delete</button>
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close</button>
            </div>
        </div>
    );
};

export default ManageTeams;