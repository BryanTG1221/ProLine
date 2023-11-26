import { useEffect, Key, useCallback } from "react"
import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip } from "@nextui-org/react"
import { PriceItem, StockItem } from './TableItems'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { Motorcycle } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Motorcycle>
  selectCar: (row: Motorcycle) => void | null
  defaultCar: string
}

export function CustomTable ({ columnsToRender, dataToRender, selectCar }: props) {
  const renderCell = useCallback((motorcycles: Motorcycle, columnKey: Key) => {
    const cellValue = motorcycles[columnKey as keyof Motorcycle];
  
    switch (columnKey) {
      case "stock":
        return (
          <StockItem value={Number(cellValue)} />
        );
        case "price":
        return (
          <PriceItem value={Number(cellValue)} discount={false} />
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

  useEffect(() => { selectCar(dataToRender[0]) },[dataToRender, selectCar])
  return (
    <div className={Styles.container}>
      <Table removeWrapper aria-label="Table to render" selectionMode="single" color="warning" defaultSelectedKeys={['1']} >
        <TableHeader columns={columnsToRender}>
          {columnsToRender.map((column) =>
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data"} items={dataToRender}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>  
    </div>
  )
}