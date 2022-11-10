import { Sensor } from "./Sensor";
import Shield from "./Shield";
import Missile from "./Missile";
import { Commander } from "./Command";

export class Spaceship {
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
            console.log("ERROR : The sensor have the same type\n DESTROYING",this.name)
        }else{
            console.log("🪛 Spaceship %s is assembled 🪛",this.name)
        }
    }
}