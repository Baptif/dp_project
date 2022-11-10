import {describe, expect, test} from '@jest/globals';
import { ISensorManufacturer,ManufacturerFactory } from "./ManufacturerFactory"
import Shield from './Shield';

describe('ManufacturerNASA module', () => {
    const NASAmanufact: ISensorManufacturer = ManufacturerFactory.createManufacturer("NASA")
    test('ManufacturerNASA name is NASA', () => {
        expect(NASAmanufact.getManufacturerName()).toBe("NASA");
    });
    test('ManufacturerNASA createShield return is type of Shield', () => {
        expect(NASAmanufact.createShield()).toBeInstanceOf(Shield);
    });
    // test('ManufacturerNASA name is NASA', () => {
    //     expect(NASAmanufact.getManufacturerName()).toBe("NASA");
    // });
});