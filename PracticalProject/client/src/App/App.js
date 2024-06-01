import 'react-tabs/style/react-tabs.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TypesOfAttacks from "../TypesOfAttacks";
import PossibleSubjects from "../PossibleSubjects";
import './App.css'
import { useState } from 'react';

function App() {
  const [listOfAttacks, setListOfAttacks] = useState([]);
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

      {listOfAttacks.length === 0 ? <PossibleSubjects setListOfAttacks={setListOfAttacks} /> : <TypesOfAttacks listOfAttacks={listOfAttacks} />
      }
    </>
  );
}

export default App;
