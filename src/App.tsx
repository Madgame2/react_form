import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Base_Loyout from './Components/Layout/Loyout';
import Header from './Components/Header/Header';
import LogIn from './Components/LogInForm/LogIn';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

const App: React.FC = () => {




  return (
    <Base_Loyout header={<Header onSelectSection={() => {}} />}>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signIn' element={<RegistrationForm />} />
        <Route path='/forgotPasword' element={<ForgotPassword/>}/>
      </Routes>
    </Base_Loyout>
  );
};

export default App;
