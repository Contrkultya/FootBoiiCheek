import React from 'react';

const GroupTable = ({group, games}) => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg">
            <div className="rounded-t-lg bg-mustard text-white text-center px-5 py-1 font-semibold text-xl">Группа {group}</div>
            <div className="flex flex-col justify-center items-center">
                {
                    games.map((game, index) => (
                        <>
                            <div className="w-full flex justify-between rounded-lg py-2 px-4 items-center font-semibold ">
                                <div className="text-center flex-grow bg-mustard text-white rounded py-1">{ game.homeTeam.team.name }</div>
                                <div className="w-1/5 text-center">{ game.finished ? `${game.homeTeamResult} - ${game.guestTeamResult}` : ' - '}</div>
                                <div className="text-center flex-grow py-1">{ game.guestTeam.team.name }</div>
                            </div>
                            {
                                index === games.length - 1 && <hr className="border-b border-b-mustard w-full"/>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default GroupTable;
