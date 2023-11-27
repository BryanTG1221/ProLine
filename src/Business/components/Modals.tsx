import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, UseDisclosureProps, Button, Input, Select, SelectItem} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Car, Motorcycle, User } from '@interfaces/types'
import Style from '@businessStyles/Table.module.css'


type Props = {
  item: Car | undefined | Motorcycle
}

type UserProps = {
  item: User | undefined
}

type Brands = {
  id: number
  name: string
  logo_url: string
}

export function ModalCar ({ isOpen, onOpen, item}: UseDisclosureProps & Props) {
  const [brands, setBrands] = useState<Brands[]>([])

  async function getBrands () {
    const fetchignData = await fetch('http://127.0.0.1:5000/api/brands/cars')
    const data = await fetchignData.json()
    setBrands(data.car_brands)
  }

  useEffect(() => { getBrands() }, [])
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <form className={Style.containerForm}>
                  <Select label="Select a brand" variant='faded' items={brands} defaultSelectedKeys={item?.brand ? [item.brand] : undefined}>
                    {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                  </Select>
                  <Input label="Model" variant='faded' value={item?.model} />
                  <Input label="Year" variant='faded' value={String(item?.year)} />
                  <Input label="Stock" variant='faded' value={String(item?.stock)} />
                  <Input label="Price" variant='faded' value={String(item?.price)} />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{backgroundColor:'var(--primaryColor)', color: 'white'}} onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export function ModalMotorcycle ({ isOpen, onOpen, item}: UseDisclosureProps & Props) {
  const [brands, setBrands] = useState<Brands[]>([])

  async function getBrands () {
    const fetchignData = await fetch('http://127.0.0.1:5000/api/brands/motorcycles')
    const data = await fetchignData.json()
    setBrands(data.motorcycle_brands)
  }

  useEffect(() => { getBrands() }, [])
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <Select label="Select a brand" variant='faded' items={brands} defaultSelectedKeys={item?.brand ? [item.brand] : undefined}>
                  {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                </Select>
                <Input label="Model" variant='faded' value={item?.model} />
                <Input label="Year" variant='faded' value={String(item?.year)} />
                <Input label="Stock" variant='faded' value={String(item?.stock)} />
                <Input label="Price" variant='faded' value={String(item?.price)} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{backgroundColor: "var(--primaryColor)", color: 'white'}} onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
export function ModalUsers ({ isOpen, onOpen, item}: UseDisclosureProps & UserProps) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <Input label="Name" variant='faded' value={item?.name} />
                <Input label="Lastname" variant='faded' value={item?.lastname} />
                <Input label="Position" variant='faded' value={String(item?.position)} />
                <Input label="Department" variant='faded' value={String(item?.department)} />
                <Input label="Email" variant='faded' value={item?.email} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{backgroundColor: "var(--primaryColor)", color: 'white'}} onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}


export function ModalToDelete ({ isOpen, onOpen}: UseDisclosureProps) {
  return (
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpen}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Eliminar Item</ModalHeader>
            <ModalBody>
              <p> 
                Estas seguro de eliminar a: Nombre Item
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="danger" onPress={onClose}>
                Eliminar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
}