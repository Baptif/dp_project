import { VeryLegacy, VeryLegacyCode, VeryLegDecoA, VeryLegDecoB, VeryLegObsDeco } from "./Decorator";
import { Observer } from "../src/EventManager";

interface Builder {
    produceVLCA(): void;
    produceVLCB(): void;
}


export class ConcreteBuilder1 implements Builder {
    private vlc: VeryLegacyCode;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.vlc = new VeryLegacyCode();
    }

    public produceVLCA(): void {
        this.vlc = (new VeryLegDecoA(this.vlc));
    }

    public produceVLCB(): void {
        this.vlc = (new VeryLegDecoB(this.vlc));
    }

    public getProduct(): VeryLegacy&Observer {
        const result = new VeryLegObsDeco(this.vlc);
        this.reset();
        return result;
    }
}


export class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.produceVLCA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.produceVLCA();
        this.builder.produceVLCB();
    }
}