import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip, Button } from "@nextui-org/react"
import { PriceItem, StockItem } from './TableItems'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { Car } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'
import { useEffect, Key, useCallback, useState } from "react"
import { ModalCar } from "./Modals";

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Car>
  selectCar: (row: Car) => void | null
  defaultCar: string
}


export function CustomTable ({ columnsToRender, dataToRender, selectCar }: props) {
  const [activeModal, setActiveModal] = useState(false)

  function onOpenModal () {
    setActiveModal(!activeModal)
  }
  
  const renderCell = useCallback((car: Car, columnKey: Key) => {
    function onOpenModal () {
      setActiveModal(!activeModal)
    }
    const cellValue = car[columnKey as keyof Car];
  
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
          <div className="flex">
            <Tooltip content="Edit user">
              <Button isIconOnly variant="light" color="default" onPress={onOpenModal}>
                <AiOutlineEdit className={Styles.icon} />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <Button variant="light" color="danger" isIconOnly>
                <MdDeleteOutline className={Styles.icon} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  },[activeModal]);

  useEffect(() => { selectCar(dataToRender[0]) },[dataToRender, selectCar])
  return (
    <div className={Styles.container}>
      <ModalCar isOpen={activeModal} onOpen={onOpenModal} />
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