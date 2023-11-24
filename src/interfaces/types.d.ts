export interface Car {
  id: number
  brand: string
  model: string
  year: number
  motor: string
  traction: string
  speedMax: number
  power: number
  torque: number
  stock: number
  type: string
  price: number
  urlImage: string
}

export interface Motorcycle {
  id: number
  brand: string
  model: string
  year: number
  cylinder: number
  speedMax: number
  power: number
  stock: number
  price: number
  urlImage: string
}

export interface Sell {
  id: number;
  product_id: number;
  purchase_date: string;
  purchase_time: string;
}

interface Employee {
  id: number;
  name: string;
  lastname: string;
  email: string;
  position: string;
  department: string;
  password_hash: string;
}

