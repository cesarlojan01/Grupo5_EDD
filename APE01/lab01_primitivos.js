import getMemoryUsage from './profiler.js'

const memoriaInicial = getMemoryUsage()

const N = 1000000
let lat = new Float64Array(N)
let lng = new Float64Array(N)

for(let i=0;i<N;i++ ){
    lat[i] = i*0.1
    lng[i] = i * -0.1
}

const memoriaFinal = getMemoryUsage()
console.log(`[Enfoque Primitivos] - Memoria Inicial: ${memoriaInicial} MB`)
console.log(`[Enfoque Primitivos] - Memoria Final: ${memoriaFinal} MB`)
console.log(`[Enfoque Primitivos] - Consumo Neto: ${memoriaFinal - memoriaInicial} MB`)

