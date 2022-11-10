import { EventManager } from "./EventManager"
import { sensorType } from "./Sensor"
import { ISensorManufacturer,ManufacturerFactory } from "./ManufacturerFactory"
import { Commander,ShieldOnCommand,ShieldOffCommand,MissileLaunchCommand } from "./Command"
import { Spaceship } from "./Spaceship"
import { Events } from "./Event"


const eventManager = EventManager.getInstannce()
const commander = new Commander()

console.log("\n---------START---------\n")

const NASAmanufact: ISensorManufacturer = ManufacturerFactory.createManufacturer("NASA")
const TESLAmanufact: ISensorManufacturer = ManufacturerFactory.createManufacturer("TESLA")

console.log('')

const SensorRadar = NASAmanufact.createSensor(1,sensorType.RADAR,80)
const SensorHeat = TESLAmanufact.createSensor(2,sensorType.HEAT,40)

console.log('')

const Shield = NASAmanufact.createShield()
const Missile = TESLAmanufact.createMissile()

//--------------------------------------------//

const SHIELD_ON = new ShieldOnCommand(Shield)
const SHIELD_OFF = new ShieldOffCommand(Shield)
const MISSILE_LAUNCH = new MissileLaunchCommand(Missile)

commander.register('SHIELD_ON', SHIELD_ON)
commander.register('SHIELD_OFF', SHIELD_OFF)
commander.register('MISSILE_LAUNCH',MISSILE_LAUNCH)

console.log("\n------------------\n")

const SpaceCadet = new Spaceship("SPACECADET",SensorRadar,SensorHeat,Shield,Missile,commander)

eventManager.on(Events.EVT_ACTION, SpaceCadet.sensor1)
eventManager.on(Events.EVT_ACTION, SpaceCadet.sensor2)
eventManager.on(Events.EVT_ACTION, SpaceCadet)
eventManager.on(Events.EVT_ORDER, SpaceCadet)
eventManager.emit(Events.EVT_ACTION, {value : 80})


console.log("\n------------------\n")

console.log("DEFAULT SECURITY")
SpaceCadet.commander.execute('SHIELD_ON')

console.log("\n---------END---------\n")