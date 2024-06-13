'use client'
import Header from "@/components/header/header"
import styles from "./page.module.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { getMinMax } from "@/helpers/mathFunctions/minMax"
import { getAverageData } from "@/helpers/mathFunctions/average"
import { getMedianOfData } from "@/helpers/mathFunctions/mediana"
import { getSequenceOfData } from "@/helpers/mathFunctions/sequences"
import Loader from "@/components/loader/loader"
import { URL } from "@/constants/url"

export default function Home() {
  const [data, setData] = useState([])
  const [mediana, setMediana] = useState(0)
  const [average, setAverage] = useState(0)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [sequenceMax, setSequenceMax] = useState(0)
  const [sequenceMin, setSequenceMin] = useState(0)
  const [dataItem, setDataItem] = useState([{name: '', value: ''}])
  const [load, setLoad] = useState(true)

  const fetchData = async ()=>{
    const req = await axios.get(`${URL}/db.txt`)
    const data = await req.data.replace(/\r\n|\n/g, ',').split(',')
    setData(data)
  }
  
  const setDataItems = ()=>{
    const dataItems = [
      {name: "The maximum number in the file:", value: max},
      {name: "The minimum number in the file:", value: min},
      {name: "Arithmetic mean value:", value: average},
      {name: "Median:", value: mediana},
      {name: "The largest sequence of numbers (one after the other) that increases:", value: sequenceMax},
      {name: "The largest sequence of numbers (one after the other) that is decreasing:", value:sequenceMin}
    ]
    setDataItem(dataItems)
    if(max != 0){
      setLoad(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    getMinMax(data, 'max', setMax)
    getMinMax(data, 'min',setMin)
    getAverageData(data, setAverage)
    getMedianOfData(data, setMediana)
    getSequenceOfData(data, 'max', setSequenceMax)
    getSequenceOfData(data,'min', setSequenceMin)
  },[data])

  useEffect(()=>{
    setDataItems()
  },[sequenceMin])

  return (
  <>
  <div className={styles.wrap}>
    <Header/>
    {load ? 
      <Loader/>
    :
      <div className={styles.container}>
        {dataItem.map((item)=>{
          return(
            <>
              <div className={styles.item_wrap}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.value}>{item.value}</p>
              </div>
            </>
          )
        })}
      </div>
    }
  </div>
  </>
  )
}