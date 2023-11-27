import { DetailSelected } from '@business/components/DetailSelected'
import { CustomTable } from '@business/components/TableMotorcycles'
import { useEffect, useState } from 'react'
import { Motorcycle } from '@interfaces/types'
import Styles from '@business/Cars/styles/main.module.css'
import { FaPlus } from 'react-icons/fa6'
import { ModalAddMotorcycles } from '@business/components/Modals'
import { Button } from '@nextui-org/react'

export function Motorcycles () {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([])
  const [selected, setSelected] = useState<Motorcycle | undefined>()
  const [defaultKey, setDefault] = useState('')
  const [sync, setSync] = useState(true)
  const [modalAdd, setModalAdd] = useState(false)

  function activeSelected (motorcycle: Motorcycle) {
    setSelected(motorcycle)
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

  function handleSync() {
    setSync(true)
  }

  function handleModal () {
    setModalAdd(!modalAdd)
  }

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
      <ModalAddMotorcycles syncData={handleSync} isOpen={modalAdd} onOpen={handleModal} item={undefined} />
      <div style={{padding: '8px'}} >
        <Button startContent={<FaPlus />} style={{width: 'fit-content'}} variant='flat' color='success' onPress={handleModal}>Add motorcycle </Button>
      </div>
      <section className={Styles.containerSections}>
        <CustomTable columnsToRender={columnsData} dataToRender={motorcycles} selectCar={activeSelected} defaultCar={defaultKey} syncData={handleSync} />
        <DetailSelected item={selected} />
      </section>
    </div>
  )
}