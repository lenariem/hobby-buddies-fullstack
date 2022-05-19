import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                {/*  <Route path="/about" element={<About />} />
                    <Route path="/category/:name" element={<Category />}/>
                    <Route path="/meal/:id" element={<Recipe />}/>
                    <Route path="*" element={<NotFoundPage />} /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
