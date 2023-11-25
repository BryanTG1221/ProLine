import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react"
import { Sell } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Sell>
}

export function SellsTable ({ columnsToRender, dataToRender }: props) {
  return (
    <div className={Styles.container}>
      <Table removeWrapper aria-label="Table to render" >
        <TableHeader columns={columnsToRender}>
          {columnsToRender.map((column) =>
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data"}>
          {
            dataToRender.map((row) =>
              <TableRow key={row.id}>
                {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
              </TableRow>
            )
          }
        </TableBody>
      </Table>  
    </div>
  )
}