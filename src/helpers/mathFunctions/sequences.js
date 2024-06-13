const regExString = /[(\")(\[)(\])]/g
const sequenceData = []
let arrData = []

const ifSequenceOfData = (data, item, i)=>{
  if(arrData[arrData.length-1] == data[i-1]){
    arrData.push(item)
  }
  if(arrData.length > 1){
    sequenceData.push(arrData)
  }
  arrData = []
}

export const getSequenceOfData=(data, version, setSequence)=>{
    data.forEach((item, i)=>{
      if(version == 'max'){
        if(Number(data[i+1]) > Number(item)){
          arrData.push(item)
        }else{
          ifSequenceOfData(data, item, i)
        }
      }else{
        if(Number(data[i+1])<Number(item)){
          arrData.push(item)
        }else{
          ifSequenceOfData(data, item, i)
        }
      }
    })
    if(sequenceData.length != 0){
    const lengths = sequenceData.map(a=>a.length)
    const longer = lengths.indexOf([...sequenceData].reduce((max, v) => max.length > v.length ? max : v, -Infinity).length)
    setSequence(JSON.stringify(sequenceData[longer]).replace(regExString, " "))
    }
}