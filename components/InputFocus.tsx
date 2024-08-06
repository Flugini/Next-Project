"use client";

import { useRef, useContext } from "react";

const InputWithFocus: React.FC = () => {
    const inputElement = useRef<HTMLInputElement>(null)

    const onFocusClick = () => {
        if(inputElement && inputElement.current) {
            inputElement.current.focus();
        }

    };

    return (
        <div>
            <h2>focus element</h2>
            <input type="text" ref={inputElement} />
            <button onClick={onFocusClick}>Focus the Input</button>
        </div>
    )
}

export default InputWithFocus