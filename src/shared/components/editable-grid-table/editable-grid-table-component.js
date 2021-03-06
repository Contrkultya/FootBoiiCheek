import * as React from "react";
import * as PropTypes from "prop-types";
import {Grid, GridColumn, GridToolbar} from "@progress/kendo-react-grid";
import {DEEP_CLONE_FUNC, TABLE_VIEW_MODE} from "../../utils/constants";
import FormEditorComponent from "../form-editor";
import DialogService from "../../services/dialog-service";
import {guid} from "@progress/kendo-react-common";
import axios from "axios";

/**
 * Редактируемая таблица
 */
class EditableGridTableComponent extends React.Component {

    constructor(props) {
        super(props)
        this.onDialogCLose = this.onDialogCLose.bind(this);
    }
    componentDidMount() {
        if (this.props.sourceUrl !== '')
            setTimeout(()=>{ this.fetchRecords().then();})
    }

    state = {
        await: false,
        skip: 0,
        take: 10,
        selected: null,
        hasChanges: false,
        editIndex: null,
        dialogOpen: false,
        selectedState: {},
        data: this.props.dataSource
    }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take,
        });
    };


    static propTypes = {
        /** Видимые столбцы */
        columns: PropTypes.arrayOf(PropTypes.object),
        /** Данные для отображения */
        dataSource: PropTypes.arrayOf(PropTypes.any),
        /** Режим открытия использовать для назначения {@link TABLE_VIEW_MODE} */
        mode: PropTypes.number,
        /** Модель данных, формат - массив объектов {name:string, type:{@link FORM_CONTROL_TYPE}, available:Array} */
        model: PropTypes.any,
        /** Компонет формы редактирования */
        editorForm: PropTypes.any,
        sourceUrl: PropTypes.string,
    }

    static defaultProps = {
        mode: TABLE_VIEW_MODE.DIALOG_EDIT,
        editorForm: null,
        model: {},
        dataSource: [],
        sourceUrl: '',
    }

    onDialogCLose() {
        let newDataState = [];
        if (this.state.selected?.id != null) {
            const index = this.state.data.indexOf(this.state.data.find(i=>i.id ===this.state.selected.id));
            newDataState = this.state.data;
            newDataState[index] = this.state.selected;
        } else {
            newDataState = [...this.state.data];
            newDataState.unshift({...this.state.selected,
                id: guid(),
            });
        }
        this.setState({
            data: newDataState,
            selected: null,
            dialogOpen: false
        })
        setTimeout(()=>{this.hasChanges()})
    }

    upDateItem = (e) => {
        const dataItem = this.state.selected;
        dataItem[e.name] = e.value;
        this.setState({selected: dataItem});
    }

    hasChanges = () => {
        const changes = this.state.data.find(i => typeof(i.id) !== 'number' || i.prefab != null)
        this.setState({hasChanges: !!changes})
    }

    getEditorForm(){
        let form = null;
        if (!this.props.editorForm)
            form = (<FormEditorComponent key={'form'} dataItem={this.state.selected} onDataChange={this.upDateItem} model={this.props.model}></FormEditorComponent>)
        else {
            form = (new this.props.editorForm({dateItem:this.state.selected, onDataChange: this.upDateItem, model: this.props.model})).render();
        }
        return form;
    }
    dialogCancel = () =>{
        const newDataState = this.state.data;
        if (this.state.selected?.id != null) {
            const index = this.state.data.indexOf(this.state.data.find(i=>i.id===this.state.selected.id));
            newDataState[index] = this.state.selected.prefab;
        }
        this.setState({
            data: newDataState,
            selected: null,
            dialogOpen: false
        })
        setTimeout(()=>{this.hasChanges()})
    }

    getEditorDialog() {
        return DialogService.saveClose(this.state.selected?.name ?? 'Новая запись', this.getEditorForm(), -1, -1, false, this.onDialogCLose, this.dialogCancel);
    }

    onAddClick = () => {
        this.onRowAction({
            rowIndex: this.state.data.length,
            operation: "add",
        });
    };
    setEditIndex = (index) => {
        this.setState({
            editIndex: index,
        });
    };

    fetchRecords =  async () => {
        this.setState({await: true});
        await axios.get(this.props.sourceUrl).then((records) =>
            this.setState({
                data: records.data,
                editIndex: undefined,
                selected: null,
                await: false,
            })
        );
    }

    onRowAction = (options) => {
        const newDataState = [...this.state.data];
        switch (options.operation) {
            case "remove":
                newDataState.splice(options.rowIndex, 1);
                this.setState({
                    data:newDataState,
                    selected: null,
                })
                break;

            case "save":
                const req$ = [];
                this.state.data.forEach(record=> {
                    console.log(typeof record.id)
                    const endRe = (typeof record.id === 'number' ? record.id : '' );
                    let req;
                    if (endRe === '') {
                        record = {...record, id: null};
                        req = axios.post(this.props.sourceUrl, record);
                    }
                    else
                        req = axios.put(this.props.sourceUrl + `/${endRe}`, record);
                    req$.push(req);
                })
                Promise.all(req$).then(async ()=> {
                        await this.fetchRecords();
                    }
                )
                break;

            case "add":
                if (this.props.mode === TABLE_VIEW_MODE.DIALOG_EDIT) {
                    this.setState({
                        selected: {},
                        dialogOpen: true
                    })
                }else {

                }
                break;
            case 'edit':
                if (this.props.mode === TABLE_VIEW_MODE.DIALOG_EDIT) {
                    const selectedWithPref = this.state.selected;
                    selectedWithPref.prefab = DEEP_CLONE_FUNC(this.state.selected);
                    this.setState({
                        selected: selectedWithPref,
                        dialogOpen: true
                    })
                }else {

                }
                break;
            default:
        }

        this.setState({
            data: newDataState,
        });
    };

    edit = () => {
        this.setState({editIndex: this.state.data.indexOf(this.state.selected)})
        this.onRowAction({operation:'edit'})
    }

    remove = () => {
        let id = typeof this.state.selected.id === 'number' ? `/${this.state.selected.id}` : '';
        if(id ==='') {
            this.onRowAction({operation: 'remove', rowIndex: this.state.data.indexOf(this.state.selected)})
            setTimeout(() => {
                this.hasChanges()
            })
        }
        else {
            axios.delete(this.props.sourceUrl + id).then(()=>
                this.fetchRecords().then()
            )
        }
    }

    onSelectionChange = (e) => {
        this.setState({selected: !e.ctrlKey ? this.state.data[e.endRowIndex] : null})
    }

    render() {
        return (<div key={'wind'} className='h-full w-full'>
            {this.state.await ? DialogService.await() : null}
            {this.state.dialogOpen ? this.getEditorDialog() : null}
            <Grid
                className="h-full"
                skip={this.state.skip}
                take={this.state.take}
                total={this.state.data.length}
                pageable={true}
                dataItemKey={'id'}
                selectedField={'SELECTION_KEY'}
                selectable={{enabled: true,mode:'single'}}
                onSelectionChange={this.onSelectionChange}
                navigatable={true}
                data={this.state.data.slice(
                    this.state.skip,
                    this.state.take + this.state.skip
                ).map(item=> ({...item,SELECTION_KEY: this.state.selected?.id===item.id}))}
                onPageChange={this.pageChange}>
                {this.props.mode !== TABLE_VIEW_MODE.READ && <GridToolbar>
                    <button key={'add'} onClick={this.onAddClick} className='btn toolbar-btn'>Add</button>
                    <button key={'save'} onClick={()=>this.onRowAction({operation:'save'})} disabled={!this.state.hasChanges} className='btn toolbar-btn'>Save</button>
                    <button key={'edit'} onClick={this.edit} disabled={!this.state.selected} className='btn toolbar-btn close'>Edit</button>
                    <button key={'remove'} onClick={this.remove} disabled={!this.state.selected} className='btn toolbar-btn close'>Remove</button>
                </GridToolbar>}
                {this.props.columns.map(col=>{
                    return (<GridColumn cell={col?.cell} key={col.field +"|"+col.field} title={col.title} field={col.field} width={col.width ?? 'auto'} ></GridColumn>)
                })}
            </Grid>
        </div>)
    }
}

export default EditableGridTableComponent;

