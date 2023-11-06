
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import SubmitR from "./SubmitR";


const Submitted = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/submit?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))


    }, [url])


    const handleDelete = id => {
        const proceed = confirm('You want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/submit/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted succesfully')
                        const remaining = bookings.filter(bookings => bookings._id !== id);
                        setBookings(remaining);
                    }
                })
        }

    }

    // update

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    console.log(remaining);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);

                }
            })
    }



    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
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
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></SubmitR>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Submitted;