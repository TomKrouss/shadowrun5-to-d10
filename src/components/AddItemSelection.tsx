import React from "react";

import { AutocompleteSelection } from "./AutocompleteSelection";

import styles from './AddItemSelection.module.css';

interface IProps<T> {
    items: T[];
    label: string;
    getKey: (item: T) => string;
    getText: (item: T) => string;
    onItemAdded: (item: T) => void;
}

interface IState<T> {
    selectedItem: T;
    inputValue: string;
}

export class AddItemSelection<T extends object> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>) {
        super(props);

        this.state = {
            selectedItem: null,
            inputValue: ''
        };

        this.selectedItemChanged = this.selectedItemChanged.bind(this);
        this.inputValueChanged = this.inputValueChanged.bind(this);
        this.itemAdded = this.itemAdded.bind(this);
    }

    public render(): React.ReactNode {
        const {getKey, getText} = this.props;

        const options = this.props.items.map(item => {
            return { name: getText(item), key: getKey(item) }
        });

        return <div className={styles.container}>
            <AutocompleteSelection 
                label={this.props.label}
                inputValue={this.state.inputValue}
                selectedKeyChanged={this.selectedItemChanged}
                inputValueChanged={this.inputValueChanged}
                items={options} />

            <button className={styles.addButton}
                type='button'
                disabled={!this.state.selectedItem}
                onClick={this.itemAdded}>
                    Hinzufügen
            </button>
        </div>;
    }

    protected itemAdded(): void {
        this.props.onItemAdded(this.state.selectedItem);

        this.setState({ inputValue: '' });
    }

    protected selectedItemChanged(key: string): void {
        const {items, getKey, getText} = this.props;

        const selectedItem = items.find(item => getKey(item) === key);

        this.setState( {
            selectedItem: selectedItem,
            inputValue: getText(selectedItem)
        });
    }

    protected inputValueChanged(newValue: string) {
        this.setState({ inputValue: newValue });
    }
}