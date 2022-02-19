import * as React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import {ERROR_TITLE, ERROR_MSG} from "../../utils/messages";
import '@progress/kendo-theme-default/dist/all.css';
import * as PropTypes from "prop-types";

class AlertDialogComponent extends React.Component   {
    static propTypes = {
        /** Заголовок окна */
        title: PropTypes.string,
        /** Содерживое окна */
        content: PropTypes.string
    }

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
                    <Dialog minWidth={400} title={this.props.title ?? ERROR_TITLE} onClose={this.toggleDialog}>
                        <p
                            style={{
                                textAlign: "center",
                            }}
                        >
                            {this.props.content ?? ERROR_MSG}
                        </p>
                        <DialogActionsBar>
                            <button
                                className="btn close"
                                onClick={this.toggleDialog}
                            >
                                Close
                            </button>
                        </DialogActionsBar>
                    </Dialog>
                )}
            </div>
        );
    }
}
export default AlertDialogComponent;
