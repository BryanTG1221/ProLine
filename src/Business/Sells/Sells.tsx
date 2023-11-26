import { SellsTable } from '@business/components/TableSells'
import Styles from './styles/sells.module.css'
import { Sell } from '@interfaces/types'
import { useEffect, useState } from 'react'

export function Sells () {
  const [sells, setSells] = useState<Sell[]>([])
  useEffect(() => {
    async function getSells () {
      const fetchingData = await fetch('http://127.0.0.1:5000/api/sells')
      const data = await fetchingData.json()
      setSells(data.sells)
    } 
    getSells()
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
      key: 'price',
      label: 'Price'
    },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
  return (
    <main className={Styles.container}>
      <div className={Styles.containerTable}>
        <SellsTable columnsToRender={columnsData} dataToRender={sells} />
      </div>
    </main> 
  )
}