import { ReactSetState } from "../types/utils"

type Input = {
    type: "text" | "number"
    input: string,
    setInput:  ReactSetState<string>
}
export default function Input({ input, setInput, type }: Input) {
    return (
        <>
            <input
                type={type}
                className='w-full p-2 rounded-sm mb-2'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </>
    )
}
