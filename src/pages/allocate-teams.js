import React, {useMemo} from 'react';
import Table from "../components/table";

const AllocateTeams = () => {
    const options = [
        {
            value: 'Belgium'
        },
        {
            value: 'Germany'
        },
        {
            value: 'England'
        },
        {
            value: 'Iceland'
        },
        {
            value: 'Italy'
        },
    ]
    const data = [
        {
            shortname: 1,
            team: 'juice'
        },
        {
            shortname: 2,
            team: 'potato'
        },
        {
            shortname: 3,
            team: 'cucumber'
        }
    ];

    const columns = useMemo(() => ([
        {
            Header: 'Shortname',
            accessor: 'shortname'
        },
        {
            Header: 'Team',
            accessor: 'team'
        }
    ]), []);
    return (
        <div>
            <div className="max-w-6xl mx-auto font-tahoma p-12">
                <div className="grid grid-cols-4 mt-12">
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Allocate randomly
                    </button>
                </div>
                <div className="grid grid-cols-4">
                    <div className="grid grid-cols-3 gap-3 mt-12 col-span-3">
                        <div>
                            <p className="font-bold mb-4">Group A</p>
                            <Table columns={columns} data={data}/>
                        </div>
                        <div>
                            <p className="font-bold mb-4">Group B</p>
                            <Table columns={columns} data={data}/>
                        </div>
                        <div>
                            <p className="font-bold mb-4">Group C</p>
                            <Table columns={columns} data={data}/>
                        </div>
                        <div>
                            <p className="font-bold mb-4">Group D</p>
                            <Table columns={columns} data={data}/>
                        </div>
                        <div>
                            <p className="font-bold mb-4">Group E</p>
                            <Table columns={columns} data={data}/>
                        </div>
                        <div>
                            <p className="font-bold mb-4">Group F</p>
                            <Table columns={columns} data={data}/>
                        </div>
                    </div>
                    <div className="mt-12 ml-12">
                        <p className="font-bold mb-4">Teams</p>
                        <select name="teams" multiple size={22} className="form-multiselect block w-full border border-solid border-black">
                            {options.map(option => (
                                <option className="mt-1" value={option.value}>{option.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-12">
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 col-start-3">Save & Close
                    </button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 col-start-4">Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AllocateTeams;
