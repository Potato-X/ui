import React, { useState } from "react";
import classNames from "classnames";
interface IInputProps {
    className?: string;
}
type NativeInputProps = IInputProps & React.InputHTMLAttributes<HTMLElement>
const Input: React.FC<Partial<NativeInputProps>> = (props) => {
    const [inputValue, setInputValue] = useState("")
    const { className, ...restProps } = props
    const classes = classNames('evil-input', className)
    return (
        <input type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} className={classes} {...restProps} />
    )
}


export default Input