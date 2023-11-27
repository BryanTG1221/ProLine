import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip, Button } from "@nextui-org/react"
import { PriceItem, StockItem } from './TableItems'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { Car } from '@interfaces/types'
import Styles from '@businessStyles/Table.module.css'
import { useEffect, Key, useCallback, useState } from "react"
import { ModalCar, ModalToDelete } from "./Modals";

type columnsStruct = {
  key: string
  label: string
}

type props = {
  columnsToRender: Array<columnsStruct>
  dataToRender: Array<Car>
  selectCar: (row: Car) => void | null
  defaultCar: string
  syncData: () => void
}


export function CustomTable ({ columnsToRender, dataToRender, selectCar, syncData }: props) {
  const [activeModal, setActiveModal] = useState(false)
  const [activeModalDelete, setActiveModalDelete] = useState(false)
  const [carToEdit, setCarToEdit] = useState<Car>()

  function onOpenModalDelete () {
    setActiveModalDelete(!activeModalDelete)
  }
  function onOpenModal () {
    setActiveModal(!activeModal)
  }
  
  const renderCell = useCallback((car: Car, columnKey: Key) => {
    function onOpenModal () {
      setActiveModal(!activeModal)
    }
    function onOpenModalDelete () {
      setActiveModalDelete(!activeModalDelete)
    }
    const cellValue = car[columnKey as keyof Car];
  
    switch (columnKey) {
      case "model":
        return (
          <div className={Styles.containerBrand}>
            <p className={Styles.title}>{cellValue}</p>
            <p className={Styles.brand}>{car.brand}</p>
          </div>
        );
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
            <Tooltip content="Edit car">
              <Button isIconOnly variant="light" color="default" onPress={onOpenModal} onClick={() => setCarToEdit(car)}>
                <AiOutlineEdit className={Styles.iconEdit} />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete car">
              <Button variant="light" color="danger" isIconOnly onPress={onOpenModalDelete} onClick={() => setCarToEdit(car)}>
                <MdDeleteOutline className={Styles.iconDelete} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  },[activeModal, activeModalDelete]);

  useEffect(() => { selectCar(dataToRender[0]) },[dataToRender, selectCar])
  return (
    <div className={Styles.container}>
      <ModalCar isOpen={activeModal} onOpen={onOpenModal} item={carToEdit} syncData={syncData} />
      <ModalToDelete isOpen={activeModalDelete} onOpen={onOpenModalDelete} item={carToEdit} type={"Car"} user={undefined} syncData={syncData} />
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