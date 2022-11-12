import { EventManager } from "./EventManager"
import { sensorType } from "./Sensor"
import { ISensorManufacturer,ManufacturerFactory } from "./ManufacturerFactory"
import { Commander,ShieldOnCommand,ShieldOffCommand,MissileLaunchCommand } from "./Command"
import { Spaceship } from "./Spaceship"
import { Events } from "./Event"


const EventManager_ = EventManager.getInstannce()
const Commander_ = new Commander()

console.log("\n---------START---------\n")

const ManufacturerNASA: ISensorManufacturer = ManufacturerFactory.createManufacturer("NASA")
const ManufacturerTESLA: ISensorManufacturer = ManufacturerFactory.createManufacturer("TESLA")

console.log('')

const SensorRadar = ManufacturerNASA.createSensor(1,sensorType.RADAR,80)
const SensorHeat = ManufacturerTESLA.createSensor(2,sensorType.HEAT,40)

console.log('')

const Shield = ManufacturerNASA.createShield()
const Missile = ManufacturerTESLA.createMissile()

//--------------------------------------------//

const SHIELD_ON = new ShieldOnCommand(Shield)
const SHIELD_OFF = new ShieldOffCommand(Shield)
const MISSILE_LAUNCH = new MissileLaunchCommand(Missile)

Commander_.register('SHIELD_ON', SHIELD_ON)
Commander_.register('SHIELD_OFF', SHIELD_OFF)
Commander_.register('MISSILE_LAUNCH',MISSILE_LAUNCH)

console.log("\n------------------\n")

const SpaceCadet = new Spaceship("SPACECADET",SensorRadar,SensorHeat,Shield,Missile,Commander_)

EventManager_.on(Events.EVT_ACTION, SpaceCadet.sensor1)
EventManager_.on(Events.EVT_ACTION, SpaceCadet.sensor2)
EventManager_.on(Events.EVT_ACTION, SpaceCadet)
EventManager_.on(Events.EVT_ORDER, SpaceCadet)
EventManager_.emit(Events.EVT_ACTION, {value : 80})


console.log("\n------------------\n")

console.log("DEFAULT SECURITY")
SpaceCadet.commander.execute('SHIELD_ON')

console.log("\n---------END---------\n")