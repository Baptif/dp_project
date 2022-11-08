"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = require("./EventManager");
const BAD_RES = 'mauvais resultat mon reuf';
const eventManager = EventManager_1.EventManager.getInstannce();
const observerComptable = {
    update(data) {
        console.log('observerComptable', data);
        if (data.result < 4) {
            eventManager.emit('reduc sale', { salaire: 2 });
        }
    }
};
const observerDev = {
    update(data) {
        console.log('observerDev', data);
        if (data.salaire < 3) {
            eventManager.emit('demission', {});
        }
    }
};
const observerPatreon = {
    update(data) {
        console.log('observerPatreon', data);
    }
};
eventManager.on(BAD_RES, observerComptable);
eventManager.on('reduc sale', observerDev);
eventManager.on('reduc sale', observerComptable);
eventManager.on('demission', observerPatreon);
eventManager.emit(BAD_RES, { result: 3 });
//# sourceMappingURL=index.js.map