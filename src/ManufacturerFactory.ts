import { Sensor,SensorDefaut, sensorType } from "./Sensor";

export interface ISensorManufacturer {
    getManufacturerName() : string,
    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): void,
    getSensor(): Sensor
}

export class ManufacturerNASA implements ISensorManufacturer {
    private sensor: Sensor;

    getManufacturerName(): string {
        return "NASA";
    }

    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): void {
        this.sensor = new SensorDefaut(sensorID,sensorType,sensorPower);
        console.log("Creating.. -- Sensor : %d | Type : %s | Made by : %s -- ..Done 🚀", sensorID,sensorType,this.getManufacturerName());
    }
    
    getSensor(): Sensor {
        return this.sensor;
    }
}

export class ManufacturerTESLA implements ISensorManufacturer {
    private sensor: Sensor;

    getManufacturerName(): string {
        return "TESLA";
    }

    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): void {
        this.sensor = new SensorDefaut(sensorID,sensorType,sensorPower);
        console.log("Creating.. -- Sensor : %d | Type : %s | Made by : %s -- ..Done 🚀", sensorID,sensorType,this.getManufacturerName());
    }
    
    getSensor(): Sensor {
        return this.sensor;
    }
}

// OU CREATESENSORFROMMANUFACTURER(type,manufacturer)

export class SensorManufacturerFactory {
    public static createManufacturer(nom: string) : ISensorManufacturer {
        switch (nom) {
            case "NASA":
                console.log("-- %s  Manafucture INITIALIZED --",nom);
                return new ManufacturerNASA();
            case "TESLA":
                console.log("-- %s Manafucture INITIALIZED --", nom);
                return new ManufacturerTESLA();
            default:
                break;
        }

        return null as unknown as ISensorManufacturer;
    }
}