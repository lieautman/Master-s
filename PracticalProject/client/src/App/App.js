import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TypesOfAttacks from "../TypesOfAttacks";
import './App.css'

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <TypesOfAttacks></TypesOfAttacks>
    </>
  );
}

export default App;
