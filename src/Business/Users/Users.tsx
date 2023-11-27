import { UserTable   } from '@business/components/TableUsers'
import Styles from '@business/Users/styles/users.module.css'
import { User } from '@interfaces/types'
import { useState, useEffect } from 'react'

export function Users () {
  const [users, setUsers] = useState<User[]>([])
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
      <div className={Styles.containerTable}>
        <UserTable columnsToRender={columnsData} dataToRender={users} syncData={handleSync}/>
      </div>
    </main>
  )
}