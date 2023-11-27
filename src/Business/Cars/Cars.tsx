import { DetailSelected } from '@business/components/DetailSelected'
import { CustomTable } from '@business/components/TableCars'
import { useEffect, useState } from 'react'
import { Car } from '@interfaces/types'
import Styles from '@business/Cars/styles/main.module.css'
import { FaPlus } from "react-icons/fa6";
import { Button } from '@nextui-org/react'

export function Cars () {
  const [cars, setCars] = useState<Car[]>([])
  const [selected, setSelected] = useState<Car | undefined>()
  const [defaultKey, setDefault] = useState('')
  const [sync, setSync] = useState(true)

  function activeSelected (car: Car) {
    setSelected(car)
  }

  function handleSync() {
    setSync(true)
  }

  async function GetData () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/vehicles/')
    const data = await fetchingData.json()
    setCars(data)
    setDefault(data[0].model)
    setSync(false)
  }

  useEffect(() => {
    if (sync) {
      GetData()
    }
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
      <div style={{padding: '8px'}}>
        <Button startContent={<FaPlus />} style={{width: 'fit-content'}} variant='flat' color='success'>Add car</Button>
      </div>
      <section className={Styles.containerSections}>
        <CustomTable columnsToRender={columnsData} dataToRender={cars} selectCar={activeSelected} defaultCar={defaultKey} syncData={handleSync} />
        <DetailSelected item={selected} />
      </section>
    </div>
  )
}