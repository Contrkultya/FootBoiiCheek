import React, {useEffect, useMemo, useState} from 'react';
import Table from "../components/table";
import {getTeams} from "../api/teams_api";
import EditableGridTableComponent from "../shared/components/editable-grid-table";
import {$host} from "../api";
import {FORM_CONTROL_TYPE} from "../shared/utils/constants";

const ManageTeams = () => {

    const [teams, setTeams] = useState([]);
    useEffect(async () => {
        const loadedTeams = await getTeams()
        setTeams(loadedTeams)
    }, [])

    return (
        <>
            <div className="h-full">
                <EditableGridTableComponent
                    columns={[
                        {field: 'id', title: 'ID'},
                        {field: 'flag', title: 'Флаг'},
                        {field: 'name', title: 'Команда'},
                        {field: 'countryCode', title: 'Код'}
                    ]}
                    dataSource={teams}
                    sourceUrl={$host.defaults.baseURL+'/api/teams/'}
                    model={
                        [
                            {name: 'name', type: FORM_CONTROL_TYPE.STRING, available:[]},
                            {name: 'flag', type: FORM_CONTROL_TYPE.STRING, available: []},
                            {name: 'countryCode', type: FORM_CONTROL_TYPE.STRING, available: []},
                        ]
                    }/>
            </div>
        </>
    );
};

export default ManageTeams;
