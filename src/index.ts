import { EventManager } from "./EventManager";
import { sensorType } from "./Sensor";
import { ISensorManufacturer,SensorManufacturerFactory } from "./ManufacturerFactory";
import Shield from "./Shield";
import Missile from "./Missile";
import { Commander,ShieldOnCommand,ShieldOffCommand,MissileLaunchCommand } from "./Command";
import { Spaceship } from "./Spaceship";
import { EVT_ACTION,EVT_THREAT,EVT_DO } from "./event";

const eventManager = EventManager.getInstannce();

const SHIELD = new Shield()
const MISSILE = new Missile()

const SHIELD_ON = new ShieldOnCommand(SHIELD)
const SHIELD_OFF = new ShieldOffCommand(SHIELD)
const MISSILE_LAUNCH = new MissileLaunchCommand(MISSILE)

console.log("\n---------START---------\n");

const nasaManufact: ISensorManufacturer = SensorManufacturerFactory.createManufacturer("NASA");
const teslaManufact: ISensorManufacturer = SensorManufacturerFactory.createManufacturer("TESLA");

const commander = new Commander()
commander.register('SHIELD_ON', SHIELD_ON)
commander.register('SHIELD_OFF', SHIELD_OFF)
commander.register('MISSILE_LAUNCH',MISSILE_LAUNCH)

console.log("\n------------------\n");

nasaManufact.createSensor(1,sensorType.RADAR,80);
teslaManufact.createSensor(2,sensorType.HEAT,40);

console.log("\n------------------\n");

const SpaceCadet = new Spaceship("SpaceCadet",nasaManufact.getSensor(),teslaManufact.getSensor(),SHIELD,MISSILE,commander);

eventManager.on(EVT_ACTION, SpaceCadet.sensor1);
eventManager.on(EVT_ACTION, SpaceCadet.sensor2);
eventManager.on(EVT_THREAT, SpaceCadet);
eventManager.on(EVT_DO, SpaceCadet);
eventManager.emit(EVT_ACTION, {value : 80});


console.log("\n------------------\n");

console.log("DEFAULT SECURITY")
SpaceCadet.commander.execute('SHIELD_ON')

console.log("\n---------END---------\n");