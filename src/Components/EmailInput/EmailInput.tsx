import React, { useState } from 'react';
import styles from './EmailInput.module.css';

interface EmailInputProps {
    value?: string;
    onChange?: (value: string) => void;
    onErrorChange?: (error: string) => void;
    error?: string;
    placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
    value = '',
    onChange,
    onErrorChange,
    error,
    placeholder = 'Введите email'
}) => {
    const [email, setEmail] = useState(value);
    const [internalError, setInternalError] = useState('');
    const errorToShow = error || internalError; 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setEmail(newValue);

        let newError = '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)) {
            newError = 'Некорректный email';
        }

        setInternalError(newError);
        onErrorChange?.(newError);
        onChange?.(newValue);
    };

    return (
        <div className={styles.container}>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder={placeholder}
                className={`${styles.input} ${errorToShow ? styles.inputError : ''}`}
            />
            {errorToShow && <span className={styles.errorText}>{errorToShow}</span>}
        </div>
    );
};

export default EmailInput;
