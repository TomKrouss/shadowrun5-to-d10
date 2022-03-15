export interface ISkill {
    key: string;
    name: string;
    maxValue: number;
    value?: number;
}

export const shadowrunSkills: Map<string, ISkill> = new Map([
    ['acrobatics', {
        key: 'acrobatics',
        name: 'Akrobatik',
        maxValue: 19
    }],
    ['pistols', {
        key: 'pistols',
        name: 'Pistolen',
        maxValue: 19
    }],
    ['projectileWeapons', {
        key: 'projectileWeapons',
        name: 'Projektilwaffen',
        maxValue: 19
    }],
    ['sneaking', {
        key: 'sneaking',
        name: 'Schleichen',
        maxValue: 19
    }],
    ['locksmith', {
        key: 'locksmith',
        name: 'Schlosser',
        maxValue: 19
    }],
    ['automaticWeapons', {
        key: 'automaticWeapons',
        name: 'Schnellfeuerwaffen',
        maxValue: 19
    }],
    ['heavyWeapons', {
        key: 'heavyWeapons',
        name: 'Schwere Waffen',
        maxValue: 19
    }],
    ['unarmedCombat', {
        key: 'unarmedCombat',
        name: 'Unbewaffneter Kampf',
        maxValue: 19
    }],
    ['thrownWeapons', {
        key: 'thrownWeapons',
        name: 'Wurfwarren',
        maxValue: 19
    }],
    ['escapeArtist', {
        key: 'escapeArtist',
        name: 'Entfesseln',
        maxValue: 19
    }],
    ['exoticRangedWeapon', {
        key: 'exoticRangedWeapon',
        name: 'Exostische Fernkampfwaffe',
        maxValue: 19
    }],
    ['exoticWeapon', {
        key: 'exoticWeapon',
        name: 'Exotische Nahkampfwaffe',
        maxValue: 19
    }],
    ['sleightOfHand', {
        key: 'sleightOfHand',
        name: 'Fingerfertigkeit',
        maxValue: 19
    }],
    ['artillery', {
        key: 'artillery',
        name: 'Geschütze',
        maxValue: 19
    }],
    ['rifles', {
        key: 'rifles',
        name: 'Gewehre',
        maxValue: 19
    }],
    ['blades', {
        key: 'blades',
        name: 'Klingenwaffen',
        maxValue: 19
    }],
    ['clubs', {
        key: 'clubs',
        name: 'Knüppel',
        maxValue: 19
    }],
    ['freefall', {
        key: 'freefall',
        name: 'Freifall',
        maxValue: 19
    }],
    ['diving', {
        key: 'diving',
        name: 'Tauchen',
        maxValue: 19
    }],
    ['groundVehicles', {
        key: 'groundVehicles',
        name: 'Bodenfahrzeuge',
        maxValue: 19
    }],
    ['exoticVehicles', {
        key: 'exoticVehicles',
        name: 'Exotisches Fahrzeug',
        maxValue: 19
    }],
    ['airVehicles', {
        key: 'airVehicles',
        name: 'Flugzeuge',
        maxValue: 19
    }],
    ['walkers', {
        key: 'walkers',
        name: 'Läufer',
        maxValue: 19
    }],
    ['spaceVehicles', {
        key: 'spaceVehicles',
        name: 'Raumfahrzueuge',
        maxValue: 19
    }],
    ['aquaticVehicles', {
        key: 'aquaticVehicles',
        name: 'Schiffe',
        maxValue: 19
    }],
    ['running', {
        key: 'running',
        name: 'Laufen',
        maxValue: 19
    }],
    ['swimming', {
        key: 'swimming',
        name: 'Schwimmen',
        maxValue: 19
    }],
    ['intimidation', {
        key: 'intimidation',
        name: 'Einschüchtern',
        maxValue: 19
    }],
    ['leadership', {
        key: 'leadership',
        name: 'Führung',
        maxValue: 19
    }],
    ['socializing', {
        key: 'socializing',
        name: 'Gebräuche',
        maxValue: 19
    }],
    ['animalKen', {
        key: 'animalKen',
        name: 'Tierführung',
        maxValue: 19
    }],
    ['persuation', {
        key: 'persuation',
        name: 'Überreden',
        maxValue: 19
    }],
    ['teaching', {
        key: 'teaching',
        name: 'Unterricht',
        maxValue: 19
    }],
    ['negotiation', {
        key: 'negotiation',
        name: 'Verhandlung',
        maxValue: 19
    }],
    ['impersonation', {
        key: 'impersonation',
        name: 'Verkörperung',
        maxValue: 19
    }],
    ['expression', {
        key: 'expression',
        name: 'Vorführung',
        maxValue: 19
    }],
    ['askenning', {
        key: 'askenning',
        name: 'Askennen',
        maxValue: 19
    }],
    ['crafts', {
        key: 'crafts',
        name: 'Handwerk',
        maxValue: 19
    }],
    ['navigation', {
        key: 'navigation',
        name: 'Navigation',
        maxValue: 19
    }],
    ['pathfinding', {
        key: 'pathfinding',
        name: 'Spurenlesen',
        maxValue: 19
    }],
    ['disguise', {
        key: 'disguise',
        name: 'Verkleiden',
        maxValue: 19
    }],
    ['perception', {
        key: 'perception',
        name: 'Warhnehmung',
        maxValue: 19
    }],
    ['arkana', {
        key: 'arkana',
        name: 'Arkana',
        maxValue: 19
    }],
    ['biotechnology', {
        key: 'biotechnology',
        name: 'Biotechnologie',
        maxValue: 19
    }],
    ['computer', {
        key: 'computer',
        name: 'Computer',
        maxValue: 19
    }],
    ['electronicWarfare', {
        key: 'electronicWarfare',
        name: 'Eletronische Kriegsführung',
        maxValue: 19
    }],
    ['firstAid', {
        key: 'firstAid',
        name: 'Erste Hilfe',
        maxValue: 19
    }],
    ['mechanics', {
        key: 'mechanics',
        name: 'Fahrzeugmechanik',
        maxValue: 19
    }],
    ['falsify', {
        key: 'falsify',
        name: 'Fälschen',
        maxValue: 19
    }],
    ['hacking', {
        key: 'hacking',
        name: 'Hacking',
        maxValue: 19
    }],
    ['hardware', {
        key: 'hardware',
        name: 'Hardware',
        maxValue: 19
    }],
    ['industryMechanics', {
        key: 'industryMechanics',
        name: 'Industriemechanik',
        maxValue: 19
    }],
    ['cybernetics', {
        key: 'cybernetics',
        name: 'Kybernetik',
        maxValue: 19
    }],
    ['arialMechanics', {
        key: 'arialMechanics',
        name: 'Luftfahrtmechanik',
        maxValue: 19
    }],
    ['matrixCombat', {
        key: 'matrixCombat',
        name: 'Matrixkampf',
        maxValue: 19
    }],
    ['medicine', {
        key: 'medicine',
        name: 'Medizin',
        maxValue: 19
    }],
    ['nauticMechanics', {
        key: 'nauticMechanics',
        name: 'Seefahrtmechanik',
        maxValue: 19
    }],
    ['software', {
        key: 'software',
        name: 'Software',
        maxValue: 19
    }],
    ['explosives', {
        key: 'explosives',
        name: 'Sprengstoffe',
        maxValue: 19
    }],
    ['weaponsmith', {
        key: 'weaponsmith',
        name: 'Waffenbau',
        maxValue: 19
    }],
    ['astralCombat', {
        key: 'astralCombat',
        name: 'Astralkampf',
        maxValue: 19
    }],
    ['survival', {
        key: 'survival',
        name: 'Survival',
        maxValue: 19
    }],
    ['alchemy', {
        key: 'alchemy',
        name: 'Alchemie',
        maxValue: 19
    }],
    ['antimagic', {
        key: 'antimagic',
        name: 'Antimagie',
        maxValue: 19
    }],
    ['binding', {
        key: 'binding',
        name: 'Binden',
        maxValue: 19
    }],
    ['disenchant', {
        key: 'disenchant',
        name: 'Entzaubern',
        maxValue: 19
    }],
    ['focusCreation', {
        key: 'focusCreation',
        name: 'Fokusherstellung',
        maxValue: 19
    }],
    ['summoning', {
        key: 'summoning',
        name: 'Herbeirufen',
        maxValue: 19
    }],
    ['ritualCasting', {
        key: 'ritualCasting',
        name: 'Ritualzauberei',
        maxValue: 19
    }],
    ['spellcasting', {
        key: 'spellcasting',
        name: 'Spruchzauberei',
        maxValue: 19
    }],
    ['banishment', {
        key: 'banishment',
        name: 'Verbannen',
        maxValue: 19
    }],
    ['decompile', {
        key: 'decompile',
        name: 'Dekompilieren',
        maxValue: 19
    }],
    ['compile', {
        key: 'compile',
        name: 'Kompilieren',
        maxValue: 19
    }],
    ['register', {
        key: 'register',
        name: 'Registrieren',
        maxValue: 19
    }],
]);