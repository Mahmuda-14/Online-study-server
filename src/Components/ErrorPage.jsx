import { Link } from 'react-router-dom'
import err from '../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='items-center '>
            <img src={err} alt="" />
            
            <Link to ="/"><button className="btn ml-[36rem] text-black bg-red-200">Go BAck to home</button></Link>
      
        </div>
    );
};

export default ErrorPage;