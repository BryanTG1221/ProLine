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

interface Sell {
  id: number;
  product_id: number;
  purchase_date: string; // Assuming date is stored as string in the database
  purchase_time: string; // Assuming time is stored as string in the database
  brand?: string | null; // Assuming brand can be null
  model?: string | null; // Assuming model can be null
  year?: number | null; // Assuming year can be null
  price?: number | null; // Assuming price can be null
}


interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  position?: string | null;
  department?: string | null;
  password_hash: string;
  is_active: boolean;
  is_employee: boolean;
}
