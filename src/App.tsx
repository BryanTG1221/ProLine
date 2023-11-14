import { useState } from 'react'
import { Button } from '@nextui-org/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button color='primary'>
        Button
      </Button>
    </>
  )
}

export default App
