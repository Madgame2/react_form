import React,{useState} from "react";
import Styles from './LogIn.module.css'
import EmailInput from "../EmailInput/EmailInput";
import { Link } from 'react-router-dom';
import PasswordInput from "../PasswordInput/PasswordInput";

const LogIn:React.FC =()=>{
    const [Email, setEmail]=useState('');
    const[Password, setPassword]=useState('');

    const [EmailError, setEmailError] = useState('')
    const [PasswordError, setPasswordError] = useState('')

    


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find((u: any) => u.email === Email);

        if (!user) {
            setEmailError('Пользователь с таким Email не найден');
            return;
        }

        if (user.password !== Password) {
            setPasswordError('Неверный пароль');
            return;
        }

        alert(`Успешный вход, ${user.name}!`);
    };

    const passwordChanged=(value:string)=>{
        setPasswordError('')
        setPassword(value)
    }

    const EmailChanged=(value:string)=>{
        setPasswordError('')
        setPassword(value)
    }

          const isFormValid =
    Email&&
    Password;

    return (
        <form className={Styles.form}>
            <h2 className={Styles.header}>Авторизация</h2>
            <div className={Styles.inputArea}>
                <EmailInput value={Email} onChange={EmailChanged} error={EmailError}/>
                <PasswordInput value={Password} onChange={passwordChanged} error={PasswordError}/>
            </div> 
            <div className={Styles.ExtraArea}>
                <Link to='/forgotPasword'>Я забыл пароль</Link>
            </div>
            <button type="submit" disabled={!isFormValid} onClick={handleSubmit}>Войти</button>
        </form>
    )
}

export default LogIn;