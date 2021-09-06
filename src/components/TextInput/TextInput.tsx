import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const TextInput = ({ name, label, ...rest }: InputProps) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <StyledInput id={name} type="text" autoComplete="off" {...rest}></StyledInput>
        </div>
    )
}

export default TextInput

const StyledInput = styled.input`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
`
