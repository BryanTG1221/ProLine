import { useEffect, Key, useCallback , useState} from "react"
import {  Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip, Button } from "@nextui-org/react"
import { ModalMotorcycle, ModalToDelete } from '@business/components/Modals'
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
  syncData: () => void
}

export function CustomTable ({ columnsToRender, dataToRender, selectCar, syncData }: props) {
  const [activeModal, setActiveModal] = useState(false)
  const [activeModalDelete, setActiveModalDelete] = useState(false)
  const [motorcycleToEdit, setMotorcycleToEdit] = useState<Motorcycle>()

  function onOpenModalDelete () {
    setActiveModalDelete(!activeModalDelete)
  }
  function onOpenModal () {
    setActiveModal(!activeModal)
  }

  const renderCell = useCallback((motorcycles: Motorcycle, columnKey: Key) => {
    function onOpenModal () {
      setActiveModal(!activeModal)
    }
    function onOpenModalDelete () {
      setActiveModalDelete(!activeModalDelete)
    }

    const cellValue = motorcycles[columnKey as keyof Motorcycle];
  
    switch (columnKey) {
      case "model":
        return (
          <div className={Styles.containerBrand}>
            <p className={Styles.title}>{cellValue}</p>
            <p className={Styles.brand}>{motorcycles.brand}</p>
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
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit motorcycles">
              <Button variant="light" isIconOnly onPress={onOpenModal} onClick={() => setMotorcycleToEdit(motorcycles)}>
                <AiOutlineEdit className={Styles.iconEdit} />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete motorcycle">
              <Button variant="light" isIconOnly color="danger" onPress={onOpenModalDelete} onClick={() => setMotorcycleToEdit(motorcycles)}>
                <MdDeleteOutline className={Styles.iconDelete} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [activeModal, activeModalDelete]);

  useEffect(() => { selectCar(dataToRender[0]) },[dataToRender, selectCar])
  return (
    <div className={Styles.container}>
      <ModalMotorcycle isOpen={activeModal} onOpen={onOpenModal} item={motorcycleToEdit} syncData={syncData}/>
      <ModalToDelete isOpen={activeModalDelete} onOpen={onOpenModalDelete} type="Motorcycle" item={motorcycleToEdit} user={undefined} syncData={syncData} />
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