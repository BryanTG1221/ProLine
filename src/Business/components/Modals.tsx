import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, UseDisclosureProps, Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState, ChangeEvent } from 'react'
import { Car, Motorcycle, User } from '@interfaces/types'
import Styles from '@businessStyles/modals.module.css'


type Props = {
  item: Car | undefined | Motorcycle,
  syncData: () => void
}

type UserProps = {
  item: User | undefined,
  syncData: () => void,
}

type Brands = {
  id: number
  name: string
  logo_url: string
}

export function ModalCar({ isOpen, onOpen, item, syncData }: UseDisclosureProps & Props) {
  const [brands, setBrands] = useState<Brands[]>([]);
  const [formData, setFormData] = useState({
    brand: item?.brand || '',
    model: item?.model || '',
    year: item?.year ? String(item.year) : '0',
    stock: item?.stock ? String(item.stock) : '0',
    price: item?.price ? String(item.price) : '0',
  });

  async function getBrands() {
    const fetchData = await fetch('http://127.0.0.1:5000/api/brands/cars');
    const data = await fetchData.json();
    setBrands(data.car_brands);
  }

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    setFormData({
      brand: item?.brand || '',
    model: item?.model || '',
    year: item?.year ? String(item.year) : '0',
    stock: item?.stock ? String(item.stock) : '0',
    price: item?.price ? String(item.price) : '0',
    });
  }, [item]);

  // Manejador para cambios en los inputs
  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit() {
    const fetchingToUpdate = await fetch(`http://127.0.0.1:5000/api/vehicles/${item?.id}`, {method: 'PUT', body: JSON.stringify(formData), headers: {"Content-Type": "application/json",}})
    const response = fetchingToUpdate.json()
    console.log(response) 
    syncData()
    console.log("Realizar petición HTTP con los valores:", formData);
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <form className={Styles.containerBrand}>
                  <Select label="Select a brand" variant='faded' items={brands} defaultSelectedKeys={formData.brand ? formData.brand : item?.brand} onChange={(event) => handleInputChange(event)} name="brand">
                    {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                  </Select>
                  <Input label="Model" variant='faded' value={formData.model ? formData.model : item?.model} onChange={(event) => handleInputChange(event)} name="model"/>
                  <Input label="Year" variant='faded' value={formData.year ? formData.year : String(item?.year)} onChange={(event) => handleInputChange(event)} name="year"/>
                  <Input label="Stock" variant='faded' value={formData.stock ? formData.stock : String(item?.stock)} onChange={(event) => handleInputChange(event)} name="stock"/>
                  <Input label="Price" variant='faded' value={formData.price ? String(formData.price) : String(item?.price)} onChange={(event) => handleInputChange(event)} name="price"/>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{ backgroundColor: 'var(--primaryColor)', color: 'white' }} onPress={onClose} type='button' onClick={handleSubmit}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


export function ModalMotorcycle({ isOpen, onOpen, item, syncData }: UseDisclosureProps & Props) {
  const [brands, setBrands] = useState<Brands[]>([]);
  const [formData, setFormData] = useState({
    brand: item?.brand || '',
    model: item?.model || '',
    year: item?.year ? String(item.year) : '0',
    stock: item?.stock ? String(item.stock) : '0',
    price: item?.price ? String(item.price) : '0',
  });
  async function getBrands() {
    const fetchignData = await fetch('http://127.0.0.1:5000/api/brands/motorcycles')
    const data = await fetchignData.json()
    setBrands(data.motorcycle_brands)
  }

  useEffect(() => { getBrands() }, [])

  useEffect(() => {
    setFormData({
      brand: item?.brand || '',
    model: item?.model || '',
    year: item?.year ? String(item.year) : '0',
    stock: item?.stock ? String(item.stock) : '0',
    price: item?.price ? String(item.price) : '0',
    });
  }, [item]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit() {
    const fetchingToUpdate = await fetch(`http://127.0.0.1:5000/api/motorcycles/${item?.id}`, {method: 'PUT', body: JSON.stringify(formData), headers: {"Content-Type": "application/json",}})
    const response = fetchingToUpdate.json()
    syncData()
    console.log(response) 
  }
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <form className={Styles.containerBrand}>
                  <Select label="Select a brand" variant='faded' items={brands} defaultSelectedKeys={formData.brand ? formData.brand : item?.brand} onChange={(event) => handleInputChange(event)} name="brand">
                    {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                  </Select>
                  <Input label="Model" variant='faded' value={formData.model ? formData.model : item?.model} onChange={(event) => handleInputChange(event)} name="model"/>
                  <Input label="Year" variant='faded' value={formData.year ? formData.year : String(item?.year)} onChange={(event) => handleInputChange(event)} name="year"/>
                  <Input label="Stock" variant='faded' value={formData.stock ? formData.stock : String(item?.stock)} onChange={(event) => handleInputChange(event)} name="stock"/>
                  <Input label="Price" variant='faded' value={formData.price ? String(formData.price) : String(item?.price)} onChange={(event) => handleInputChange(event)} name="price"/>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{ backgroundColor: 'var(--primaryColor)', color: 'white' }} onPress={onClose} type='button' onClick={handleSubmit}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );  
}


export function ModalUsers({ isOpen, onOpen, item, syncData }: UseDisclosureProps & UserProps) {

  const [formData, setFormData] = useState({
    name: item?.name || '',
    lastname: item?.lastname || '',
    position: item?.position || '',
    department: item?.department || '',
    email: item?.email || '',
  });

  useEffect(() => {
    setFormData({
      name: item?.name || '',
      lastname: item?.lastname || '',
      position: item?.position || '',
      department: item?.department || '',
      email: item?.email || '',
    });
  }, [item]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit() {
    const fetchingToUpdate = await fetch(`http://127.0.0.1:5000/api/users/${item?.user_id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const response = await fetchingToUpdate.json();
    syncData()
    console.log(response);
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
              <ModalBody>
                <form>
                  <Input label="Name" variant='faded' value={formData.name} onChange={(event) => handleInputChange(event)} name="name" />
                  <Input label="Lastname" variant='faded' value={formData.lastname} onChange={(event) => handleInputChange(event)} name="lastname" />
                  <Input label="Position" variant='faded' value={formData.position} onChange={(event) => handleInputChange(event)} name="position" />
                  <Input label="Department" variant='faded' value={formData.department} onChange={(event) => handleInputChange(event)} name="department" />
                  <Input label="Email" variant='faded' value={formData.email} onChange={(event) => handleInputChange(event)} name="email" />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button style={{ backgroundColor: 'var(--primaryColor)', color: 'white' }} onPress={onClose} type='button' onClick={handleSubmit}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

type UserToDelete = {
  item: Motorcycle | Car | undefined,
  user: User | undefined
  type: string
  syncData: () => void
}

export function ModalToDelete({ isOpen, onOpen, item, type, user, syncData }: UseDisclosureProps & UserToDelete) {
  const getDeleteEndpoint = () => {
    switch (type) {
      case 'Car':
        return `api/vehicle/${item?.id}`;
      case 'Motorcycle':
        return `api/motorcycles/${item?.id}`;
      case 'User':
        return `api/users/${user?.user_id}`;
      default:
        return '';
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/${getDeleteEndpoint()}`, {
        method: 'DELETE',
        // Puedes agregar headers y otros parámetros según lo necesario
      });

      if (response.ok) {
        onOpen();
        syncData()
      } else {
        console.error('Error al eliminar el elemento');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Eliminar Item</ModalHeader>
              <ModalBody>
                <p>
                  Estás seguro de eliminar a: {item?.brand ? item.brand : user?.name} {item?.model ? item.model : user?.lastname}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="danger" onPress={handleDelete}>
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function ModalAddCar ({ isOpen, onOpen, syncData }: UseDisclosureProps & UserProps) {
  const [brands, setBrands] = useState<Brands[]>()
  const [formData, setFormData] = useState<Car>({
    id: 0,
    brand: '',
    model: '',
    motor: '',
    traction: '',
    speedMax: 0,
    power: 0,
    type: '',
    year: 0,
    stock: 0,
    price: 0,
    torque: 0,
    urlImage: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, fieldName: string) {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  async function getBrands() {
    const fetchData = await fetch('http://127.0.0.1:5000/api/brands/cars');
    const data = await fetchData.json();
    setBrands(data.car_brands);
  }

  useEffect(() => {
    getBrands();
  }, []);

  async function handleAdd () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/vehicles/', { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
     })
     const repsonse = await fetchingData.json()
     console.log(repsonse)
    syncData()
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpen} size='5xl'>
      <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add car</ModalHeader>
              <ModalBody>
                <section className={Styles.containerForm}>
                  <div style={{display: 'flex', width: '50%', gap: '12px'}}>
                    <Select items={brands} label="Brand" size='sm' onChange={(e) => handleInputChange(e, 'brand')} value={formData.brand} >
                      {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                    </Select>
                    <Input label="Model" size='sm' onChange={(e) => handleInputChange(e, 'model')} value={formData.model}/>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Engine" size='sm' onChange={(e) => handleInputChange(e, 'motor')} value={formData.motor} />
                    <Select label="Traction"size='sm' onChange={(e) => handleInputChange(e, 'traction')} value={formData.traction} >
                      <SelectItem key={'front'}>Front</SelectItem>
                      <SelectItem key={'back'}>Back</SelectItem>
                      <SelectItem key={'total'}>Total</SelectItem>
                    </Select>
                    <Input label="Speed max" size='sm' type='number' onChange={(e) => handleInputChange(e, 'speedMax')} value={String(formData.speedMax)} />
                    <Input label="Power" size='sm' type='number' onChange={(e) => handleInputChange(e, 'power')} value={String(formData.power)}/>
                    <Input label="Torque" size='sm' type='number' onChange={(e) => handleInputChange(e, 'torque')} value={String(formData.torque)}/>
                    <Select label="Type"size='sm' onChange={(e) => handleInputChange(e, 'type')} value={formData.type}>
                      <SelectItem key={'combustion'}>Combustion</SelectItem>
                      <SelectItem key={'electric'}>Electric</SelectItem>
                    </Select>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Year" size='sm' type='number' onChange={(e) => handleInputChange(e, 'year')} value={String(formData.year)} />
                    <Input label="Stock" size='sm' type='number' onChange={(e) => handleInputChange(e, 'stock')} value={String(formData.stock)} />
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Price" size='sm' type='number' onChange={(e) => handleInputChange(e, 'price')} value={String(formData.price)} />
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant='solid' style={{color:'white'}}  onPress={handleAdd}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
      </ModalContent>
    </Modal>
  )
}

export function ModalAddMotorcycles ({ isOpen, onOpen, syncData }: UseDisclosureProps & UserProps) {
  const [brands, setBrands] = useState<Brands[]>()
  const [formData, setFormData] = useState<Motorcycle>({
    id: 0,
    brand: '',
    model: '',
    cylinder: 0,
    speedMax: 0,
    power: 0,
    year: 0,
    stock: 0,
    price: 0,
    urlImage: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, fieldName: string) {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  async function getBrands() {
    const fetchData = await fetch('http://127.0.0.1:5000/api/brands/motorcycles');
    const data = await fetchData.json();
    setBrands(data.motorcycle_brands);
  }

  useEffect(() => {
    getBrands();
  }, []);

  async function handleAdd () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/motorcycles/', { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
     })
     const repsonse = await fetchingData.json()
     console.log(repsonse)
    syncData()
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpen} size='5xl'>
      <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add car</ModalHeader>
              <ModalBody>
                <section className={Styles.containerForm}>
                  <div style={{display: 'flex', width: '50%', gap: '12px'}}>
                    <Select items={brands} label="Brand" size='sm' onChange={(e) => handleInputChange(e, 'brand')} value={formData.brand} >
                      {(brand) => <SelectItem key={brand.name}>{brand.name}</SelectItem>}
                    </Select>
                    <Input label="Model" size='sm' onChange={(e) => handleInputChange(e, 'model')} value={formData.model}/>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Speed max" size='sm' type='number' onChange={(e) => handleInputChange(e, 'speedMax')} value={String(formData.speedMax)} />
                    <Input label="Power" size='sm' type='number' onChange={(e) => handleInputChange(e, 'power')} value={String(formData.power)}/>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Year" size='sm' type='number' onChange={(e) => handleInputChange(e, 'year')} value={String(formData.year)} />
                    <Input label="Stock" size='sm' type='number' onChange={(e) => handleInputChange(e, 'stock')} value={String(formData.stock)} />
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Price" size='sm' type='number' onChange={(e) => handleInputChange(e, 'price')} value={String(formData.price)} />
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant='solid' style={{color:'white'}}  onPress={handleAdd}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
      </ModalContent>
    </Modal>
  )
}

export function ModalAddUser ({ isOpen, onOpen, syncData }: UseDisclosureProps & UserProps) {
  const [formData, setFormData] = useState<User>({
    email: '',
    is_active: true,
    is_employee: true,
    lastname: '',
    name: '',
    password_hash: '',
    user_id: 0,
    department: '',
    position: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, fieldName: string) {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  async function handleAdd () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/users/add', { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
     })
     const repsonse = await fetchingData.json()
     console.log(repsonse)
    syncData()
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpen} size='5xl'>
      <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add car</ModalHeader>
              <ModalBody>
                <section className={Styles.containerForm}>
                  <div style={{display: 'flex', width: '50%', gap: '12px'}}>
                    <Input label="Name" size='sm' onChange={(e) => handleInputChange(e, 'name')} value={formData.name}/>
                    <Input label="Lastname" size='sm' onChange={(e) => handleInputChange(e, 'lastname')} value={formData.lastname}/>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Position" size='sm' type='string' onChange={(e) => handleInputChange(e, 'position')} value={String(formData.position)} />
                    <Input label="Department" size='sm' type='string' onChange={(e) => handleInputChange(e, 'department')} value={String(formData.department)}/>
                  </div>
                  <div className={Styles.containerRow}>
                    <Input label="Email" size='sm' type='string' onChange={(e) => handleInputChange(e, 'email')} value={formData.email} />
                    <Input label="Password" size='sm' type='string' onChange={(e) => handleInputChange(e, 'password_hash')} value={formData.password_hash} />
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant='solid' style={{color:'white'}}  onPress={handleAdd}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
      </ModalContent>
    </Modal>
  )
}
