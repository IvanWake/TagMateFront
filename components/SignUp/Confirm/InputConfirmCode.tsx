'use client';
import { useState, useRef, type KeyboardEvent } from "react";
import styleInput from "../../../app/auth/confirm/confirm.module.css";

const InputConfirmCode = () => {
    const [confirmCode, setConfirmCode] = useState(["", "", "", ""])
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const onChangeHandler = (index: number, value: string) => {
        const newConfirmCode = [...confirmCode];
        newConfirmCode[index] = value;
        setConfirmCode(newConfirmCode);

        if (value && index < 3) {
            inputRefs[index + 1].current?.focus()
        }
    }

    const onKeyDownHandler = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !confirmCode[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    }

    return (
        <div className={styleInput["input-group"]}>
            {
                confirmCode?.map((item, index) => (
                    <input
                        key={index}
                        ref={inputRefs[index]}
                        type="text"
                        value={item}
                        maxLength={1}
                        autoComplete="one-time-code"
                        onChange={(e) => onChangeHandler(index, e.target.value)}
                        onKeyDown={(e) => onKeyDownHandler(index, e)}
                    />
                ))
            }
        </div>
    );
}

export default InputConfirmCode;