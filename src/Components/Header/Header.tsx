import React,{useState} from "react";
import Styles from './Header.module.css'
import { Sections } from "../../Types/Sections";
import { useNavigate } from 'react-router-dom';

type HeaderProps={
    onSelectSection:(Section: Sections)=>void
}



const Header: React.FC<HeaderProps>=({onSelectSection})=>{

    const navigate = useNavigate();

    return (
        <div className={Styles.Contaner}>
            <button className={Styles.button} onClick={()=>{onSelectSection(Sections.Sign_up);navigate('/signIn') }}>Sign up</button>
            <button className={Styles.button} onClick={()=>{onSelectSection(Sections.Log_in); navigate('/LogIn')}}>Log in</button>
        </div>
    )
}

export default Header;