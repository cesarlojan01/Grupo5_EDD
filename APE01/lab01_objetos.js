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
