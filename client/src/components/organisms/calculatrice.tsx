import { FunctionComponent } from "react"
import Buttons from "../atoms/button"

interface Props {
    onChange: (str: string) => void;
    onEnter: () => void;
    clearAll: () => void;
    clearLast: () => void;
    getResult: () => void;
}

/**
 * 
 * @param onChange
 * @param onEnter enter info
 * @param clearAll delete all
 * @param clearLast delete last element
 * @param getResult call api to get result 
 * @returns 
 */
const Calculatrice: FunctionComponent<Props> = ({ onChange, onEnter, clearAll, clearLast, getResult }) => {
    return (
        <div className="grid grid-cols-4 grid-rows-5 gap-1 py-2 mb-2 w-fit">
            <Buttons className="col-start-2 bg-gray-700" onClick={() => onChange('/')}>/</Buttons>
            <Buttons className="bg-gray-700" onClick={() => onChange('*')}>*</Buttons>
            <Buttons className="bg-gray-700" onClick={() => onChange('-')}>-</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('7')}>7</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('8')}>8</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('9')}>9</Buttons>
            <Buttons className="h-24 bg-gray-700" onClick={() => onChange('+')}>+</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('4')}>4</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('5')}>5</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('6')}>6</Buttons>
            <Buttons onClick={() => onEnter()} className="bg-gray-700">entrer</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('1')}>1</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('2')}>2</Buttons>
            <Buttons className="bg-gray-500" onClick={() => onChange('3')}>3</Buttons>
            <Buttons onClick={() => clearLast()} className="bg-gray-700">supp</Buttons>
            <Buttons onClick={() => clearAll()} className="bg-gray-700">CE</Buttons>
            <Buttons onClick={() => onChange('0')} className="col-start-2 bg-gray-500">0</Buttons>
            <Buttons onClick={() => getResult()} className="col-start-4 !text-black bg-gray-300">=</Buttons>
        </div>
    )
}

export default Calculatrice