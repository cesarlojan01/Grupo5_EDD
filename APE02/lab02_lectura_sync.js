const fs = require('fs')
const {performance} = require('perf_hooks')
const FILE_NAME = 'coordenadas_masivas.csv'

console.log(`[Lectura Sincrona] Iniciando carga en memoria`)

const memoryBefore = process.memoryUsage().heapUsed
const start = performance.now()

const data = fs.readFileSync(FILE_NAME,'utf-8')

const lineas = data.split('\n')
const end = performance.now()
const memoryAfter = process.memoryUsage().heapUsed

console.log(`[Lectura Sincrona] Total registro leidos: ${lineas.length - 1}`)
console.log(`[Lectura Sincrona] Tiempo de I/O + Pargin: ${((end - start)/ 1000).toFixed(2)} segundos`)

console.log(`[Lectura Sincrona] Consumo Neto de RAM: ${((memoryAfter - memoryBefore)/1024/1024).toFixed(2)}MB`)