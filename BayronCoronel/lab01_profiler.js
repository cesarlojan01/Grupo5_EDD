/**
 * Tarea 1: Utilidad para medir la memoria en Megabytes (MB).
 * El Heap es el espacio de memoria dinámico donde V8 almacena objetos y variables.
 */
function getMemoryUsage() {
  const memoryData = process.memoryUsage();
  // Convertimos de bytes a Megabytes (MB)
  const heapUsedMB = Math.round(memoryData.heapUsed / 1024 / 1024 * 100) / 100;
  return heapUsedMB;
}

// Medición detallada (incluye memoria fuera del heap, donde viven los Typed Arrays)
function getMemoryDetail() {
  const m = process.memoryUsage();
  const mb = (b) => Math.round(b / 1024 / 1024 * 100) / 100;
  return {
    heapUsed: mb(m.heapUsed),
    arrayBuffers: mb(m.arrayBuffers),
    external: mb(m.external),
    rss: mb(m.rss),
  };
}

module.exports = { getMemoryUsage, getMemoryDetail };