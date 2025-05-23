import React, {useState} from "react";
import Styles from './RegistrationForm.module.css'
import PasswordInput  from '../PasswordInput/PasswordInput'
import EmailInput from '../EmailInput/EmailInput'
import NameInput from "../NameInput/NameInput";


const RegistrationForm: React.FC =()=>
{
    const [name, setName]=useState('');
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nameError, setnameError] =useState('');
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!nameError && !emailError && !passwordError && !confirmPasswordError && password === confirmPassword) {

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find((u: any) => u.email === email);

            if(user!=null){
                alert("этот Email уже занят");
                
            }else{

                alert('Регистрация прошла успешно!');
                const user = {
                    name,
                    email,
                    password,
                };
                const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
                existingUsers.push(user);
                localStorage.setItem('users', JSON.stringify(existingUsers));
            }



        } else {
            if (password !== confirmPassword) {
                setConfirmPasswordError('Пароли не совпадают');
            }
        }
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);

        if (value !== password) {
            setConfirmPasswordError('Пароли не совпадают');
        } else {
            setConfirmPasswordError('');
        }
    };

      const isFormValid =
    !nameError &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError &&
    name &&
    email &&
    password &&
    confirmPassword;

    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <h2 className={Styles.header}>Регистрация</h2>
            <div className={Styles.inputArea}>
            <NameInput 
                value={name}
                onChange={setName}
                onErrorChange={setnameError}/>
            <EmailInput
                value={email}
                onChange={setEmail}
                onErrorChange={setEmailError}/>
            <PasswordInput
                value={password}
                onChange={setPassword}
                onErrorChange={setPasswordError}/>
            <PasswordInput
                value={confirmPassword}
                onChange={handleConfirmPasswordChange }
                onErrorChange={setConfirmPasswordError}
                placeholder="Подтвердите пароль"/>
            </div>
            
            {confirmPasswordError && (<span className={Styles.errorText}>{confirmPasswordError}</span>)}

            <button type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
        </form>
    )
}   


export default RegistrationForm;