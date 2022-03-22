import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Devices } from "./pages/Devices";

import { SignIn } from './pages/SignIn';
import { SignUp } from "./pages/SignUp";

export function AppRoutes() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem('userLogged');
    u && JSON.parse(u) ? setUserLogged(true) : setUserLogged(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('userLogged', JSON.stringify(userLogged));
  }, [userLogged]);

  return (
    <BrowserRouter>
      <Routes>
        { !userLogged && (
          <>
            <Route path="/signin" element={<SignIn authenticate={() => setUserLogged(true)} />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        { userLogged && (
          <Route path="/home" element={<Devices logout={() => setUserLogged(false)}/>} />
        )}
        
        <Route path="*" element={<Navigate to={ userLogged ? "/home" : "/signin"} />} />
      </Routes>
    </BrowserRouter>
  )
}
