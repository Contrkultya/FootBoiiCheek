import { Dialog, Transition } from '@headlessui/react'
import React, {Fragment, useMemo, useState} from 'react'
import Table from "../components/table";

const ManageTeams = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function Save_closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
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

    const data2 = [
        {
            participation: <input type="checkbox" />,
            team: "RUSSIA"
        },
        {
            participation: <input type="checkbox" />,
            team: "RUSSIA"
        },
        {
            participation: <input type="checkbox" />,
            team: "RUSSIA"
        }
    ];

    const columns2 = useMemo(() => ([
        {
            Header: 'Participation',
            accessor: 'participation'
        },
        {
            Header: 'Team',
            accessor: 'team'
        }
    ]), []);//onClick={openModal}

    return (
        <>
            <div className="max-w-6xl mx-auto font-tahoma p-12">
                <div className="flex flex-col space-y-12">
                    <Table columns={columns} data={data}/>
                </div>
                <div className="w-full flex justify-between mt-12 space-x-12">
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1" onClick={openModal} >Add</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1" onClick={openModal} >Edit</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Delete</button>
                    <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Close</button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment} >
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center" >

                        <Transition.Child
                            as={Fragment}
                        >
                            <div
                                 className="inline-block   overflow-hidden text-left  transition-all transform bg-white shadow-xl border border-black">
                                <Dialog.Title
                                    className="flex justify-between border-b-2 border-black "
                                >
                                    <span className="mx-4">Add/Edit Tournaments</span>

                                    <button
                                        className="mx-4 text-2xl"
                                        onClick={closeModal}
                                    >
                                        X
                                    </button>

                                </Dialog.Title>

                                <div className="max-w-6xl mx-auto font-tahoma p-10">
                                    <div className="flex flex-col space-y-10">
                                        <div className="flex space-x-10 ">
                                            <span className="whitespace-nowrap">Tournament name</span>
                                            <input type="text" className="border-solid border-2 border-black  px-2  w-full" value="European Championship"/>
                                        </div>
                                        <div className="flex space-x-10">
                                            <span className="flex-initial w-32">Start date</span>
                                            <input type="date" value="2022-12-12"/>
                                            <span>End date</span>
                                            <input type="date" value="2022-12-12"/>

                                        </div>
                                        <div className="flex space-x-10">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col">
                                                    <span className="whitespace-nowrap">Participating teams</span>
                                                    <span className="whitespace-nowrap">(2/24 selected)</span>
                                                </div>

                                                <div className="mt-10 border-2 border-black border-dotted pl-2 py-4" >
                                                    {/*<span className="">Filter by region</span>*/}
                                                    <div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                                checked
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault1">
                                                                All
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2">
                                                                Africa
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2">
                                                                America
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2">
                                                                Asia
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2">
                                                                Europe
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-mustard checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2">
                                                                others
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Table className="" columns={columns2} data={data2}/>
                                        </div>


                                    </div>

                                    <div className="flex justify-end  mt-10 space-x-10">
                                        <div className="flex-initial w-32">
                                            <button
                                                className="bg-mustard hover:bg-bear text-black font-bold py-2 w-full"
                                                onClick={Save_closeModal}
                                            >
                                                Save & Close
                                            </button>
                                        </div>
                                        <div className="flex-initial w-32">
                                            <button
                                                className="bg-mustard hover:bg-bear text-black font-bold py-2 w-full"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ManageTeams;