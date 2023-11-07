
import { useLoaderData } from "react-router-dom";
import update from '../assets/update.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Update = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [dueDate, setDueDate] = useState(new Date())

    const item = useLoaderData();
    const { _id, img, description, title, difficultyLevel, marks } = item;

    const handleUpdateItem = event => {
        event.preventDefault();

        const form = event.target;


        const img = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const difficultyLevel = form.querySelector('select[name="type"]').value;
        const status = form.status.value;
       

        const updatedItem = { title, description, marks, img, difficultyLevel, startDate, dueDate, status  }

        console.log(updatedItem);

        // send data to the server
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if ((data.modifiedCount) > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div className="bg-no-repeat bg-cover  m-20 p-24" style={{ backgroundImage: `url(${update}` }}>
            <h2 className="text-3xl font-medium items-center text-center my-5">Title : {title}</h2>
            <form onSubmit={handleUpdateItem}>

                <div className="mb-8 flex">
                    <div className="form-control w-1/2  ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>

                        <input type="text" name="image" placeholder="Image-URL" className="input input-bordered w-full " defaultValue={img}/>

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

                        <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" defaultValue={title} />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Difficulty-level</span>
                        </label>

                        <select className="select select-bordered w-full max-w-xs" name="type" defaultValue={difficultyLevel}>
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
                            defaultValue={startDate}
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
                            defaultValue={dueDate}
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

                        <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" defaultValue={description} />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>

                        <input type="text" name="marks" placeholder="marks" className="input input-bordered w-full" defaultValue={marks} />

                    </div>
                </div>


                <input type="submit" value="Update Assignment" className="btn btn-block bg-violet-500 text-white" />


            </form>
        </div>
    );
};

export default Update;