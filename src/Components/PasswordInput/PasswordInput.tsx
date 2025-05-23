import React,{useState} from "react";
import Styles from './PasswordInput.module.css'

interface PasswordInputProps {
    value?:string;
    onChange?:(value:string)=>void;
    onErrorChange?:(value:string)=>void;
    error?: string;
    placeholder?: string;
}

const PasswordInput:React.FC<PasswordInputProps> =({
    value='',
    onChange,
    onErrorChange,
    error='',
    placeholder = 'Введите пароль'

})=>{
    const [password,setPassword] = useState(value);
    const [internalError, setInternalError] = useState('');
    const errorToShow = error || internalError; 

const validatePassword = (pwd: string): string => {
    if (pwd.length < 8) {
        return "Пароль должен быть более 8 символов";
    } else if (pwd.length > 50) {
        return "Пароль должен быть до 50 символов";
    } else if (!/[a-z]/.test(pwd)) {
        return "Пароль должен содержать хотя бы одну строчную букву";
    } else if (!/[A-Z]/.test(pwd)) {
        return "Пароль должен содержать хотя бы одну заглавную букву";
    } else if (!/[0-9]/.test(pwd)) {
        return "Пароль должен содержать хотя бы одну цифру";
    }

        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setPassword(newValue);


        if (!error) {
            const newError = validatePassword(newValue);
            setInternalError(newError);
            onErrorChange?.(newError);
        } else {
            
            onErrorChange?.(error);
        }

        onChange?.(newValue);
    };
    return (
        <div className={Styles.container}>
            <input type="password"
            value={password}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${Styles.input} ${errorToShow ? Styles.inputError : ''}`}/>
            {errorToShow && <span className={Styles.errorText}>{errorToShow}</span>}
        </div>
    )
}

export default PasswordInput;