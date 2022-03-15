import React from "react";

import { ISkill, shadowrunSkills } from "../shadowrun/skills";
import { IAttribute, attributes } from "../shadowrun/attributes";
import AttributeStep from "./AttributesStep";
import SkillsStep from "./SkillsStep";

import styles from './ConversionWizard.module.css';

interface IProps {
    title: string;
}

interface IState {
    currentStep: number;
    character: IShadowrunCharacter;
}

interface IShadowrunCharacter {
    attributes: Map<string, IAttribute>;
    skills: Map<string, ISkill>;
}

export default class ConversionWizard extends React.Component<IProps, IState> {
    // private const finalStep = 3;

    constructor(props: IProps) {
        super(props);

        this.state = {
            currentStep: 0,
            character: {
                attributes: attributes,
                skills: shadowrunSkills
            }
        };

        this.attributeChanged = this.attributeChanged.bind(this);
        this.skillChanged = this.skillChanged.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    public render(): React.ReactNode {
        const {attributes, skills} = this.state.character;

        return <div className={styles.wizard}>
            {this.state.currentStep === 1 && 
                <AttributeStep
                    attributes={Array.from(attributes.values())}
                    attributeChanged={this.attributeChanged}
                    onNextStep={this.nextStep}
                    onPreviousStep={this.previousStep} />
            }

            {this.state.currentStep === 0 && 
                <SkillsStep
                    skills={Array.from(skills.values())}
                    skillChanged={this.skillChanged}
                    onNextStep={this.nextStep}
                    onPreviousStep={this.previousStep} />
            }
        </div>;
    }

    protected nextStep(): void {
        this.setState(prevState => {
            return {
                currentStep: prevState.currentStep + 1
            }
        });
    }

    protected previousStep(): void {
        this.setState(prevState => {
            return {
                currentStep: prevState.currentStep - 1
            }
        });
    }

    protected attributeChanged(attribute: IAttribute, newValue: number) {
        this.setState(prevState => {
            const newCharacter = prevState.character;
            const newAttribute = newCharacter.attributes.get(attribute.key);
            newAttribute.value = newValue;
            newCharacter.attributes.set(attribute.key, newAttribute);

            return {
                character: newCharacter
            };
        });
    }

    protected skillChanged(skill: ISkill, newValue: number) {
        this.setState(prevState => {
            const newCharacter = prevState.character;
            const newSKill = newCharacter.skills.get(skill.key);
            newSKill.value = newValue;
            newCharacter.skills.set(skill.key, newSKill);

            return {
                character: newCharacter
            };
        });
    }
}