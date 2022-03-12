import {Context} from "../../index";
import {Dialog, Transition} from "@headlessui/react";
import Radiobox_filter_by_region from "../../components/radiobox_filter_by_region";
import Table from "../../components/table";
import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react'
import "../../components/Text_border_css.css";


const Edit_tournaments = ({show, onHide}) => {
    const [nameTournaments, setNameTournaments] = useState('')
    const [StartDateTournaments, setStartDateTournaments] = useState(null)
    const [EndDateTournaments, setEndDateTournaments] = useState(null)


    useEffect(()=>{

    },[])



    function closeModal() {
        onHide(true)
    }

    function Save_closeModal() {
        const regex_name = nameTournaments.replace(/^\s+|\s+$/g, '')
        if(regex_name == '')
        {
            alert("Пустое поле название турнира!!!!")
        }
        else if(StartDateTournaments == null)
        {
            alert("Не выбранная дата начала турнира!!!!")
        }
        else if(EndDateTournaments == null)
        {
            alert("Не выбранная дата конца турнира!!!!")
        }
        // else if()
        // {
        //     alert("Вы ничего не изменили !!!!")
        // }
        else
        {
            closeModal()
        }

    }


    const data2 = [
        {
            id: '1',
            participation: <input type="checkbox" />,
            team: "RUSSIA"
        },
        {
            id: '2',
            participation: <input type="checkbox" />,
            team: "RUSSIA"
        },
        {
            id: '3',
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
    ]), []);

    const radiobox_item =
        [
            'All',
            'Africa',
            'America',
            'Asia',
            'Europe',
            'others'
        ]
    return (
        <>
            <Transition appear show={show} as={Fragment} >
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
                                    <span className="ml-4 my-1">Edit Tournaments</span>

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
                                            <input
                                                type="text"
                                                className="border-solid border-2 border-black  px-2  w-full"
                                                value={nameTournaments}
                                                onChange={e =>setNameTournaments(e.target.value)}
                                                placeholder={"Enter the title tournaments"}
                                            />
                                        </div>
                                        <div className="flex space-x-10">
                                            <span className="flex-initial w-32">Start date</span>
                                            <input
                                                type="date"
                                                value={StartDateTournaments}
                                                onChange={e =>setStartDateTournaments(e.target.value)}
                                            />
                                            <span>End date</span>
                                            <input
                                                type="date"
                                                value={EndDateTournaments}
                                                onChange={e =>setEndDateTournaments(e.target.value)}
                                            />

                                        </div>
                                        <div className="flex space-x-10">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col">
                                                    <span className="whitespace-nowrap">Participating teams</span>
                                                    <span className="whitespace-nowrap">(2/24 selected)</span>
                                                </div>

                                                <fieldset>{/* className="mt-10 border-2 border-black border-dotted px-1 py-1"*/}
                                                    <legend>Filter by region</legend>
                                                    <Radiobox_filter_by_region items={radiobox_item}/>
                                                </fieldset>

                                            </div>
                                            <div className="w-full">
                                                <Table className="" columns={columns2} data={data2}/>
                                            </div>

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

export default Edit_tournaments;