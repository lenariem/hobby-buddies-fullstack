import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ProfileForm } from "./components/profile-forms/ProfileForm";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser);
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                    <Alert />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/dashboard"
                            element={<PrivateRoute element={Dashboard} />}
                        />
                        <Route
                            path="/create-profile"
                            element={<PrivateRoute element={ProfileForm} />}
                        />
                        <Route
                            path="/edit-profile"
                            element={<PrivateRoute element={ProfileForm} />}
                        />
                    </Routes>
                

                {/*  <Route path="/about" element={<About />} />
                    <Route path="/category/:name" element={<Category />}/>
                    <Route path="/meal/:id" element={<Recipe />}/>
                    <Route path="*" element={<NotFoundPage />} /> */}
            </BrowserRouter>
        </Provider>
    );
};

export default App;
