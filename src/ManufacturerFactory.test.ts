import {describe, expect, test} from '@jest/globals';
import { ISensorManufacturer,ManufacturerFactory, ManufacturerNASA, ManufacturerTESLA } from "./ManufacturerFactory"
import Missile from './Missile';
import { Sensor, SensorDefaut, sensorType } from './Sensor';
import Shield from './Shield';

const NASAmanufact: ISensorManufacturer = ManufacturerFactory.createManufacturer("NASA")
const TESLAmanufact: ISensorManufacturer = ManufacturerFactory.createManufacturer("TESLA")

describe('ManufacturerFactory class', () => {
    test('ManufacturerFactory createManufacturer("NASA") return type ManufacturerNASA', () => {
        expect(NASAmanufact).toBeInstanceOf(ManufacturerNASA);
    });
    test('ManufacturerFactory createManufacturer("TESLA") return type ManufacturerTESLA', () => {
        expect(TESLAmanufact).toBeInstanceOf(ManufacturerTESLA);
    });
});

describe('ManufacturerNASA class', () => {
    test('ManufacturerNASA getManufacturerName is NASA', () => {
        expect(NASAmanufact.getManufacturerName()).toBe("NASA");
    });
    test('ManufacturerNASA createSensor return is type of Sensor and props are accessibles', () => {
        const sensor1 = NASAmanufact.createSensor(3,sensorType.HEAT,40);
        expect(sensor1).toBeInstanceOf(SensorDefaut);
        expect(sensor1.sensorType).toBe(sensorType.HEAT);
        expect(sensor1.sensorPower).toBe(40);
    });
    test('ManufacturerNASA createShield return is type of Shield', () => {
        expect(NASAmanufact.createShield()).toBeInstanceOf(Shield);
    });
    test('ManufacturerNASA createMissile return is type of Missile', () => {
        expect(NASAmanufact.createMissile()).toBeInstanceOf(Missile);
    });
});

describe('ManufacturerTESLA class', () => {
    test('ManufacturerTESLA getManufacturerName is TESLA', () => {
        expect(TESLAmanufact.getManufacturerName()).toBe("TESLA");
    });
    test('ManufacturerTESLA createSensor return is type of Sensor and props are accessibles', () => {
        const sensor1 = TESLAmanufact.createSensor(3,sensorType.RADAR,40);
        expect(sensor1).toBeInstanceOf(SensorDefaut);
        expect(sensor1.sensorType).toBe(sensorType.RADAR);
        expect(sensor1.sensorPower).toBe(40);
    });
    test('ManufacturerTESLA createShield return is type of Shield', () => {
        expect(TESLAmanufact.createShield()).toBeInstanceOf(Shield);
    });
    test('ManufacturerTESLA createMissile return is type of Missile', () => {
        expect(TESLAmanufact.createMissile()).toBeInstanceOf(Missile);
    });
});