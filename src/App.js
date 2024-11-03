import './App.css';
import { Main } from './Main/Main';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Scanner } from './Scanner/Scanner';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/scanner",
    element:<Scanner/>
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
