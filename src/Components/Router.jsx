
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
                loader: () => fetch('https://online-study-server-cyan.vercel.app/task')

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
                loader: ({ params }) => fetch(`https://online-study-server-cyan.vercel.app/task/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Private><Update></Update></Private>,
                loader: ({ params }) => fetch(`https://online-study-server-cyan.vercel.app/task/${params.id}`)
            },

            {
                path: '/add',
                element: <Private><Create></Create></Private>

            },
            {
                path: '/my',
                element: <Private><MyAssign></MyAssign></Private>,
                loader: () => fetch('https://online-study-server-cyan.vercel.app/task')

            },
            {
                path: '/submit',
                element: <Private><Submitted></Submitted></Private>

            }

        ]
    }

]

)


export default router;