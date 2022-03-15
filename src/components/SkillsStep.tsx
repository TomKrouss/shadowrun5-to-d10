import React from 'react';
import { differenceWith } from 'lodash';

import { AddItemSelection } from "./AddItemSelection";
import { ISkill } from "../shadowrun/skills";
import WizardStep from './WizardStep';
import SkillInput from './SkillInput';

interface IProps {
    onPreviousStep: () => void;
    onNextStep: () => void;
    skills: ISkill[];
    skillChanged: (skill: ISkill, newValue: number) => void;
}

interface IState {
    selectedSkills: ISkill[];
}

export default class SkillsStep extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedSkills: this.props.skills.filter(skill => skill.value > 0)
        };

        this.addSkillToSelection = this.addSkillToSelection.bind(this);
        this.onSkillChanged = this.onSkillChanged.bind(this);
    }

    public render(): React.ReactNode {
        return <WizardStep
            isFirstStep={false}
            isFinalStep
            title='Shadowrun - Fertigkeiten'
            onNextStep={this.props.onNextStep}
            onPreviousStep={this.props.onPreviousStep}>
                {this.renderSkillSelection()}

                {this.renderSkillList()}
        </WizardStep>;
    }

    protected renderSkillSelection(): React.ReactNode {
        const skillsForSelection = differenceWith(this.props.skills,
            this.state.selectedSkills,
            (a, b) => a.key === b.key);

        return <AddItemSelection<ISkill>
                    getKey={item => item.key}
                    getText={item => item.name}
                    items={skillsForSelection}
                    label='Fertigkeit'
                    onItemAdded={this.addSkillToSelection}
                />;
    }

    protected addSkillToSelection(skill: ISkill): void {
        this.setState( prevState => {
            const selectedNew = prevState.selectedSkills;
            selectedNew.push(skill);

            return { selectedSkills: selectedNew };
        })
    }

    protected renderSkillList(): React.ReactNode {
        return <React.Fragment>
            {this.state.selectedSkills.map(skill => 
                <SkillInput
                    skill={skill}
                    key={`${skill.key}_input`}
                    onSkillChanged={this.onSkillChanged}
                />)}
        </React.Fragment>;
    }

    protected onSkillChanged(skill: ISkill, newValue: number) {
        this.props.skillChanged(skill, newValue);
    }
}