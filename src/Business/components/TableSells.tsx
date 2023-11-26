import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell,Tooltip } from "@nextui-org/react"
import { PriceItem } from './TableItems'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { Sell } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'
import { Key, useCallback } from "react"

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Sell>
}

export function SellsTable ({ columnsToRender, dataToRender }: props) {
  const renderCell = useCallback((sell: Sell, columnKey: Key) => {
    const cellValue = sell[columnKey as keyof Sell];
  
    switch (columnKey) {
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
  return (
    <div className={Styles.containerTable}>
      <Table removeWrapper aria-label="Table to render" >
        <TableHeader columns={columnsToRender}>
          {columnsToRender.map((column) =>
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data"} items={dataToRender}>
        {(item) => (
          <TableRow key={item.sell_id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
        </TableBody>
      </Table>  
    </div>
  )
}
