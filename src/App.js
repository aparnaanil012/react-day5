import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Viewstudent from './Components/Viewstudent';
import Addstudent from './Components/Addstudent';

function App() {
  return (
    <div>
      <Navigationbar/>
     
     <Routes>
      <Route path='/' element={<Viewstudent/>}/>
      <Route path='/add' element={<Addstudent/>}>
     
      </Route>
     </Routes>
    </div>
  );
}

export default App;
