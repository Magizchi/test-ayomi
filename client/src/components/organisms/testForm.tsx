import { useState } from "react"
import Calculatrice from "./calculatrice";
import Buttons from "../atoms/button";

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

    const headers = new Headers();
    // pas la bonne methode mais sa fonctionne
    headers.append('Access-Control-Allow-Origin', '*');
    const options = {
        method: 'GET',
        headers,
    };

    const getResult = async () => {
        const response = await fetch('http://localhost:8000/items?q=' + operation.join(','), options).then(data => data.json())
        setResult(response.result)
    }

    const getCsv = async () => {
        const response = await fetch('http://localhost:8000/csv', options).then(data => data.json())
    }

    return (
        <section >
            <Buttons className="w-48 text-black border-2 border-black" onClick={() => getCsv()}>Télécharger CSV</Buttons>
            <div className="flex flex-col items-center justify-center bg-gray-900">
                <p className="p-3 my-10 text-5xl bg-white">{operation.join(' ')} {result ? `= ${result}` : ''}</p>
                {/* <p className="text-xl text-red-500">{message}</p> */}
                <Calculatrice onChange={onChange} onEnter={onEnter} clearAll={clearAll} clearLast={clearLast} getResult={getResult} />
            </div>
        </section>
    )
}

export default TestForm