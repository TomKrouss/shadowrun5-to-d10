export interface IAttribute {
    key: string;
    name: string;
    maxValue: number;
    minValue: number;
    value?: number;
}

export const attributes: Map<string, IAttribute> = new Map([
    ['strength', {
        key: 'strength',
        name: 'Stärke',
        minValue: 1,
        maxValue: 10
    }],
    ['dexterity', {
        key: 'dexterity',
        name: 'Geschicklichkeit',
        minValue: 1,
        maxValue: 10,
    }],
    ['reaction', {
        key: 'reaction',
        name: 'Reaktion',
        minValue: 1,
        maxValue: 10,
    }],
    ['intuition', {
        key:'intuition',
        name: 'Intuition',
        minValue: 1,
        maxValue: 10,
    }],
    ['logic', {
        key: 'logic',
        name: 'Logik',
        minValue: 1,
        maxValue: 10,
    }],
    ['magic', {
        key: 'magic',
        name: 'Magie',
        minValue: 1,
        maxValue: 10,
    }],
    ['resonance', {
        key: 'resonance',
        name: 'Resonanz',
        minValue: 1,
        maxValue: 10,
    }],
    ['constitution', {
        key: 'constitution',
        name: 'Konstitution',
        minValue: 1,
        maxValue: 10,
    }],
    ['edge', {
        key: 'edge',
        name: 'Edge',
        minValue: 1,
        maxValue: 10,
    }],
    ['willpower', {
        key: 'willpower',
        name: 'Willenskraft',
        minValue: 1,
        maxValue: 10,
    }],
    ['charisma', {
        key: 'charisma',
        name: 'Charisma',
        minValue: 1,
        maxValue: 10,
    }]
]);