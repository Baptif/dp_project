import { VeryLegacy, VeryLegacyCode, VeryLegDecoA, VeryLegDecoB } from "./Decorator";

export const createVeryLegacy = (type: string): VeryLegacyCode => {
    const objects: Record<string, () => VeryLegacy> = {
        ['veryLegacy']: () => new VeryLegacyCode(),
        ['decoratorA']: () => new VeryLegDecoA(new VeryLegacyCode),
        ['decoratorB']: () => new VeryLegDecoB(new VeryLegacyCode),
        ['decoratorAB']: () => new VeryLegDecoB(new VeryLegDecoA(new VeryLegacyCode)),
        
    }

    return objects[type]();
}

console.log(createVeryLegacy('decoratorAB').veryComplexe());