"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./MessageInput.module.css";

interface MessageInputProps {
    placeholder: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps>= ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
    return ( 
    <div className={styles.div}>
        <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className={styles.input}/>
  </div>);
}
 
export default MessageInput;