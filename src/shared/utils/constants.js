/** Режим открытия таблицы {@link EditableGridTableComponent}*/
export const TABLE_VIEW_MODE = Object.freeze({READ:0,CELL_EDIT:1,DIALOG_EDIT:2})
/** Тип контрола на форме*/
export const FORM_CONTROL_TYPE = Object.freeze({STRING:'string',NUMBER:'number',DATE:'Date',OBJECT:'object',BOOL:'boolean'})
/** Клонпирование без ссылок */
export const DEEP_CLONE_FUNC = (item) =>{
    if (Object.prototype.toString.call(item) === '[object Array]')
    {
        let clone = [];
        for (let i=0; i<item.length; i++)
            clone[i] = DEEP_CLONE_FUNC(item[i]);

        return clone;
    }
    else if (typeof(item)=="object")
    {
        let clone = {};
        for (let prop in item)
            if (item.hasOwnProperty(prop))
                clone[prop] = DEEP_CLONE_FUNC(item[prop]);

        return clone;
    }
    else
        return item;
}
