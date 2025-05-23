import { useState } from 'react';
import React from "react";
import Styles from './ForgotPassword.module.css'
import EmailInput from '../EmailInput/EmailInput';

const ForgotPassword: React.FC=()=>{
    const [email, setEmail]=useState('')
    const [error, setError]=useState('')
const isValid=
 !error&&email;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const userIndex = users.findIndex((u: any) => u.email === email);

        if (userIndex === -1) {
            setError('Пользователь с таким Email не найден');
            return;
        }

        users[userIndex].password = 'ReactLab07';
        localStorage.setItem('users', JSON.stringify(users));

        alert('Пароль был успешно изменён на: ReactLab07');
    };

    return (
        <form className={Styles.form}>
            <h2>Востановление пароля</h2>
            <EmailInput onChange={setEmail} onErrorChange={setError}/>
            <button disabled={!isValid} onClick={submit}>Отправить</button>
        </form>
    )
}

export default ForgotPassword;