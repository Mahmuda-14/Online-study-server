


import {  useEffect, useState } from "react";
import SubmitR from "./SubmitR";
import axios from "axios";


const Submitted = () => {

    const [bookings, setBookings] = useState([]);
    

   
    const url = 'https://online-study-server-cyan.vercel.app/submit';
    useEffect(() => {
        // fetch(url)
        axios.get(url, {withCredentials: true})
            .then(res => {
                setBookings(res.data)

            })
            // .then(data => setBookings(data))


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