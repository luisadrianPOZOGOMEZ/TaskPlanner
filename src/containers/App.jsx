import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddTask from '../pages/AddTask';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="Register" element={<Register/>}/>
                <Route path="AddTask" element={<AddTask/>}/>
            </Routes>  
        </BrowserRouter>
    );
}

export default App;