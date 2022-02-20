import * as PropTypes from "prop-types";
import * as React from "react";

/**
 * Компонент для множественного отображения таблиц.
 * */
class MultipleTablesComponent extends React.Component{
    static propTypes = {
        /** Заголовки элементы грида */
        grids: PropTypes.arrayOf(PropTypes.any),
        /** Количество столбцов **/
        columns: PropTypes.number,
        /** Отступ мужду столбцами */
        colMargin: PropTypes.any,
    }

    render() {
        if (this.props.columns !== 0) {
            let iteratorCols = 1;
            let iteratorRows = 1;
            const gridStyles = {
                gridColumnGap: this.props.colMargin + 'px',
                gridRowGap: '3em',
                gridTemplateColumns:"repeat(" + this.props.columns + ",minmax(10px, 1fr))"}
            // TODO: знатоки React поправьте будет время
            return (
                <div
                    className={"grid text-yellow-700 text-lg content-start w-full h-full px-2 py-2 sm:px-0 grid-cols-" + this.props.columns}
                    style={gridStyles}>
                    {this.props.grids.map((grid) => {
                            if (iteratorCols > this.props.columns) {
                                iteratorCols = 1
                                iteratorRows++;
                            }
                            const row = "span " + iteratorRows + " / span " + grid.rows;
                            const col = "span " + grid.cols + " / span " + grid.cols;
                            iteratorCols += grid.cols
                            return (
                                <div key={iteratorRows+"|"+iteratorCols} style={{gridRow: row, gridColumn: col}}>
                                    <span>{grid.title}</span>
                                    {grid.component}
                                </div>
                            )
                        }
                    )}
                </div>
            );
        }
        return (<div>!!!</div>);
    }
}

export default MultipleTablesComponent;
