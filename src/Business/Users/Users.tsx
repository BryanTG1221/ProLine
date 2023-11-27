import { ModalAddUser } from '@business/components/Modals'
import { UserTable   } from '@business/components/TableUsers'
import Styles from '@business/Users/styles/users.module.css'
import { User } from '@interfaces/types'
import { Button } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'

export function Users () {
  const [users, setUsers] = useState<User[]>([])
  const [modalAdd, setModalAdd] = useState(false)
  const [sync, setSync] = useState(true)

  function handleSync() {
    setSync(true)
  }

  useEffect(() => {
    async function GetData () {
      const fetchingData = await fetch('http://127.0.0.1:5000/api/users/employees')
      const data = await fetchingData.json()
      setUsers(data.employees)
      setSync(false)
    }
    GetData()
  }, [sync])

  function handleModal () {
    setModalAdd(!modalAdd)
  }

  const columnsData = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'lastname',
      label: "Lastname"
    },
    {
      key: 'position',
      label: "Position"
    },
    {
      key: 'department',
      label: "Department"
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
  return (
    <main className={Styles.container}>
      <ModalAddUser isOpen={modalAdd} syncData={handleSync} onOpen={handleModal} item={undefined} />
      <div className={Styles.containerBtn}>
        <Button startContent={<FaPlus />} style={{width: 'fit-content'}} variant='flat' color='success' onPress={handleModal}>Add employee </Button>
      </div>
      <div className={Styles.containerTable}>
        <UserTable columnsToRender={columnsData} dataToRender={users} syncData={handleSync}/>
      </div>
    </main>
  )
}