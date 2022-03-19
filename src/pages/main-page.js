import React, {useEffect, useState} from 'react';
import TournamentBracket from "../components/tournament-bracket";
import GroupTable from "../components/group-table";
import ComboBox from "../components/combobox";
import {getTournament, getTournaments} from "../api/tournament_api";
import {transformDate} from "../shared/utils/constants";

const MainPage = () => {
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [roundGames, setRoundGames] = useState()
    const [groupGames, setGroupGames] = useState()
    useEffect(async () => {
        const loadedTournaments = await getTournaments()
        setTournaments(loadedTournaments)
        setSelectedTournament(loadedTournaments[0])
        const loadedTournamentGames = await getTournament(loadedTournaments[0])
    }, [])

    useEffect(async () => {
        const loadedTournamentGames = await getTournament(selectedTournament.id)

        if(loadedTournamentGames.length > 0)
        {
            setGroupGames(loadedTournamentGames.filter(game => game.stage === 'Group stage'))
            setRoundGames(loadedTournamentGames.filter(game => game.stage !== 'Group stage'))
        }

    }, [selectedTournament])

    return (
        <div className="flex flex-col space-y-10 overflow-y-scroll">
            {tournaments.length > 0 && selectedTournament &&
                <div className="space-y-2">
                    <ComboBox items={tournaments}
                              selectedItem={selectedTournament}
                              valueProperty="id"
                              labelProperty="name"
                              onSelectChanged={(item) => setSelectedTournament(item)}/>
                    <p className="text-xs">{transformDate(selectedTournament.startDate)} - {transformDate(selectedTournament.endDate)}</p>
                </div>
            }
            <TournamentBracket games={roundGames}/>
            <div className="grid grid-cols-3 gap-4">
                {
                    ['A', 'B', 'C', 'D', 'E', 'F'].map(group =>
                        <GroupTable group={group} games={groupGames.map(game => game.homeTeam.group === group)} />
                    )
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default MainPage;
