import { DetailSelected } from '@business/components/DetailSelected'
import { CustomTable } from '@business/components/TableMotorcycles'
import { useEffect, useState } from 'react'
import { Motorcycle } from '@interfaces/types'
import Styles from '@business/Cars/styles/main.module.css'

export function Motorcycles () {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([])
  const [selected, setSelected] = useState<Motorcycle | undefined>()
  const [defaultKey, setDefault] = useState('')
  const [sync, setSync] = useState(true)

  function activeSelected (motorcycle: Motorcycle) {
    setSelected(motorcycle)
  }

  function handleSync() {
    setSync(true)
  }
  
  useEffect(() => {
    async function GetData () {
      const fetchingData = await fetch('http://127.0.0.1:5000/api/motorcycles/')
      const data = await fetchingData.json()
      setMotorcycles(data)
      setDefault(data[0].model) 
      setSync(false)
    }
    GetData()
  }, [sync])
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
      key: 'actions',
      label: 'Actions'
    }
  ]
  return (
    <div className={Styles.container}>
      <CustomTable columnsToRender={columnsData} dataToRender={motorcycles} selectCar={activeSelected} defaultCar={defaultKey} syncData={handleSync} />
      <DetailSelected item={selected} />
    </div>
  )
}