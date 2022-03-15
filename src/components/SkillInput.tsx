import React from "react";

import { ISkill } from "../shadowrun/skills";

import styles from './SkillInput.module.css';

interface IProps {
    skill: ISkill;
    readonly?: boolean;
    onSkillChanged: (skill: ISkill, newValue: number) => void;
}

export default class SkillInput extends React.Component<IProps> {
    public render(): React.ReactNode {
        const {skill, readonly} = this.props;

        const key = `${skill.key}_input`;

        return <div className={styles.container}>
            <label htmlFor={key}>{skill.name}</label>

            <input 
                type='number'
                key={key}
                name={key}
                id={key}
                value={skill.value ?? 0}
                max={skill.maxValue}
                min='1'
                readOnly={readonly}
                onChange={(event) => this.props.onSkillChanged(skill, Number(event.target.value))}
            />
        </div>;
    }
}