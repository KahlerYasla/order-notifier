import { BaseInputField } from "../../common"

interface InputFieldProps {
    className?: string
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({
    className,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <BaseInputField
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputField
