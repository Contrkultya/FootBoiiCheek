import React, {useEffect, useState} from 'react';
import TournamentBracket from "../components/tournament-bracket";
import GroupTable from "../components/group-table";
import ComboBox from "../components/combobox";
import {getTournaments} from "../api/tournament_api";
import {transformDate} from "../shared/utils/constants";

const MainPage = () => {
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    useEffect(async () => {
        const loadedTournaments = await getTournaments()
        setTournaments(loadedTournaments)
        setSelectedTournament(loadedTournaments[0])
    }, [])


    return (
        <div className="flex flex-col space-y-10">
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
            <TournamentBracket/>
            <div className="grid grid-cols-3 gap-4">
                <GroupTable/>
                <GroupTable/>
                <GroupTable/>
                <GroupTable/>
                <GroupTable/>
                <GroupTable/>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MainPage;
