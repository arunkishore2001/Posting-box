import './App.css';
import CreateInterview from './component/CreateInterview';
import MainApp from './component/MainApp';
import Navigation from './component/Navigation';
import SignUp from './component/SignUp';
import Verification from './component/verification'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InterviewList from './component/InterviewList';
function App() {
  return (
    <>
      <BrowserRouter>
        
        <Navigation />
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/create' element={<MainApp />} />
          <Route path="/displayinfo" element={<InterviewList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
