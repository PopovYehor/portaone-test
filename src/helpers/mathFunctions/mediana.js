export const getMedianOfData =(data, setMediana)=> {
    const middle = (data.length+1) / 2;
    const sorted = [...data].sort((a, b) => Number(a) - Number(b));
    const isEven = sorted.length % 2 === 0;
    return isEven ? setMediana((Number(sorted[middle - 1.5])+ Number(sorted[middle - 0.5])) / 2)
    :setMediana(Number(sorted[middle - 1]))
}
//https://stackoverflow.com/questions/45309447/calculating-median-javascript