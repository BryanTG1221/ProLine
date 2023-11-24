import { CustomTable } from '@business/components/Table'
import { Car, Motorcycle } from '@interfaces/types'
import { useEffect, useState } from 'react'
export function Sells () {
  const [sells, setSells] = useState<Car | Motorcycle>()
  const [defaultKey, setDefault] = useState('1')
  useEffect(() => {

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
    <main>
      <div>
        <CustomTable dataToRender={[]} columnsToRender={columnsData} defaultCar={defaultKey} selectCar={null} />
      </div>
    </main> 
  )
}