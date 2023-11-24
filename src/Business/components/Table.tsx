import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react"
import { Car } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'
import { useEffect } from "react"

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Car>
  selectCar: (row: Car) => void
  defaultCar: string
}

export function CustomTable ({ columnsToRender, dataToRender, selectCar }: props) {

  useEffect(() => { selectCar(dataToRender[0]) },[dataToRender, selectCar])
  return (
    <div className={Styles.container}>
      <Table removeWrapper aria-label="Table to render" selectionMode="single" color="warning" defaultSelectedKeys={['1']} >
        <TableHeader columns={columnsToRender}>
          {columnsToRender.map((column) =>
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data"}>
          {
            dataToRender.map((row) =>
              <TableRow key={row.id} onClick={() => selectCar(row)}>
                {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
              </TableRow>
            )
          }
        </TableBody>
      </Table>  
    </div>
  )
}