import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <section className="container">
                    <Alert />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </section>

                {/*  <Route path="/about" element={<About />} />
                    <Route path="/category/:name" element={<Category />}/>
                    <Route path="/meal/:id" element={<Recipe />}/>
                    <Route path="*" element={<NotFoundPage />} /> */}
            </BrowserRouter>
        </Provider>
    );
}

export default App;
