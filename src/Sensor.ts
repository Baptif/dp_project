import { Observer,EventManager } from "./EventManager";
import { EVT_THREAT,EVT_DO } from "./event";
import { PrintDecoder } from "./Message";

export enum sensorType {
    HEAT = "HEAT",
    RADAR = "RADAR"
}

export interface Sensor {
    sensorType: sensorType,
    sensorPower: number,
    update(data: number): void,
}

export class SensorDefaut implements Sensor, Observer{
    private sensorID: number;
    public sensorType: sensorType;
    public sensorPower: number;

    public constructor(sensorID:number,sensorType:sensorType,sensorPower:number) {
        this.sensorID = sensorID;
        this.sensorType = sensorType;
        this.sensorPower = sensorPower;
    }

    update(event) {
        const printDecoder = new PrintDecoder()
        const eventManager = EventManager.getInstannce()

        if(this.sensorType === "HEAT"){
            printDecoder.show(2)
            console.log(this.sensorID, event);
            eventManager.emit(EVT_DO, {value : 80});
        }else if(this.sensorType === "RADAR"){
            printDecoder.show(3)
            console.log(this.sensorID, event);
            eventManager.emit(EVT_DO, {value : 80});
        }

        if(event.value > this.sensorPower){
            printDecoder.show(1);
            eventManager.emit(EVT_THREAT, {threat : true});
        }
    }
}