import { EventManager, Observer } from "./EventManager";
import { VeryLegacyCode, VeryLegDecoA, VeryLegDecoB } from "./Decorator";
import { Factory } from "./Factory";

// SINGLETON + OBSERVER
// const BAD_RES = 'mauvais resultat mon reuf';
// const eventManager = EventManager.getInstannce();

// const observerComptable: Observer = {
//     update(data){
//         console.log('observerComptable', data);
//         if(data.result < 4){
//             eventManager.emit('reduc sale', {salaire:2});
//         }
//     }
// }

// const observerDev = {
//     update(data){
//         console.log('observerDev', data);
//         if(data.salaire < 3){
//             eventManager.emit('demission', {})
//         }
//     }
// }

// const observerPatreon = {
//     update(data){
//         console.log('observerPatreon', data);
//     }
// }

// eventManager.on(BAD_RES, observerComptable);
// eventManager.on('reduc sale', observerDev);
// eventManager.on('reduc sale', observerComptable);
// eventManager.on('demission', observerPatreon);

// eventManager.emit(BAD_RES, {result : 3});

// DECORATION
// const verylegcod = new VeryLegacyCode();

// console.log(verylegcod.veryComplexe());

// const verylegdecoa = new VeryLegDecoA(verylegcod);
// const verylegdecob = new VeryLegDecoB(verylegdecoa);

// console.log(verylegdecoa.veryComplexe());
// console.log(verylegdecob.veryComplexe());

// FACTORY
const facts = new Factory();

console.log(facts.createLegCode("VFLGCDAB").veryComplexe());