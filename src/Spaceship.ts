import { Sensor } from "./Sensor";
import Shield from "./Shield";
import Missile from "./Missile";
import { Commander } from "./Command";
import { Observer } from "./EventManager";

export class Spaceship implements Observer{
    public name:string
    public sensor1:Sensor
    public sensor2:Sensor
    public shield:Shield
    public missile:Missile
    public commander:Commander
    
    public constructor(name:string,sensor1:Sensor,sensor2:Sensor,shield:Shield,missile:Missile,commander:Commander){
        this.name = name
        this.sensor1 = sensor1
        this.sensor2 = sensor2
        this.verifBuild()
        this.shield = shield
        this.missile = missile
        this.commander = commander
        
    }

    private verifBuild(){
        if(this.sensor1.sensorType == this.sensor2.sensorType){
            throw new Error("The sensor have the same type\n DESTROYING "+this.name)
        }else{
            console.log("🪛 SPACESHIP %s IS ASSEMBLED 🪛",this.name)
        }
    }

    update(data: any) {
        if(data.value > 0){
            this.commander.execute('SHIELD_ON');
        }
        if(data.threat){
            this.commander.execute('SHIELD_OFF')
            this.commander.execute('MISSILE_LAUNCH')
        }
    }
}