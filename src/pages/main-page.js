import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import TournamentBracket from "../components/tournament-bracket";
import GroupTable from "../components/group-table";
import ComboBox from "../components/combobox";
import {getTournament, getTournaments} from "../api/tournament_api";
import { useNavigate} from 'react-router-dom';
import {transformDate} from "../shared/utils/constants";

const MainPage = () => {
    const history = useNavigate();
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [roundGames, setRoundGames] = useState()
    const [groupGames, setGroupGames] = useState()
    useEffect(async () => {
        const loadedTournaments = await getTournaments()
        setTournaments(loadedTournaments)
        setSelectedTournament(loadedTournaments[0])
        const loadedTournamentGames = await getTournament(loadedTournaments[0].id)
    }, [])

    useEffect(async () => {
        if(selectedTournament) {
            const {games:loadedTournamentGames} = await getTournament(selectedTournament.id)

            console.log(loadedTournamentGames)
            if (loadedTournamentGames) {
                setGroupGames(loadedTournamentGames.GROUP_STAGE)
                delete loadedTournamentGames.GROUP_STAGE
                setRoundGames(loadedTournamentGames)
            }
        }

    }, [selectedTournament])
    
    return (
        <div className="flex flex-col space-y-10 pb-10">
            {tournaments && tournaments.length > 0 && selectedTournament &&
            <div className="space-y-2">
                <ComboBox items={tournaments}
                          selectedItem={selectedTournament}
                          valueProperty="id"
                          labelProperty="name"
                          onSelectChanged={(item) => setSelectedTournament(item)}/>
                <p className="text-xs">{transformDate(selectedTournament.startDate)} - {transformDate(selectedTournament.endDate)}</p>
            </div>
            }

            {
                groupGames ?
                <>
                    <div className="p-5 bg-amber-100">
                        {roundGames && <TournamentBracket games={roundGames}/>}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                           groupGames && Object.entries(groupGames).map(([group, games]) =>
                                <GroupTable group={group} games={games} />
                           )
                        }
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <button onClick={() => history('/manage-execution')}
                                className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage execution
                        </button>
                    </div>
                </>
                    :
                <div className="bg-amber-100 rounded-lg p-5 text-center">
                    Игры пока не созданы(
                </div>
            }
        </div>
    );
};

export default MainPage;
