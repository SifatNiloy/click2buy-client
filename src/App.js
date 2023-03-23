import logo from './logo.svg';
import '../src/fontAwesomeIcons/fontAwesomeIcons'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
