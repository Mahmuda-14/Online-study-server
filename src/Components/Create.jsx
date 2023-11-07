

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import sky from '../assets/add.png'
import pc from '../assets/mesh-757.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from './Provider/AuthProvider';

const Create = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [dueDate, setDueDate] = useState(new Date())

    const { user } = useContext(AuthContext);
   


    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.image.value;
        const title = form.title.value; 
        const description = form.description.value;
        const marks = form.marks.value;
        const status = form.status.value;
        const difficultyLevel = form.querySelector('select[name="type"]').value;
        const email = user.email;

        const product = { title, description, marks, img, difficultyLevel, startDate, dueDate, status,email }

        console.log(product);

        // send data to the server

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Assignment Added');
            })
    }

  
    return (
        <div>

            <div className=" bg-no-repeat bg-cover py-5 mb-6" style={{ backgroundImage: `url(${pc}` }} >

                <h2 className=" text-4xl font-bold  text-black text-center font-serif p-10">Get Started <br /> with Add Assignments</h2>


                <div className="grid grid-cols-2">
                    <div className="bg-no-repeat bg-cover rounded-xl " style={{ backgroundImage: `url(${sky}`, width: "673px", height: "476px" }} ></div>
                    <form onSubmit={handleAddProduct} className=' bg-violet-200rounded-xl p-8 mb-5'>



                        <div className="mb-8 flex">
                            <div className="form-control w-1/2  ">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>

                                <input type="text" name="image" placeholder="Image-URL" className="input input-bordered w-full " />

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>

                                <input type="text" name="status" placeholder="Status" className="input input-bordered w-full" />

                            </div>
                        </div>


                        {/* form title and level row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>

                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Difficulty-level</span>
                                </label>

                                <select className="select select-bordered w-full max-w-xs" name="type">
                                    <option disabled selected>Difficulty-level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>


                            </div>
                        </div>


                        {/* form date row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    isClearable
                                    name="startDate"
                                    placeholderText="Cleared!"
                                    className="input input-bordered w-full"

                                />


                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Due Data</span>
                                </label>
                                <DatePicker
                                    selected={dueDate}
                                    onChange={(date) => setDueDate(date)}
                                    isClearable
                                    name="dueDate"
                                    placeholderText="Cleared!"
                                    className="input input-bordered w-full"

                                />

                            </div>
                        </div>
                        {/* form description and marks row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>

                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />

                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>

                                <input type="text" name="marks" placeholder="marks" className="input input-bordered w-full" />

                            </div>
                        </div>
                       

                        <input type="submit" value="Create Assignment" className="btn btn-block bg-violet-500 text-white" />
                        <ToastContainer />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Create;








