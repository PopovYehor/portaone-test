export const getMinMax = (data, version, setData) =>{
    version == 'min' ?
    setData(data.reduce((item, v) => Number(item) <= Number(v) ? Number(item) : Number(v), Infinity))
    : setData(data.reduce((item, v) => Number(item) >= Number(v) ? Number(item) : Number(v), -Infinity))
}