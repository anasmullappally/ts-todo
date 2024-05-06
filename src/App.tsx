import './App.css'
import { Header } from './components/Header'
import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import ItemsList from './components/ItemsList'
import { type Items } from './types/utils'

function App() {
  const [items, setItems] = useState<Items[]>([])
  const [input, setInput] = useState<string>("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setItems((pre) => [...pre, { title: input, id: Date.now().toString() }])
    setInput("")
  }


  return (
    <>
      <div className='h-[90vh] flex flex-col justify-center items-center'>
        <Header />
        <div className='w-[350px]'>
          <form className='mb-5' onSubmit={handleSubmit}>
            <Input type='text' input={input} setInput={setInput} />
            <Button className="bg-gray-700 w-full p-2" >Add </Button >
          </form>
          <div className=' h-52 overflow-y-auto'>
            <ItemsList items={items} setItems={setItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
