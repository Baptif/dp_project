import { Observer } from "./EventManager";

import { Adapter,Adaptee } from "./Message";

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
        if(this.sensorType === "HEAT"){
            console.log("HEAT DETECTED ON SENSOR",this.sensorID, event);
        }else if(this.sensorType === "RADAR"){
            console.log("MOTION DETECTED ON SENSOR",this.sensorID, event);
        }

        if(event.value > this.sensorPower){ //Emplacement adapter : update ?
            const adaptee = new Adaptee();
            console.log("Sensor message :",adaptee.specificRequest())

            console.log("DECODING MESSAGE...")
            const adapter = new Adapter(adaptee);
            
            console.log(adapter.request());
        }
    }
}