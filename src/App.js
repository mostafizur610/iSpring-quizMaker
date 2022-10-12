import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Chart from './Components/Chart/Chart';
import Quiz from './Components/Quiz/Quiz';
import Home from './Components/Home/Home';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/chart',
          element: <Chart></Chart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz />
        }
      ]
    },
    {
      path: '*', element: <div><h1 className='d-flex justify-content-center mt-5 text-success'>404 Not Found</h1><br /><h4 className='d-flex justify-content-center text-warning'>This route is not defined</h4></div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
