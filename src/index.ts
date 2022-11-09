import { EventManager } from "./EventManager";
import { sensorType } from "./Sensor";
import { ISensorManufacturer,SensorManufacturerFactory } from "./SensorManufacturerFactory";

const EVT_ACTION = "HEAT OR MOTION IS DETECTED";

const eventManager = EventManager.getInstannce();

const nasaManufact: ISensorManufacturer = SensorManufacturerFactory.createManufacturer("NASA");
const teslaManufact: ISensorManufacturer = SensorManufacturerFactory.createManufacturer("TESLA");

console.log("\n------------------\n");

nasaManufact.createSensor(1,sensorType.RADAR,80);
teslaManufact.createSensor(2,sensorType.HEAT,40);

console.log("\n------------------\n");

eventManager.on(EVT_ACTION, nasaManufact.getSensor());
eventManager.on(EVT_ACTION, teslaManufact.getSensor());
eventManager.emit(EVT_ACTION, {value : 80});

console.log("\n------------------\n");