import logo from './logo.svg';
import './App.css';
import {GetSnapshot, AddData, AddData2, GetRooms, AddRoom, ImportJsonButton} from './Modules/Firebase/UsefulButtons'
import {MainPage} from "./Modules/UI/MainPage/MainPage";


function App() {
  
    /*
    <>
     <GetSnapshot/>
           <GetRooms/>

            <div className='app-container'>
            <MainPage/>
           
         </div>
         </>
    */
   return (
    <>
    <div className='app-container'>
    <MainPage/>
   </div>
   </>      
    );
}

export default App;
