import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.js'
import About from './Pages/About.js'

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App