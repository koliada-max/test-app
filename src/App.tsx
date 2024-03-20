import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Pages/LoginPage';
import ForgotPasswordPage from './Components/Pages/ForgotPasswordPage';
import { AppContext } from './context';
import ResetPasswordPage from './Components/Pages/ResetPasswordPage';
import Wrapper from './Components/UI/Wrapper';

function App() {
  const { isAuthorized } = useContext(AppContext);
  return (
    <AppContext.Provider value={{ isAuthorized }}>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <LoginPage />
            </Wrapper>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Wrapper>
              <ForgotPasswordPage />
            </Wrapper>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Wrapper>
              <ResetPasswordPage />
            </Wrapper>
          }
        />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
