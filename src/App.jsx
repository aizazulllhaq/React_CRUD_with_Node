import Register from '../Register';
import SearchBox from '../SearchBox';
import './App.css'
import { ToastContainer } from 'react-toastify';
import "./toastStyle.css";

function App() {

  return (
    <>
      <h1>React Weather Widget</h1>
      {/* <SearchBox/> */}
      <ToastContainer
        position="top-right"
        autoClose={500} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Register />
    </>
  )
}

export default App
