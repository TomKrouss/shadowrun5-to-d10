import React from "react";

import { IAttribute } from "../shadowrun/attributes";

import styles from './AttributeInput.module.css';

interface IProps {
    attribute: IAttribute;
    readonly?: boolean;
    onAttributeChanged: (attribute: IAttribute, newValue: number) => void;
}

export default class AttributeInput extends React.Component<IProps> {
    public render(): React.ReactNode {
        const {attribute, readonly, onAttributeChanged} = this.props;

        const key = `${attribute.key}_input`;

        return <div className={styles.container}>
            <label htmlFor={key}>{attribute.name}</label>
            
            <input 
                type='number'
                key={key}
                name={key}
                id={key}
                value={attribute.value ?? attribute.minValue}
                min={attribute.minValue}
                max={attribute.maxValue}
                readOnly={readonly}
                onChange={(event) => onAttributeChanged(attribute, Number(event.target.value))}
            />
        </div>;
    }
}