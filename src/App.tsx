import { MdDelete } from 'react-icons/md'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <div className='h-[90vh] flex flex-col justify-center items-center'>
        <Header />
        <div className='w-[350px]'>
          <form className='mb-5'>
            <input type="text" className='w-full p-2 rounded-sm mb-2' />
            <button type='submit' className='bg-gray-700 w-full p-2'> Add</button>
          </form>
          <div className='bg-orange-800 h-52 overflow-y-auto'>
            <div className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1'>
              <p>Hello</p>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
