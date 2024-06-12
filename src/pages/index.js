'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState([])
  const [mediana, setMediana] = useState(0)
  const [average, setAverage] = useState(0)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [sequenceMax, setSequenceMax] = useState([])
  const [sequenceMin, setSequenceMin] = useState([])

  const fetchData = async ()=>{
    const req = await axios.get('http://localhost:3000/10m.txt')
    const data = await req.data.replace(/(\n)/g, ',').split(',')
    setData(data)
  }
  
  const getMax = (arr) =>{
    console.log(arr.reduce((max, v) => Number(max) >= Number(v) ? Number(max) : Number(v), -Infinity))
  }
  const getMin = () =>{
    console.log(data.reduce((min, v) => Number(min) <= Number(v) ? Number(min) : Number(v), Infinity))
  }

  const averageValue = ()=>console.log(Number((data.reduce((a, b) => Number(a) + Number(b), 0) / data.length).toFixed(0)))

  const medianOfData =()=> {
    const middle = (data.length+1) / 2;
    const sorted = [...data].sort((a, b) => Number(a) - Number(b));
    const isEven = sorted.length % 2 === 0;
    return isEven ? console.log((Number(sorted[middle - 1.5])+ Number(sorted[middle - 0.5])) / 2)
    :console.log(Number(sorted[middle - 1]))
  }

  const sequenceOfDataMax=()=>{
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
    console.log(sequenceData[longer])
    }
  }

  const sequenceOfDataMin = ()=>{
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
      console.log(sequenceData[longer])
      }
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    sequenceOfDataMin()
  },[data])

  return (
  <>app</>
  )
}

