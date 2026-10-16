const {performance} = require('perf_hooks')

const historialSatelital =[]
const LIMITE_HISTORIAL = 50

function procesarCoordenadaOptimizada(){
    const paquete = {
        timestamp: Date.now(),
        lat: Math.random() * 90,
        lng: Math.random() * 180,
        payload: new Array(100000).fill('datos_topograficos_optimizados')

    }
    historialSatelital.push(paquete)
    if(historialSatelital.length > LIMITE_HISTORIAL){
        historialSatelital.shift()
    }
}

for(let i=1;i<1000;i++){
    procesarCoordenadaOptimizada()
    if( i%200===0){
        if(global.gc) global.gc
        const memoryUsed = Math.round(process.memoryUsage().heapUsed / 1024 /1024)
        console.log(`Iteracion ${i} | RAM Controlada ${memoryUsed} MB`)
    }
}
