import React, { useState } from "react";
import Styles from './NameInput.module.css';

interface NameInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onErrorChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const NameInput: React.FC<NameInputProps> = ({
  value = '',
  onChange,
  onErrorChange,
  error,
  placeholder = 'Введите имя'
}) => {
  const [name, setName] = useState(value);
  const [internalError, setInternalError] = useState('');
  const errorToShow = error ?? internalError;

  const validateName = (name: string): string => {
    name = name.trim();
    if (name.length <= 2) {
      return 'Имя должно быть больше 2 символов';
    } else if (name.length > 50) {
      return 'Имя не может превышать 50 символов';
    } else if (!/^[\p{L}\s]+$/u.test(name)) {
      return 'Имя должно содержать только буквы и пробелы';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setName(newValue);

    const newError = validateName(newValue);
    setInternalError(newError);

    onErrorChange?.(newError);
    onChange?.(newValue);
  };

  return (
    <div className={Styles.container}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${Styles.input} ${errorToShow ? Styles.inputError : ''}`}
      />
      {errorToShow && <span className={Styles.errorText}>{errorToShow}</span>}
    </div>
  );
};

export default NameInput;
