import { DetailSelected } from '@business/components/DetailSelected'
import { CustomTable } from '@business/components/Table'
import { useEffect, useState } from 'react'
import { Car } from '@interfaces/types'
import Styles from '@business/Cars/styles/main.module.css'

export function Motorcycles () {
  const [motorcycles, setMotorcycles] = useState<Car[]>([])
  const [selected, setSelected] = useState<Car | undefined>()
  const [defaultKey, setDefault] = useState('')

  function activeSelected (car: Car) {
    setSelected(car)
  }
  
  useEffect(() => {
    async function GetData () {
      const fetchingData = await fetch('http://127.0.0.1:5000/api/motorcycles')
      const data = await fetchingData.json()
      setMotorcycles(data)
      console.log(data)
      setDefault(data[0].model)
    }
    GetData()
  }, [])
  const columnsData = [
    {
      key: 'brand',
      label: 'Brand'
    },
    {
      key: 'model',
      label: "Model"
    },
    {
      key: 'year',
      label: "Year"
    },
    {
      key: 'stock',
      label: "Stock"
    },
    {
      key: 'price',
      label: 'Price'
    },
    {
      key: 'action',
      label: 'Actions'
    }
  ]
  return (
    <div className={Styles.container}>
      <CustomTable columnsToRender={columnsData} dataToRender={motorcycles} selectCar={activeSelected} defaultCar={defaultKey} />
      <DetailSelected item={selected} />
    </div>
  )
}