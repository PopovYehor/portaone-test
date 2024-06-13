export const getMin = (data, setMin) =>{
    setMin(data.reduce((min, v) => Number(min) <= Number(v) ? Number(min) : Number(v), Infinity))
}