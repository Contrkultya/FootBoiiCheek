import {  useMemo } from 'react'
import MultipleTablesComponent from "../../shared/must-be-rework/multiple-tables-component";
import {TabStrip, TabStripTab} from "@progress/kendo-react-layout"
import * as React from "react";
import EditableGridTableComponent from "../../shared/components/editable-grid-table/editable-grid-table-component";
import {FORM_CONTROL_TYPE, TABLE_VIEW_MODE} from "../../shared/utils/constants";


class GameFormComponent extends React.Component {

    headers = ['START GRID', "EVENTS"]
    selected = 0;
    columns = 2; colMargin= 100;
    selection = React.useState(0);
    handleSelect = (e) => {
        this.selection[1](e.selected);
    };


    playerColumns = useMemo(() => ([
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Surname',
            accessor: 'sur'
        },
        {
            Header: 'Position',
            accessor: 'pos'
        }
    ]), ([]));

    firstTeamMembers = [];
    secondTeamMembers = [];

    grids = [{
        component:(<div></div>), // (<GridTableComponent key={'start'} columns={this.playerColumns} data={this.firstTeamMembers}></GridTableComponent>),
        title: 'К-1',
        cols: 1,
        rows: 1,
    },{
        component: (<div></div>), // (<GridTableComponent key={'events'} columns={this.playerColumns} data={this.secondTeamMembers}></GridTableComponent>),
        title: 'К-2',
        cols: 1,
        rows: 1,
    }
    ];

    eventTableModel = [
        {name:'min', type:FORM_CONTROL_TYPE.NUMBER, label:'Min'},
        {name:'event', label: 'Event', type:FORM_CONTROL_TYPE.OBJECT, available:[{id:0, name:'Red Card'}, {id:1, name:'Green Card'}]},
        {name:'team', label:'Team', type:FORM_CONTROL_TYPE.OBJECT, available:[{id:0, name:'K-1'}, {id:1, name:'K-2'}]},
        {name:'description', label: 'Desc', type: FORM_CONTROL_TYPE.STRING}
        ]

    eventColumns = useMemo(() => ([
        {
            Header: 'Min',
            accessor: 'min'
        },
        {
            Header: 'Team',
            accessor: 'team'
        },
        {
            Header: 'Event',
            accessor: 'event'
        },
        {
            Header: 'Additional information',
            accessor: 'description',
            minWidth: '400px',
        }
    ]), [])

    newColumns = [{title:'Min', field:'min', width:'100px'}, {title:'Team', field:'team.name'},{title:'Event',field:'event.name'}, {field:'description',title:'Additional information' }]

    eventData = []

    render() {
        return (<div className=" px-2 sm:px-0" style={{height:'100%'}}>
            <TabStrip className="h-full" selected={this.selection[0]} onSelect={this.handleSelect}>
                <TabStripTab key={this.headers[0]} title={this.headers[0]}>
                    <MultipleTablesComponent columns={this.columns} colMargin={this.colMargin} grids={this.grids}></MultipleTablesComponent>
                </TabStripTab>
                <TabStripTab title={this.headers[1]} key={this.headers[1]}>
                    <EditableGridTableComponent
                        model={this.eventTableModel} mode={TABLE_VIEW_MODE.DIALOG_EDIT}
                        columns={this.newColumns}
                        dataSource={[{ID: 0,min:1,team:{name:'Serb'},event:{name:'Red card'},description:'NULL'}]}>
                    </EditableGridTableComponent>
                </TabStripTab>
            </TabStrip>
        </div>);
    }
}
//  <GridTableComponent columns={this.eventColumns} data={this.eventData}></GridTableComponent>
export default GameFormComponent;

/*
*
* <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                {Object.keys(tabs).map((tab) => (
                    <Tab
                        key={tab}
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-yellow-700 rounded-lg',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-yellow-400 ring-white ring-opacity-60',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-white-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        {tab}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels style={ {'background': 'red'}} className="mt-2 ring-offset-2 py-2.5 h-full ring-offset-yellow-400">
                {Object.values(tabs).map((posts, idx) =>
                {
                    return (
                    <Tab.Panel
                        key={idx}
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none h-full focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                        )}
                    >

                            {posts.component(posts.properties)}

                    </Tab.Panel>
                )})}
            </Tab.Panels>
        </Tab.Group>
*
* */
