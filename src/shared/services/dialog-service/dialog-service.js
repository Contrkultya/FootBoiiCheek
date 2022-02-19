import {SaveCloseDialogComponent, AwaitDialogComponent, AlertDialogComponent} from "../../components/dialog-windows";

/**
 * Класс для получения диалоговых окон
 */
export class DialogService {
    /**
     * Модальное окно сообщения об ошибке.
     * @param {string} title - заголовок окна, по умолчанию {@link ERROR_TITLE}.
     * @param {string | object} content - содержимое окна, по умолчанию {@link ERROR_MSG}.
     */
    static alert(title = undefined, content = undefined) {
        return (<AlertDialogComponent title={title} content={content}></AlertDialogComponent>);
    }
    /**
     * Модальное окно с функцие закрыть сохранив.
     * @param {string} title - заголовок окна.
     * @param {string | object} content - содержимое окна, по умолчанию {@link NO_DATA_AVAILABLE}.
     * @param {number} width - стартовая ширина.
     * @param {number} height - стартовая высота.
     * @param {boolean} resizable - допустимо ли изменение размеров окна, по умолчанию True.
     * @param {function} onSave - действие производимое при закрытии с сохранением.
     */
    static saveClose(title = undefined, content = undefined, width = 0, height=0, resizable = true, onSave = ()=>{}, onClose = ()=>{}) {
        return (<SaveCloseDialogComponent initialSize={{height, width}} resizable={resizable} title={title} content={content} onSaveClose={onSave} onClose={onClose}></SaveCloseDialogComponent>);
    }
    /**
    * Модальное окно с бесконечным индикатором загрузки.
    */
    static await() {
        return (<AwaitDialogComponent></AwaitDialogComponent>)
    }
}
