import './App.css';
import { Main } from './Main/Main';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Mobile from './Mobile/Mobile';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/mobile",
    element:<Mobile/>
  },
])
function App() {
  return (
    <div className='App container'>
         <RouterProvider router={router}/>
    </div>
  );
}

export default App;
