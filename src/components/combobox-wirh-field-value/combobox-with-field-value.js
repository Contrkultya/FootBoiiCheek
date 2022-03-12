import * as React from 'react';

const isPresent = (value) => value !== null && value !== undefined;

const ComboboxWithFieldValue = (DropDownComponent) => {
    return class WithValueField extends React.Component {
        events = {
            onBlur: (event) => this.triggerEvent("onBlur", event),
            onFocus: (event) => this.triggerEvent("onFocus", event),
            onChange: (event) => this.triggerEvent("onChange", event),
            onPageChange: (event) => this.triggerEvent("onPageChange", event),
            onFilterChange: (event) => this.triggerEvent("onFilterChange", event),
        };

        get value() {
            if (this.component) {
                const value = this.component.value;
                return isPresent(value) ? value[this.props.valueField || ""] : value;
            }
        }

        get element() {
            return this.component && this.component.element;
        }

        get actionElement() {
            return this.component && this.component.actionElement;
        }

        get name() {
            return this.component ? this.component.name : undefined;
        }

        get validity() {
            return this.component && this.component.validity;
        }

        get validityStyles() {
            return this.component && this.component.validityStyles;
        }

        get required() {
            return this.component && this.component.required;
        }

        focus() {
            if (this.component) {
                this.component.focus();
            }
        }

        render() {
            return (
                <DropDownComponent
                    {...this.props}
                    value={this.itemFromValue(this.props.value)}
                    ref={(dropdown) => (this.component = dropdown)}
                    {...this.events}
                />
            );
        }

        triggerEvent = (eventType, event) => {
            if (this.props[eventType]) {
                this.props[eventType].call(undefined, {
                    ...event,
                    value: this.value,
                    target: this,
                });
            }
        };

        itemFromValue(value) {
            const {data = [], valueField} = this.props;
            return isPresent(value)
                ? data.find((item) => item[valueField || ""] === value)
                : value;
        }
    }
};

export default ComboboxWithFieldValue;
