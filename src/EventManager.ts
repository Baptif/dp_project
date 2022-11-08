export interface Observer {
    update(data: any);
}


export class EventManager {
    private static instance : EventManager;
    private subscribers: Record<string, Observer[]>;
    private constructor() {
        this.subscribers = {};
    }

    public static getInstannce(): EventManager{
        if(!EventManager.instance){
            EventManager.instance = new EventManager();
        }

        return EventManager.instance;
    }

    on(event: string, observable: Observer) {
        if(!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(observable);
    }

    // broadcast(data: any) {
    //     Object.values((key: string, observables: Observer[]) => observables.forEach((observable) => observable.update(data)));
    // }

    // ? veut dire que l'élement est nullable
    emit(event: string, data: any) {
        this.subscribers[event]?.forEach((observable) => observable.update(data));
    }
}