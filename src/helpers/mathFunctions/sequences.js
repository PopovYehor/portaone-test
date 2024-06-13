const regExString = /[(\")(\[)(\])]/g

export const getSequenceOfDataMax=(data, setSequenceMax)=>{
    const sequenceData = []
    let arrData = []
    data.forEach((item, i)=>{
      if(Number(data[i+1]) > Number(item)){
        arrData.push(item)
      }else{
        if(arrData[arrData.length-1] == data[i-1]){
          arrData.push(item)
        }
        if(arrData.length > 1){
          sequenceData.push(arrData)
        }
        arrData = []
      }
    })
    if(sequenceData.length != 0){
    const lengths = sequenceData.map(a=>a.length)
    const longer = lengths.indexOf([...sequenceData].reduce((max, v) => max.length > v.length ? max : v, -Infinity).length)
    setSequenceMax(JSON.stringify(sequenceData[longer]).replace(regExString, " "))
    }
}

export const getSequenceOfDataMin = (data, setSequenceMin)=>{
    const sequenceData = []
    let arrData = []
    data.forEach((item, i)=>{
      if(Number(data[i+1])<Number(item)){
        arrData.push(item)
      }else{
        if(arrData[arrData.length-1] == data[i-1]){
          arrData.push(item)
        }
        if(arrData.length > 1){
          sequenceData.push(arrData)
        }
        arrData = []
      }
    })
    if(sequenceData.length != 0){
      const lengths = sequenceData.map(a=>a.length)
      const longer = lengths.indexOf([...sequenceData].reduce((max, v) => max.length > v.length ? max : v, Infinity).length)
      setSequenceMin(JSON.stringify(sequenceData[longer]).replace(regExString, " "))
    }
}