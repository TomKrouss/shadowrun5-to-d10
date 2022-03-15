import React from "react";

import styles from './WizardStep.module.css';

interface IProps {
    isFinalStep: boolean;
    isFirstStep: boolean;
    title: string;
    onPreviousStep: () => void;
    onNextStep: () => void;
}

export default class WizardStep extends React.Component<IProps> {
    public render(): React.ReactNode {
        return <React.Fragment>
            <div><h1>{this.props.title}</h1></div>
            
            <div className={styles.content}>
                {this.props.children}
            </div>

            {!this.props.isFirstStep &&
                <button type="button" onClick={this.props.onPreviousStep}>Zurück</button>}

            {!this.props.isFinalStep &&
                <button type="button" onClick={this.props.onNextStep}>Weiter</button>}
        </React.Fragment>
    }
}