import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Add from './Pages/Add/Add';
import Update  from './Pages/Update/Update';
import Calculator from './Pages/Calculator/Calculator';
// import Calender from './Pages/Calender/Calender';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='container'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/user/signup' element={<SignUp />} />
            <Route path='/user/signin' element={<SignIn />} />
            <Route path='/function/createFunction' element={<Add />} />
            <Route path='/function/:id' element={<Update />} />
            {/* <Route path='/calender' element={<Calender />} /> */}
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
     </div>
    </div>
  );
}

export default App;
