const { getMemoryUsage, getMemoryDetail } = require('./lab01_profiler');

const N = 1000000; // 1 millón de registros
const memoriaInicial = getMemoryUsage();
const d0 = getMemoryDetail();

// TDA: Coordenada basada en Objetos
class CoordenadaObj {
  constructor(lat, lng) {
    this.lat = lat; // Número de punto flotante de 64 bits
    this.lng = lng;
  }
}

// Almacenamos en memoria
let coordenadas = [];
for (let i = 0; i < N; i++) {
  coordenadas.push(new CoordenadaObj(i * 0.1, i * -0.1));
}

const memoriaFinal = getMemoryUsage();
const d1 = getMemoryDetail();

console.log(`[Enfoque Objetos] Memoria inicial: ${memoriaInicial} MB`);
console.log(`[Enfoque Objetos] Memoria final: ${memoriaFinal} MB`);
console.log(`[Enfoque Objetos] Consumo Neto: ${(memoriaFinal - memoriaInicial).toFixed(2)} MB`);
console.log(`[Extra] arrayBuffers neto: ${(d1.arrayBuffers - d0.arrayBuffers).toFixed(2)} MB | rss neto: ${(d1.rss - d0.rss).toFixed(2)} MB`);