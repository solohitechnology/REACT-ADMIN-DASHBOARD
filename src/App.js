import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { productInputs, usersInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkMOdeContext } from './contex/darkModeContext';

function App() {

    const { darkMode } = useContext(DarkMOdeContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='users'>
                            <Route index element={<List />} />
                            <Route path=':userId' element={<Single />} />
                            <Route path='new' element={<New inputs={usersInputs} title='Add new User' />} />
                        </Route>
                        <Route path='products'>
                            <Route index element={<List />} />
                            <Route path=':productId' element={<Single />} />
                            <Route path='new' element={<New inputs={productInputs} title='Add new Product' />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;         