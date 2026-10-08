import getMemoryUsage from './profiler.js'

const N = 1000000
const memoriaInicial = getMemoryUsage()

class CoordenadaObj{
    constructor(lat, lng){
        this.lat = lat
        this.lng = lng
    }

}
 
let coordenadas = []
for(let i=0;i<N;i++){
    coordenadas.push(new CoordenadaObj(i, i))
}
const memoriaFinal = getMemoryUsage()

console.log(`[Enfoque Objetos] - Memoria Inicial: ${memoriaInicial} MB`)
console.log(`[Enfoque Objetos] - Memoria Final: ${memoriaFinal} MB`)
console.log(`[Enfoque Objetos] - Consumo Neto: ${memoriaFinal - memoriaInicial} MB`)
console.log('arrayBuffers (MB):', (process.memoryUsage().arrayBuffers / 1048576).toFixed(2));

const heapUsedMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
const heapTotalMB = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2);

console.log(`Memoria en uso (heapUsed): ${heapUsedMB} MB`);
console.log(`Total asignado (heapTotal): ${heapTotalMB} MB`);