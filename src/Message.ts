class Target {
    public request(): string {
        return 'For the crew : ! ALERT THREAT INCOMING !';
    }
}

export class Adaptee {
    public specificRequest(): string {
        return 'ISBBTEVSVCBUSFJFQVQgSU5DT01JTkcgIQ==';
    }
}

export class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = atob(this.adaptee.specificRequest());
        return `Spaceship DECODER : ${result}`;
    }
}