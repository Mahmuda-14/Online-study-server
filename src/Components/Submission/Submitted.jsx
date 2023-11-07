


import {  useEffect, useState } from "react";
import SubmitR from "./SubmitR";


const Submitted = () => {

    const [bookings, setBookings] = useState([]);
    

   
    const url = 'http://localhost:5000/submit';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))


    }, [url])



    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Examinee Name</th>
                            <th>Total-Marks</th>
                            <th>Status</th>
                            <th>Give-marks</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <SubmitR
                                key={booking._id}
                                booking={booking}


                            ></SubmitR>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Submitted;