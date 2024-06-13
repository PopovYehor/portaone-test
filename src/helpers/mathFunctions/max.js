export const getMax = (data, setMax) =>{
    setMax(data.reduce((max, v) => Number(max) >= Number(v) ? Number(max) : Number(v), -Infinity))
}