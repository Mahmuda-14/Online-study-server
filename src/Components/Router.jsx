
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Root from './Root';
import Card from './Assignments/Card';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Create from './Create';
import MyAssign from './MyAssign';
// import Submitted from './Submitted';
import ErrorPage from './ErrorPage';
import Detail from './Details/Detail';
import Update from './Update';
import Submitted from './Submission/Submitted';
import Private from './Private';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/task',
                element: <Card></Card>,
                loader: () => fetch('http://localhost:5000/task')

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/task/:id',
                element: <Private><Detail></Detail></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Private><Update></Update></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
            },

            {
                path: '/add',
                element: <Create></Create>

            },
            {
                path: '/my',
                element: <MyAssign></MyAssign>,
                loader: () => fetch('http://localhost:5000/task')

            },
            {
                path: '/submit',
                element: <Submitted></Submitted>

            }

        ]
    }

]

)


export default router;