import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const TextInput = ({ name, label, ...rest }: InputProps) => {
    return (
        <InputWrapper>
            {label && <label htmlFor={name}>{label}</label>}
            <input id={name} type="text" {...rest}></input>
        </InputWrapper>
    )
}

export default TextInput

const InputWrapper = styled.div``
