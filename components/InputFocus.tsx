"use client";

import { useRef } from "react";

const InputWithFocus: React.FC = () => {
    const inputElement = useRef<HTMLInputElement>(null)

    const onFocusClick = () => {
        if(inputElement && inputElement.current) {
            inputElement.current.focus()
        }

    }

    return (
        <div>
            <input type="text" />
            <button onClick={onFocusClick}>Focus the Input</button>
        </div>
    )
}

export default InputWithFocus