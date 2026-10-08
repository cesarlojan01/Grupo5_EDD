const { getMemoryUsage, getMemoryDetail } = require('./lab01_profiler');

const N = 1000000;
const memoriaInicial = getMemoryUsage();
const d0 = getMemoryDetail();

// TDA Desacoplado: Typed Arrays para obligar a V8 a usar memoria contigua
// Capacidad total: N elementos de 8 bytes (64 bits) cada uno
let lat = new Float64Array(N);
let lng = new Float64Array(N);

for (let i = 0; i < N; i++) {
  lat[i] = i * 0.1;
  lng[i] = i * -0.1;
}

const memoriaFinal = getMemoryUsage();
const d1 = getMemoryDetail();

console.log(`[Enfoque Primitivos] Memoria inicial: ${memoriaInicial} MB`);
console.log(`[Enfoque Primitivos] Memoria final: ${memoriaFinal} MB`);
console.log(`[Enfoque Primitivos] Consumo Neto (heapUsed): ${(memoriaFinal - memoriaInicial).toFixed(2)} MB`);
console.log(`[Extra] arrayBuffers neto: ${(d1.arrayBuffers - d0.arrayBuffers).toFixed(2)} MB | rss neto: ${(d1.rss - d0.rss).toFixed(2)} MB`);