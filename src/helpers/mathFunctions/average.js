export const getAverageData = (data, setAverage)=>setAverage(Number((data.reduce((a, b) => Number(a) + Number(b), 0) / data.length).toFixed(0)))