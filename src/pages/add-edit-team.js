import React, {useMemo} from 'react';
import Table from "../components/table";
import image from "../img/download.png";

const AddEditTeam = () => {
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
        <div className="max-w-6xl mx-auto font-tohoma p-12">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="space-x-16 py-4">
                        <span className="py-2">Team name</span>
                        <input type="text" className="border-solid border-2 border-black pl-2 pr-28 py-2"/>
                    </div>
                    <div className="flex space-x-12 py-4">
                        <span className="py-2">Country Code</span>
                        <input type="text" className="border-solid border-2 border-black pl-2 w-12"/>
                        <span className="py-2">Region</span>
                        <select className="border-2 border-black pl-2 pr-7">
                            <option>Europe</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-3 flex flex-col items-center pt-4">
                    <img src={image} alt="" className="w-16 h-16"/>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Select Flag</button>
                </div>
            </div>

            <div className="flex justify-around border-2 border-black border-dotted">
                {/*<span className="">Players (23)</span>*/}
                <div className="flex-grow p-8">
                    <Table columns={columns} data={data}/>
                </div>
                <div className="flex flex-col space-y-4 py-8 px-8">
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Add</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Edit</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Delete</button>
                </div>
            </div>

            <div className="flex justify-end space-x-4 py-8">
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Save & Close</button>
                <button className="bg-mustard hover:bg-bear text-black font-bold py-2 w-36">Close</button>
            </div>
        </div>
    );
};

export default AddEditTeam;