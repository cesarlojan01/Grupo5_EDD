function getMemoryUsage(){
    const memoryData = process.memoryUsage()
    const headUsedMB = Math.round(memoryData.heapUsed / 1024 / 1024 * 100 / 100)
    return headUsedMB

}

export default getMemoryUsage