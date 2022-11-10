import Missile from "./Missile";
import { Sensor,SensorDefaut, sensorType } from "./Sensor";
import Shield from "./Shield";

export interface ISensorManufacturer {
    getManufacturerName() : string,
    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): Sensor,
    createShield(): Shield,
    createMissile(): Missile,
}

export class ManufacturerNASA implements ISensorManufacturer {

    getManufacturerName(): string {
        return "NASA";
    }

    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): Sensor {
        const sensor = new SensorDefaut(sensorID,sensorType,sensorPower);
        console.log("Creating.. -- Sensor : %d | Type : %s | Made by : %s -- ..Done 🚀", sensorID,sensorType,this.getManufacturerName());
        return sensor;
    }
    
    createShield(): Shield {
        const shield = new Shield()
        console.log("Creating.. -- Shield | Made by : %s -- ..Done 🚀",this.getManufacturerName());
        return shield
    }

    createMissile(): Missile {
        const missile = new Missile()
        console.log("Creating.. -- Missile | Made by : %s -- ..Done 🚀",this.getManufacturerName());
        return missile
    }
}

export class ManufacturerTESLA implements ISensorManufacturer {

    getManufacturerName(): string {
        return "TESLA";
    }

    createSensor(sensorID:number,sensorType:sensorType,sensorPower:number): Sensor {
        const sensor = new SensorDefaut(sensorID,sensorType,sensorPower);
        console.log("Creating.. -- Sensor : %d | Type : %s | Made by : %s -- ..Done 🚀", sensorID,sensorType,this.getManufacturerName());
        return sensor;
    }
    
    createShield(): Shield {
        const shield = new Shield()
        console.log("Creating.. -- Shield | Made by : %s -- ..Done 🚀",this.getManufacturerName());
        return shield
    }

    createMissile(): Missile {
        const missile = new Missile()
        console.log("Creating.. -- Missile | Made by : %s -- ..Done 🚀",this.getManufacturerName());
        return missile
    }
}


export class ManufacturerFactory {
    public static createManufacturer(nom: string) : ISensorManufacturer {
        switch (nom) {
            case "NASA":
                console.log("-- %s  Manafucture INITIALIZED -- ⚙️",nom);
                return new ManufacturerNASA();
            case "TESLA":
                console.log("-- %s Manafucture INITIALIZED -- ⚙️", nom);
                return new ManufacturerTESLA();
            default:
                break;
        }

        return null as unknown as ISensorManufacturer;
    }
}