import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react"
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { User } from '@interfaces/types'
import { useCallback, Key } from 'react'
import Styles from '@businessStyles/Table.module.css'

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<User>
}

export function UserTable ({ columnsToRender, dataToRender }: props) {
  const renderCell = useCallback((user: User, columnKey: Key) => {
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
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <AiOutlineEdit className={Styles.icon} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDeleteOutline className={Styles.icon} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <div className={Styles.containerTable}>
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