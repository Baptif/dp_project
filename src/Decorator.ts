export interface VeryLegacy {
    veryComplexe(): string
}

export class VeryLegacyCode implements VeryLegacy{
    veryComplexe(): string {
        return "IM GOOD DABEDI DABEDY"
    }
}

class Decorator implements VeryLegacy {
    protected verylegacy: VeryLegacy;

    constructor(verylegacy: VeryLegacy) {
        this.verylegacy = verylegacy;
    }

    public veryComplexe(): string {
        return this.verylegacy.veryComplexe();
    }
}

export class VeryLegDecoA extends Decorator {
    public veryComplexe(): string {
        return `${super.veryComplexe()} OOOOOOOOO`;
    }
}

export class VeryLegDecoB extends Decorator {
    public veryComplexe(): string {
        return `${super.veryComplexe()} AAAAAAAAAAA`;
    }
}
