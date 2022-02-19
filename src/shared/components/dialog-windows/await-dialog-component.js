import * as React from "react";
import {Dialog} from "@progress/kendo-react-dialogs";
import {AWAIT_TITLE} from "../../utils/messages";
import {Loader} from "@progress/kendo-react-indicators";


/**
 * Примитивное оокно с индикатором загрузки
 */
class AwaitDialogComponent extends React.Component {

    state = {
        visible: true,
    };
    toggleDialog = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    render() {
        return (
            <div>
                {this.state.visible && (
                    <Dialog minWidth={120} height={120} title={AWAIT_TITLE} onClose={this.toggleDialog}>
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Loader type="converging-spinner" ></Loader>
                        </div>
                    </Dialog>
                )}
            </div>
        );
    }

}
export default AwaitDialogComponent;
