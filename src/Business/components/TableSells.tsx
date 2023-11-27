import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell,Tooltip, Button } from "@nextui-org/react"
import { ModalToDelete } from '@business/components/Modals'
import { PriceItem } from './TableItems'
import { MdDeleteOutline } from "react-icons/md";
import { Sell } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'
import { Key, useCallback, useState } from "react"

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Sell>
}

export function SellsTable ({ columnsToRender, dataToRender }: props) {
  const [activeModalDelete, setActiveModalDelete] = useState(false)

  function onOpenModalDelete () {
    setActiveModalDelete(!activeModalDelete)
  }

  const renderCell = useCallback((sell: Sell, columnKey: Key) => {
    function onOpenModalDelete () {
      setActiveModalDelete(!activeModalDelete)
    }
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
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete user">
              <Button variant="light" color="danger" isIconOnly onPress={onOpenModalDelete}>
                <MdDeleteOutline className={Styles.iconDelete} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [activeModalDelete]);
  return (
    <div className={Styles.containerTable}>
      <ModalToDelete isOpen={activeModalDelete} onOpen={onOpenModalDelete} />
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
