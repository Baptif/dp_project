class Target {
    public request(): string {
        return "Message readable for the crew"
    }
}

export class SensorMessage {
    message: number

    public constructor(message:number){
        this.message = message
    }

    public specificRequest(): string {
        switch (this.message) {
            case 1:
                return 'ISBBTEVSVCBUSFJFQVQgSU5DT01JTkcgIQ==';
            case 2:
                return 'SEVBVCBERVRFQ1RFRCBPTiBTRU5TT1I=';
            case 3:
                return 'TU9USU9OIERFVEVDVEVEIE9OIFNFTlNPUg==';
            default:
                break;
        }
        
    }
}

export class Adapter extends Target {
    private sensorMessage: SensorMessage;

    constructor(sensorMessage: SensorMessage) {
        super();
        this.sensorMessage = sensorMessage;
    }

    public request(): string {
        const result = atob(this.sensorMessage.specificRequest());
        return `Spaceship decoder : ${result}`;
    }
}

export class PrintDecoder {
    public show(num:number): void{
        console.log('')
        const adaptee = new SensorMessage(num);
        console.log("Sensor message :",adaptee.specificRequest())

        console.log("DECODING MESSAGE...")
        const adapter = new Adapter(adaptee);
        
        console.log(adapter.request());
    }
}