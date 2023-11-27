import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/react"
import { PriceItem } from './TableItems'
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
      case "model":
        return (
          <div className={Styles.containerBrand}>
            <p className={Styles.title}>{cellValue}</p>
            <p className={Styles.brand}>{sell.brand}</p>
          </div>
        );
        case "price":
        return (
          <PriceItem value={Number(cellValue)} discount={false} />
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
