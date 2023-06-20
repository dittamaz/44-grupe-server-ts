import { server } from "./lib/server.js";

console.clear();

/*  type App = {
    init: () => void;
}

const app = {} as App;

vienas budas
 type App = {
    sum: (a: number, b: number) => number;
    dif: (a: number, b: number) => number;
    mul: (a: number, b: number) => number;
    div: (a: number, b: number) => number;
}

const app: App = {
    sum: (a, b) => {
        return a + b;
    },
    dif: (a, b) => {
        return a - b;
    },
    mul: (a, b) => {
        return a * b;
    },
    div: (a, b) => {
        return a / b;
    },
}
kitas budas  

const app = {} as App;

app.sum = sunction (a: number, b: number) {
    return a + b;
}
app.dif = sunction (a: number, b: number) {
    return a - b;
}
app.mul = sunction (a: number, b: number) {
    return a * b;
}
app.div = sunction (a: number, b: number) {
    return a / b;
}
*/
type App = {
    init: () => void;
}

const app = {} as App;

app.init = () => {
// susikurti reikiamus/trukstamus folderius ir failus
// atsinaujinti informacija
// duombaze:
// - prisijungti
// - pasiruosti struktura
// - surasyti pradinius duomenis
// paleisti serverio logika
    server.init();
// laike pasikartojantys procesai:
// - isivalyti nereikalingus failus/info
// - atnaujinti failus/info
// - backup darymas
}
app.init();


export default app;

