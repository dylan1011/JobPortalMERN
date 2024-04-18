import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom';
import Home from './components/homepage/homepage';
import JobReply from './components/company/jobReply';
import UserJobPost from './components/employee/userjobPost';
import CompanyJobPost from './components/company/companyjobposts';
import UserSignup from './components/employee/usersignup';
import UserLogin from './components/employee/userlogin';
import CompanySignup from './components/company/companysignup';
import CompanyLogin from './components/company/companylogin';
import AddJobPost from './components/company/addjobpost';
import Login from './components/homepage/login';
import JobOffer from './components/employee/joboffer';
import SelectedForJob from './components/company/selectedforjob';
import Test from "./components/test/test";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/company/jobreply' element={<JobReply/>} />
            <Route path='/user/home' element={<UserJobPost/>} />
            <Route path='/company/home' element={<CompanyJobPost/>} />
            <Route path='/signup/user' element={<UserSignup/>} />
            <Route path='/login/user' element={<UserLogin/>} />
            <Route path='/login/company' element={<CompanyLogin/>} />
            <Route path='/signup/company' element={<CompanySignup/>} />
            <Route path='/company/newopening' element={<AddJobPost/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Login/>} />
            <Route path='/user/offers' element={<JobOffer/>} />
            <Route path='/company/selected' element={<SelectedForJob/>} />
            <Route path='/test' element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
