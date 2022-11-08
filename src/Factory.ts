import { VeryLegacyCode, VeryLegDecoA, VeryLegDecoB } from "./Decorator";

interface LegacyCodeFactory{
    createLegCode();
}

class LegacyCodeFactoryClassik implements LegacyCodeFactory {
    createLegCode() {
        console.log("creation verylegcodeClassik");
        return new VeryLegacyCode();
    }
}

class LegacyCodeFactoryA implements LegacyCodeFactory {
    createLegCode() {
        console.log("creation verylegdecoA");
        return new VeryLegDecoA(new VeryLegacyCode);
    }
}

class LegacyCodeFactoryB implements LegacyCodeFactory {
    createLegCode() {
        console.log("creation verylegdecoB");
        return new VeryLegDecoB(new VeryLegacyCode);
    }
}

class LegacyCodeFactoryAB implements LegacyCodeFactory {
    createLegCode() {
        console.log("creation verylegdecoAB");
        return new VeryLegDecoB(new VeryLegDecoA(new VeryLegacyCode));
    }
}

export class Factory {
    private factories = {};

    constructor() {
        this.factories["VFLGC"] = new LegacyCodeFactoryClassik();
        this.factories["VFLGCDA"] = new LegacyCodeFactoryA();
        this.factories["VFLGCDB"] = new LegacyCodeFactoryB();
        this.factories["VFLGCDAB"] = new LegacyCodeFactoryAB();
    }

    public createLegCode(legcodeName : string) {
        return this.factories[legcodeName].createLegCode();
    }
}