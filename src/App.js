
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WorkCompletionPdF from './WorkCompletionReportView/WorkCompletionPDF';

function App() {
  return (
    <div >
      <Routes>

        <Route path='/work' element={< WorkCompletionPdF/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
