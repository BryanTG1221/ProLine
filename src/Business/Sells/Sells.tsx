import { SellsTable } from '@business/components/TableSells'
import Styles from './styles/sells.module.css'
import { Sell } from '@interfaces/types'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import toast from 'react-hot-toast'

export function Sells () {
  const [sells, setSells] = useState<Sell[]>([])
  useEffect(() => {
    async function getSells () {
      const fetchingData = await fetch('http://127.0.0.1:5000/api/sells/')
      const data = await fetchingData.json()
      setSells(data.sells)
    } 
    getSells()
  }, [])

  const columnsData = [
    {
      key: 'brand',
      label: 'Brand'
    },
    {
      key: 'model',
      label: "Model"
    },
    {
      key: 'year',
      label: "Year"
    },
    {
      key: 'price',
      label: 'Price'
    }
  ]

  async function handleExcel() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/sells/export/excel');
      if (response.ok) {
        const blob = await response.blob();
  
        // Crear un enlace de descarga
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ventas_reporte.xlsx';
  
        // Agregar el enlace al documento y simular un clic para iniciar la descarga
        document.body.appendChild(link);
        link.click();
  
        toast.success("Excel generado con éxito");
      } else {
        toast.error("Hubo un error");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      toast.error("Hubo un error");
    }
  }
  
  async function handlePDF() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/sells/export/pdf');
      if (response.ok) {
        const blob = await response.blob();
  
        // Crear un enlace de descarga
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ventas_reporte.pdf';
  
        // Agregar el enlace al documento y simular un clic para iniciar la descarga
        document.body.appendChild(link);
        link.click();
  
        toast.success("PDF generado con éxito");
      } else {
        toast.error("Hubo un error");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      toast.error("Hubo un error");
    }
  }
  
  return (
    <main className={Styles.container}>
      <div className={Styles.containerTable}>
        <div style={{display:'flex', gap: '12px', paddingBottom:'12px'}}>
          <Button variant='flat' color='success' onPress={handlePDF} >Generar PDF</Button>
          <Button variant='flat' color='primary' onPress={handleExcel}>Generar Excel</Button>
        </div>
        <SellsTable columnsToRender={columnsData} dataToRender={sells} />
      </div>
    </main> 
  )
}