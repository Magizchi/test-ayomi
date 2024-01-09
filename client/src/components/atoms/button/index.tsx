import { FunctionComponent } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Buttons: FunctionComponent<ButtonProps> = ({ children, className, ...props }) =>
    <button className={"flex items-center justify-center w-24 h-24 col-span-1 text-white rounded-md active:bg-gray-400 active:border-2 border-gray-500 " + className} {...props}>{children}</button>

export default Buttons