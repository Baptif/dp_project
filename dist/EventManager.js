"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    constructor() {
        this.subscribers = {};
    }
    static getInstannce() {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }
    on(event, observable) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(observable);
    }
    // broadcast(data: any) {
    //     Object.values((key: string, observables: Observer[]) => observables.forEach((observable) => observable.update(data)));
    // }
    // ? veut dire que l'élement est nullable
    emit(event, data) {
        var _a;
        (_a = this.subscribers[event]) === null || _a === void 0 ? void 0 : _a.forEach((observable) => observable.update(data));
    }
}
exports.EventManager = EventManager;
//# sourceMappingURL=EventManager.js.map