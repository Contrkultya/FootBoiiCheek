import React from 'react';

const GroupTable = ({group, games}) => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg bg-amber-100">
            <div className="rounded-t-lg bg-mustard text-white text-center px-5 py-1 font-semibold text-xl">Группа {group}</div>
            <div className="flex flex-col justify-center items-center">
                {
                    games.map((game, index) => (
                        <>
                            <div className="w-full flex justify-between rounded-lg py-2 px-4 items-center font-semibold">
                                <div
                                    className={`text-center flex-grow py-1 
                                    ${game.homeTeamResult > game.guestTeamResult && 'bg-mustard text-white rounded'}`}>
                                    { game.homeTeam.team.name }
                                </div>
                                <div className="w-1/5 text-center">{ game.started ? `${game.homeTeamResult} - ${game.guestTeamResult}` : ' - '}</div>
                                <div
                                    className={`text-center flex-grow py-1 
                                    ${game.homeTeamResult < game.guestTeamResult && 'bg-mustard text-white rounded'}`}>
                                    { game.guestTeam.team.name }
                                </div>
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
