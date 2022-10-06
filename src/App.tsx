import React, {useState} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ConversationPage from "./pages/conversations/ConversationPage";
import ConversationChannelPage from "./pages/conversations/ConversationChannelPage";
import {AuthenticatedRoute} from "./components/AuthenticatedRoute";
import {User} from "./utils/types";
import {AuthContext} from "./utils/Context/AuthContext";

function App() {
    const [user, setUser] = useState<User>()
  return (
    <AuthContext.Provider value={{user:user, updateAuthUser:setUser}}>
      <Routes>
        <Route path="/registration" element={<SignUpPage/>}/>
        <Route path="/login" element={<SignInPage/>}/>
        <Route path="conversations" element={
            <AuthenticatedRoute>
                <ConversationPage/>
            </AuthenticatedRoute>
        }>
          <Route path=":id" element={<ConversationChannelPage/>}/>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
