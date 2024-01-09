import { useState } from "react"
import Calculatrice from "./calculatrice";

const TestForm = () => {
    const [state, setState] = useState<string>('');
    const [operation, setOperationn] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');

    const operator = ['^', '/', '+', '-', '*']
    const operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    console.log('Operation[Operation.len]', operation.length, operation[operation.length - 1]);

    const clearAll = () => [setState(''), setOperationn([])]
    const onChange = (str: string) => {
        if (str === '') return
        // // Eviter de commencer avec un opérateur
        // if (operator.includes(str) && Operation.length === 0) {
        //     return setMessage('Veuillez entrer un nombre')
        // }

        // // Eviter 2 opérateurs de suite
        // if (operator.includes(str) && operator.includes(Operation[Operation.length - 1])) {
        //     return setMessage('Veuillez entre un nombre au lieu d\'un second opérateur')
        // }

        // setMessage('')

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
    console.log('state', state)
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

    const getResult = () => {
    }

    return (
        <section className="flex flex-col items-center justify-center bg-gray-900">
            <p className="p-3 my-10 text-5xl bg-white">{operation.join(' ')} {!!operation.length && '='}</p>

            <p className="text-xl text-red-500">{message}</p>
            <Calculatrice onChange={onChange} onEnter={onEnter} clearAll={clearAll} clearLast={clearLast} getResult={getResult} />
        </section>
    )
}

export default TestForm