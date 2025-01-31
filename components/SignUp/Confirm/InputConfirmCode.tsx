'use client';
import { useState, useRef, type KeyboardEvent } from "react";
import styleInput from "../../../app/auth/confirm/confirm.module.css";

const InputConfirmCode = ({ submitHandler }: { submitHandler: () => }) => {
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

    );
}

export default InputConfirmCode;