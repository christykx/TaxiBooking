import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import UserLoginPage from './Pages/UserLogin';
import UserRegisterPage from './Pages/UserRegister';
import UserHomePage from './Pages/UserHome';
import BookingFormPage from './Pages/BookingForm';
import ConfirmBookingPage from './Pages/ConfirmBooking';
import DriverLoginPage from './Pages/DriverLogin';
import DriverHomePage from './Pages/DriverHome';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
import Post from './store/PostContext';
import ViewBookingPage from './Pages/ViewBooking';
import Payment from './Pages/Payment';


function App() {


  const { currentUser } = useContext(AuthContext)
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const ProtectedPage = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />
    }
    return children
  }



  return (
    <div className="App">
      <Post>

        <Router>
          <Routes>
            <Route exact path='/' element={
              <ProtectedRouter>
                <Homepage />
              </ProtectedRouter>
            } />
            <Route path='/login' element={
              < ProtectedPage>
                <UserLoginPage />
              </ ProtectedPage>
            } />

            <Route path='/register' element={<UserRegisterPage />} />
            <Route path='/userhome' element={<UserHomePage />} />
            <Route path='/booknow' element={<BookingFormPage />} />
            <Route path='/confirmbooking' element={<ConfirmBookingPage />} />
            <Route path='/pay' element={<Payment />} />


            <Route path='/driverlogin' element={<DriverLoginPage />} />
            <Route path='/driver' element={<DriverHomePage />} />
            <Route path='/viewbookings' element={<ViewBookingPage />} />


          </Routes>
        </Router>

        </Post>

        </div>
        );
}

        export default App;
