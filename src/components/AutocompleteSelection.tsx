import React from "react";
import classNames from "classnames";

import styles from './AutocompleteSelection.module.css'

export interface ISelectionOption {
    key: string;
    name: string;
}

interface IProps {
    items: ISelectionOption[];
    label: string;
    inputValue: string;
    selectedKeyChanged: (key: string) => void;
    inputValueChanged: (newValue: string) => void;
}

interface IState {
    showSelection: boolean;
    
}

export class AutocompleteSelection extends React.Component<IProps, IState> {
    protected input: React.RefObject<HTMLInputElement>;
    protected inputContainer: React.RefObject<HTMLDivElement>;

    constructor(props: IProps) {
        super(props);

        this.state = {
            showSelection: false
        };

        this.input = React.createRef();
        this.inputContainer = React.createRef();

        this.onInputChanged = this.onInputChanged.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    public componentDidMount(): void {
        document.addEventListener('click', this.onDocumentClick);
        document.addEventListener('keydown', this.onKeyDown);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('click', this.onDocumentClick);
        document.removeEventListener('keydown', this.onKeyDown);
    }

    protected onDocumentClick(event: MouseEvent): void {
        const node = event.target as HTMLElement;
        
        if (node === this.inputContainer.current ||
            this.inputContainer.current?.contains(node)) {
                return;
        }

        this.setState({ showSelection: false });
    }

    protected onKeyDown(event: KeyboardEvent): void {

    }

    public render(): React.ReactNode {
        return <React.Fragment>
            <div className={styles.inputContainer} ref={this.inputContainer}>
                <label htmlFor='selectionInput'>
                    {this.props.label}
                </label>

                <input
                    name='selectionInput'
                    id='selectionInput'
                    type='text'
                    onChange={this.onInputChanged}
                    value={this.props.inputValue}
                    autoComplete='off'
                    placeholder='Test'
                    ref={this.input}
                />

                {this.state.showSelection && this.renderSelection()}

                <span className={classNames('material-icons', styles.icon)} onClick={() => this.toggleSelection()}>
                    {this.state.showSelection ? 'unfold_less' : 'unfold_more'}
                </span>

                <span className={classNames('material-icons', styles.icon)} onClick={() => this.clear()}>clear</span>    
            </div> 
        </React.Fragment>;
    }

    protected onInputChanged(event: React.ChangeEvent<HTMLInputElement>): void {
        this.props.inputValueChanged(event.target.value);

        this.setState({ 
            showSelection: true 
        });
    }

    protected filterItems(term: string): ISelectionOption[] {
        const {items} = this.props;

        if (!term) {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0);
    }

    protected clear(): void {
        this.props.inputValueChanged('');

        this.setState({
            showSelection: false
        });
    }

    protected toggleSelection() {
        this.setState({ showSelection: !this.state.showSelection });
        this.input.current?.focus();
    }

    protected renderSelection(): React.ReactNode {
        const suggestions = this.filterItems(this.props.inputValue);

        return <div className={styles.suggestions}>
            {suggestions.map(item => this.renderSelectionItem(item))}
        </div>;
    }

    protected renderSelectionItem(item: ISelectionOption): React.ReactNode {
        return <div onClick={() => this.onItemSelected(item)} key={`${item.key}_suggestion`}>
            {item.name}
        </div>;
    }

    protected onItemSelected(item: ISelectionOption): void {
        this.setState({
            showSelection: false
        });

        this.props.selectedKeyChanged(item.key);
    }
}