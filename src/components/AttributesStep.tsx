import React from "react";

import { IAttribute } from "../shadowrun/attributes";
import WizardStep from './WizardStep';
import AttributeInput from "./AttributeInput";

interface IProps {
    onPreviousStep: () => void;
    onNextStep: () => void;
    attributes: IAttribute[];
    attributeChanged: (attribute: IAttribute, newValue: number) => void;
}

export default class AttributeStep extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.attributeChanged = this.attributeChanged.bind(this);
    }

    public render(): React.ReactNode {
        return <WizardStep
            isFirstStep
            isFinalStep={false}
            title='Shadowrun - Attribute'
            onNextStep={this.props.onNextStep}
            onPreviousStep={this.props.onPreviousStep}>
                {this.renderAttributes()}
        </WizardStep>
    }

    protected renderAttributes(): React.ReactNode {
        return <React.Fragment>
            {this.props.attributes.map(attr => <AttributeInput
                attribute={attr}
                onAttributeChanged={this.attributeChanged}
                key={`attr_${attr.key}`} />)}
        </React.Fragment>;
    }

    protected attributeChanged(attribute: IAttribute, newValue: number): void {
        this.props.attributeChanged(attribute, newValue);
    }
}