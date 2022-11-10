import { VeryLegacy, VeryLegacyCode, VeryLegDecoA, VeryLegDecoB, VeryLegObsDeco } from "./Decorator";

// CONDENSE DE ABSTRACT FACTORY
export const createVeryLegacy = (type: string) => {
    const objects = {
        ['veryLegacy']: () => new VeryLegacyCode(),
        ['decoratorA']: () => new VeryLegDecoA(new VeryLegacyCode),
        ['decoratorB']: () => new VeryLegDecoB(new VeryLegacyCode),
        ['decoratorAB']: () => new VeryLegDecoB(new VeryLegDecoA(new VeryLegacyCode)),
        ['decoratorObs']: () => new VeryLegObsDeco(new VeryLegacyCode),
    }

    return objects[type]();
}
