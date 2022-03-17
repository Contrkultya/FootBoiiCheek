import React, {useMemo} from 'react';
import Table from "../components/table";
import EditableGridTableComponent from "../shared/components/editable-grid-table/editable-grid-table-component";
import {FORM_CONTROL_TYPE, TABLE_VIEW_MODE} from "../shared/utils/constants";
import {TabStripTab} from "@progress/kendo-react-layout";
import MultipleTablesComponent from "../shared/must-be-rework/multiple-tables-component";
import {ListBox,processListBoxDragAndDrop} from "@progress/kendo-react-listbox";

class AllocateTeams extends React.Component{
    state = {
        draggedItem: {},
        options: [],
        table: []
    };
    constructor() {
        super();
        this.state ={
            draggedItem: {},
            options: [
                {
                    id: 1,
                    team: 'Belgium'
                },
                {
                    id: 2,
                    team: 'Germany'
                },
                {
                    id: 3,
                    team: 'England'
                },
                {
                    id: 4,
                    team: 'Iceland'
                },
                {
                    id: 5,
                    team: 'Italy'
                },
            ],
            table: [
                {
                    ID: 0,
                    shortname:1,
                    team:"RU"
                }]
        }
    }
    handleDragStart = (e) => {
        this.setState({
            draggedItem: e.dataItem,
        });
    };
    handleDrop = (e) => {
        let result = processListBoxDragAndDrop(
            this.state.options,
            this.state.table,
            this.state.draggedItem,
            e.dataItem,
            "team"
        );
        this.setState({
            options: result.listBoxOneData,
            table: result.listBoxTwoData,
        });
    };

    columnsHeaders = [{title:'Shortname', field:'shortname'}, {title:'Team', field:'team'}];
    tables = [{
        component:(
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={this.state.table}
                onDragStart={this.handleDragStart}
                onDrop={this.handleDrop}>
            </EditableGridTableComponent>
        ),
        title: 'Group A',
        cols: 1,
        rows: 1,
    },{
        component: (
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={[{ID: 0,shortname:1,team:"RU"}]}>
            </EditableGridTableComponent>
        ),
        title: 'Group B',
        cols: 1,
        rows: 1,
    },{
        component: (
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={[{ID: 0,shortname:1,team:"RU"}]}>
            </EditableGridTableComponent>
        ),
        title: 'Group C',
        cols: 1,
        rows: 1,
    },{
        component: (
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={[{ID: 0,shortname:1,team:"RU"}]}>
            </EditableGridTableComponent>
        ),
        title: 'Group D',
        cols: 1,
        rows: 1,
    },{
        component: (
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={[{ID: 0,shortname:1,team:"RU"}]}>
            </EditableGridTableComponent>
        ),
        title: 'Group E',
        cols: 1,
        rows: 1,
    },{
        component: (
            <EditableGridTableComponent
                mode={TABLE_VIEW_MODE.READ}
                columns={this.columnsHeaders}
                dataSource={[{ID: 0,shortname:1,team:"RU"}]}>
            </EditableGridTableComponent>
        ),
        title: 'Group F',
        cols: 1,
        rows: 1,
    }];
    render(){
        return (
            <div>
                <div className="max-w-6xl mx-auto font-tahoma p-12">

                    <div className="grid grid-cols-4 mt-12">
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Allocate randomly
                        </button>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="mt-12 col-span-3">
                            <MultipleTablesComponent columns={3} colMargin={'20px'} grids={this.tables}> </MultipleTablesComponent>
                        </div>
                        <div className=" mt-12 ml-12">
                            <p className="font-bold mb-4">Teams</p>
                            <ListBox
                                data={this.state.options}
                                textField="team"
                                style={{width:"100%", height:"97%"}}
                                onDragStart={this.handleDragStart}
                                onDrop={this.handleDrop}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-12">
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 col-start-3">Save & Close
                        </button>
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 col-start-4">Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllocateTeams;
