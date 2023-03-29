import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Viewstudent from './Components/Viewstudent';
import Add from './Components/Add';


function App() {
  return (
    <div className='pp'>
      <Navigationbar/>
     
     <Routes>
      <Route path='/' element={<Viewstudent/>}/>
      <Route path='/add' element={<Add data={{id:'',name:'',grade:''}}method="post"/>}>
     
      </Route>
     </Routes>
    </div>
  );
}

export default App;
