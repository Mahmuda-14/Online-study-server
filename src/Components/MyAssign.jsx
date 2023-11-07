

import bg2 from '../assets/bg2.svg'
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from 'sweetalert2';

const MyAssign = () => {
  const {  email } = useParams();
  const all = useLoaderData();

  const { user } = useContext(AuthContext);

  const userEmail = user.email;

  const [filteredServices, setFilteredServices] = useState([]);


  const handleDelete = ( id )=> {
    const proceed = confirm('Are u Sure??')
    if (proceed) {
      fetch(`http://localhost:5000/task/${id}`, {
        method: 'DELETE'

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);        

          if ((data.deletedCount > 0) > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Item Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            const remaining = filteredServices.filter(bookings => bookings._id !== id);
            setFilteredServices(remaining);
        }




        })
    }

  }






  useEffect(() => {
    if (userEmail) {

      const userAssignments = all.filter((service) => service.email === userEmail);
      setFilteredServices(userAssignments);
    } else {

      setFilteredServices(all);
    }
  }, [email, all]);

  return (
    <div className="bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bg2}` }}>
      <h2 className="text-5xl text-center m-8 p-5">My Assignments : {filteredServices.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>

              </th>
              <th>Image</th>
              <th>Title</th>
              <th>Email</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((assignment) => (<tr key={assignment.id}>
              <td>
                <button onClick={() => handleDelete(assignment._id)} className="btn btn-sm btn-circle">
                

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </td>

              <td>
                <div className="avatar">
                  <div className="rounded w-24 h-24">
                    {assignment.img && <img src={assignment.img} alt="Avatar Tailwind CSS Component" />}
                  </div>
                </div>
              </td>


              <td>{assignment.title}</td>
              <td>{assignment.email}</td>
              <td>{assignment.marks}</td>
              <td>{assignment.status}</td>
              <td>{assignment.feedback}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssign;
