import Shield from "./Shield"
import Missile from "./Missile"

interface ICommand {
    execute(): void
}

interface ISwitchCommand {
    execute(commandName: string): void
}

export class Commander {
    commands: { [id: string]: ICommand }
    history: [number, string][]

    constructor() {
        this.commands = {}
        this.history = []
    }

    showHistory(): void {
        this.history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }

    register(commandName: string, command: ICommand): void {
        this.commands[commandName] = command
    }

    execute(commandName: string): void {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute()
            this.history.push([Date.now(), commandName])
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }

    replayLast(numberOfCommands: number): void {
        const commands = this.history.slice(
            this.history.length - numberOfCommands,
            this.history.length
        )
        commands.forEach((command) => {
            this.commands[command[1]].execute()
        })
    }
}


// Listes des commandes //
export class ShieldOnCommand implements ISwitchCommand {
    shield: Shield

    constructor(shield: Shield) {
        this.shield = shield
    }

    execute(): void {
        this.shield.turnOn()
    }
}


export class ShieldOffCommand implements ISwitchCommand {
    shield: Shield

    constructor(shield: Shield) {
        this.shield = shield
    }

    execute(): void {
        this.shield.turnOff()
    }
}

export class MissileLaunchCommand implements ISwitchCommand {
    missile: Missile

    constructor(missile: Missile) {
        this.missile = missile
    }

    execute(): void {
        this.missile.launch()
    }
}