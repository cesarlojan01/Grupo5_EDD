const {performance} = require('perf_hooks')

const historialSatelitalGlobal = []

console.log("[Auditoria] Iniciando simulacion de Memory Leak....")

function procesarCoordenada(){
    const paquete = {
        timestamp: Date.now(),
        lat: Math.random() * 90,
        lng: Math.random() * 180,
        payload: new Array(100000).fill('datos_topograficos_basura')

    }
    historialSatelitalGlobal.push(paquete)
}

for(let i=1;i<=500;i++){
    if(i%100 === 0){
        const memoryUsed = Math.round(process.memoryUsage().heapUsed / 1024 / 1024)
        console.log(`Iteracion ${i} | RAM consumida: ${memoryUsed} MB`)
    }
}

console.log(`[Auditoria] Finalizado. El arreglo tiene ${historialSatelitalGlobal.length} registros en el heap`)