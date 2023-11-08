import f1 from '../assets/feature.png'
import f2 from '../assets/fatur2.png'
import f3 from '../assets/fature2.png'

const Feature = () => {
    return (
       

        <div>
            <h2 className=' text-3xl font-semibold font-serif text-center mt-[4.5rem]'>Browse Our Services</h2>
            <hr className=' border-solid sm:ml-[5rem] border-2 lg:mx-72 mt-10 mb-[5.5rem] px-60' />
            <div className='grid sm:grid-cols-1 sm:mx-20  lg:grid-cols-3 my-10'>
            <div className="card w-96 bg-base-100 sm:mb-6 shadow-xl">
            <span className=' text-right bg-cyan-600 text-white ml-[21rem] p-1 '>14</span>
           
                <div className="card-body">
                    <h2 className="card-title">Intelligence Challenge</h2>
                    <p> Begin with a brainstorming session. Consider your interests, passions, and areas of expertise.</p>
                </div>
                <figure><img src={f1} alt="Shoes" /></figure>
            </div>

            <div className="card w-96 bg-base-100 sm:mb-6 shadow-xl">
            <span className=' text-right bg-cyan-600 text-white ml-[21rem] p-1 '>10</span>
                <div className="card-body">
                    <h2 className="card-title">Educators</h2>
                    <p> Educators are dedicated professionals who inspire and empower students to learn and grow</p>
                </div>
                <figure><img src={f2} alt="Shoes" /></figure>
            </div>

            <div className="card w-96 bg-base-100 sm:mb-6 shadow-xl">
            <span className=' text-right bg-cyan-600 text-white ml-[21rem] p-1 '>20</span>
                <div className="card-body">
                    <h2 className="card-title">Practice Task</h2>
                    <p> Practice tasks are essential for honing skills and reinforcing learning through hands-on experience</p>
                </div>
                <figure><img src={f3} alt="Shoes" /></figure>
            </div>
        </div>
        </div>
    );
};

export default Feature;