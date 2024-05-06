
import { Items, ReactSetState } from '../types/utils'
import Button from './Button'
import { MdDelete } from 'react-icons/md'

type ItemsList = {
    items: Items[],
    setItems: ReactSetState<Items[]>

}

export default function ItemsList({ items, setItems }: ItemsList) {

    const handleDelete = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }
    return (
        <>
            {items.map((item) => (
                <div key={item.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1'>
                    <p>{item.title}</p>
                    <Button onClick={() => handleDelete(item.id)} >
                        <MdDelete />
                    </Button >
                </div>
            ))}
        </>
    )
}
