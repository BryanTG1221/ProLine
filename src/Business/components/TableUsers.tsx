import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Chip, Tooltip, Button } from "@nextui-org/react"
import { ModalUsers, ModalToDelete } from '@business/components/Modals'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { User } from '@interfaces/types'
import { useCallback, Key, useState } from 'react'
import Styles from '@businessStyles/Table.module.css'

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<User>
  syncData: () => void
}

export function UserTable ({ columnsToRender, dataToRender, syncData }: props) {
  const [activeModal, setActiveModal] = useState(false)
  const [activeModalDelete, setActiveModalDelete] = useState(false)
  const [userToEdit, setUserToEdit] = useState<User>()

  function onOpenModalDelete () {
    setActiveModalDelete(!activeModalDelete)
  }
  function onOpenModal () {
    setActiveModal(!activeModal)
  }

  const renderCell = useCallback((user: User, columnKey: Key) => {

    function onOpenModalDelete () {
      setActiveModalDelete(!activeModalDelete)
    }
    function onOpenModal () {
      setActiveModal(!activeModal)
    }
    const cellValue = user[columnKey as keyof User];
  
    switch (columnKey) {
      case "stock":
        return (
          <Chip className="capitalize" color="danger" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <Button isIconOnly color="default" variant="light" onPress={onOpenModal} onClick={() => setUserToEdit(user)}>
                <AiOutlineEdit className={Styles.iconEdit} />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <Button isIconOnly color="danger" variant="light" onPress={onOpenModalDelete} onClick={() => setUserToEdit(user)}>
                <MdDeleteOutline className={Styles.iconDelete} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [activeModal, activeModalDelete]);
  return (
    <div className={Styles.containerTable}>
      <ModalUsers isOpen={activeModal} onOpen={onOpenModal} item={userToEdit} syncData={syncData}/>
      <ModalToDelete isOpen={activeModalDelete} onOpen={onOpenModalDelete} user={userToEdit} type={"User"} item={undefined} syncData={syncData}  />
      <Table removeWrapper aria-label="Table to render" >
        <TableHeader columns={columnsToRender}>
          {columnsToRender.map((column) =>
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data"} items={dataToRender} >
          {(item) => (
            <TableRow key={item.user_id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>  
    </div>
  )
}