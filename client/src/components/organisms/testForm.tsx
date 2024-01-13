import { useState } from "react"
import Calculatrice from "./calculatrice";

const TestForm = () => {
    const [state, setState] = useState<string>('');
    const [operation, setOperationn] = useState<string[]>([]);
    const [result, setResult] = useState<number>(0)
    // const [message, setMessage] = useState<string>('');

    const operator = ['^', '/', '+', '-', '*']
    console.log('Operation[Operation.len]', operation.length, operation[operation.length - 1]);

    const clearAll = () => [setState(''), setOperationn([]), setResult(0)];

    const onChange = (str: string) => {
        if (str === '') return
        if (operator.includes(str)) {
            if (state !== "") {
                setOperationn([...operation, state, str])
            } else {
                setOperationn([...operation, str])
            }
            return
        }
        setState(state + str)

    }
    const onEnter = () => {
        if (state === '') return
        setOperationn([...operation, state])
        setState('')
    }

    const clearLast = () => {
        const newOperation = [...operation]
        newOperation.pop()
        return setOperationn(newOperation)
    }

    const getResult = async () => {
        const response = await fetch('http://localhost:8000/items?q=' + operation.join(',')).then(data => data.json())
        setResult(response.result)
    }

    // const getCsv = async () => {
    //     const response = await fetch('http://localhost:8000/csv').then(data => data.json())
    // }

    return (
        <section className="flex flex-col items-center justify-center bg-gray-900">
            <p className="text-white">exemple: 3 10 5 + * ou 10 5 + 3 *</p>
            <p className="p-3 my-10 text-5xl bg-white">{operation.join(' ')} {result ? `= ${result}` : ''}</p>
            {/* <p className="text-xl text-red-500">{message}</p> */}
            <Calculatrice onChange={onChange} onEnter={onEnter} clearAll={clearAll} clearLast={clearLast} getResult={getResult} />
        </section>
    )
}

export default TestForm