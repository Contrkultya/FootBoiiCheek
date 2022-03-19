import React, {useEffect, useMemo, useState} from 'react';
import Table from "../components/table";
import {getTeams} from "../api/teams_api";
import EditableGridTableComponent from "../shared/components/editable-grid-table";
import {$host} from "../api";
import {FORM_CONTROL_TYPE} from "../shared/utils/constants";
import {TeamCustomEditorForm} from "../components/custom-forms";

const ManageTeams = () => {

    const [teams, setTeams] = useState([]);
    useEffect(async () => {
        const loadedTeams = await getTeams()
        setTeams(loadedTeams)
    }, [])

    const flagCell = (e) => {
        return <td className="flex justify-center">
            { e.dataItem.flag && <img className="w-10 h-8" src={$host.defaults.baseURL + '/' + e.dataItem.flag}/> }
        </td>
    }

    return (
        <div className="h-full">
            <EditableGridTableComponent
                columns={[
                    {field: 'id', title: 'ID'},
                    {field: 'flag', title: 'Флаг', cell: flagCell},
                    {field: 'name', title: 'Команда'},
                    {field: 'countryCode', title: 'Код'}
                ]}
                dataSource={teams}
                sourceUrl={$host.defaults.baseURL+'/api/teams/'}
                editorForm={TeamCustomEditorForm}
                model={
                    [
                        {name: 'name', type: FORM_CONTROL_TYPE.STRING, available:[], label: 'Название команды'},
                        {name: 'flag', type: FORM_CONTROL_TYPE.STRING, available: [], label: 'Флаг'},
                        {name: 'countryCode', type: FORM_CONTROL_TYPE.STRING, available: [], label: 'Код страны'},
                    ]
                }/>
        </div>
    );
};

export default ManageTeams;
