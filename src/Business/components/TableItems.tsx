import { Chip } from '@nextui-org/react'

interface stockProps {
  value: number
}

export function StockItem ({ value }: stockProps) {
  const stylesDanger = 'danger'
  const stylesWarning = 'warning'
  const stylesSuccess = 'success'
  return (
    <Chip variant='flat' color={ value <= 5 ? stylesDanger : value > 5 && value < 20 ? stylesWarning : stylesSuccess }>{value}</Chip>
  )
}

interface PriceProps {
  value: number;
  discount: boolean;
}

export function PriceItem({ value, discount }: PriceProps) {
  const stylesDanger = 'danger';
  const stylesSuccess = 'success';

  // Formatear el valor como dinero
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return (
    <Chip variant='flat' color={discount ? stylesDanger : stylesSuccess}>
      {formattedValue}
    </Chip>
  );
}
