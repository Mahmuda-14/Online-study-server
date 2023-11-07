/* eslint-disable react/prop-types */

// /* eslint-disable react/prop-types */

// import { useState } from "react";

// const SubmitR = ({ booking, handleBookingConfirm }) => {
//     const { _id, pdfLink, examinee, title, marks } = booking;

//     const [status, setStatus] = useState('Pending');





//     return (
//         <tr>
//             <td>{title}</td>
//             <td>{examinee}</td>
//             <td>{marks}</td>
//             <td>
//                 {
//                     status === 'confirm' ? <span className="font-bold text-primary">Completed</span> :
//                         <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
//                 }
//             </td>
//             {/* <td>

//                 <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Give Marks</button>
//                 <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box gap-3 m-5">
//                         <input type="text" value={pdfLink} className='input input-bordered m-2'/>
//                         <input type="number" name="" id="" placeholder='Give-marks' className='input input-bordered' />
//                         <input type="text" name="" id="" placeholder="Feedback" className='input input-bordered w-full my-4' />
//                         <div className="modal-action">
//                             <form method="dialog">

//                                 <button className="btn">Submit Marks</button>
//                             </form>
//                         </div>
//                     </div>
//                 </dialog>

//             </td> */}

//             <td>
//                 <button
//                     className="btn"
//                     onClick={() => document.getElementById('my_modal_1').showModal()}
//                 >
//                     Give Marks
//                 </button>
//                 <dialog id="my_modal_1" className="modal">
//                 <div className="modal-box gap-3 m-5">
//                         <input type="text" value={pdfLink} className='input input-bordered m-2'/>
//                         <input type="number" name="" id="" placeholder='Give-marks' className='input input-bordered' />
//                         <input type="text" name="" id="" placeholder="Feedback" className='input input-bordered w-full my-4' />
//                         <div className="modal-action">
//                     <form
//                         method="dialog"
//                         onSubmit={(e) => {
//                             e.preventDefault();

//                             setStatus('Completed');
//                         }}
//                     >
//                         <button type="submit" className="btn">
//                             Submit Marks
//                         </button>
//                     </form>
//                     </div>
//                     </div>
//                 </dialog>
//             </td>

//         </tr>
//     );
// };

// export default SubmitR;






// import {  useState } from "react";


// const SubmitR = ({ booking }) => {
//     const { _id, pdfLink, examinee, title, marks } = booking;
//     const [status, setStatus] = useState(''); // Initialize status as an empty string
//     const [marked, setMarked] = useState(false); // Initialize marked as a boolean

//     useEffect(() => {
//         // Fetch the status and marks data from the server
//         fetch(`http://localhost:5000/submit/${_id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setStatus(data.status || ''); // Update the status state
//                 setMarked(data.marks === 'marked'); // Update the marked state based on marks
//             });
//     }, [_id]);










//     const handleStatusChange = id => {
//         fetch(`http://localhost:5000/submit/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({ status: 'Completed' })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     // update state
//                     const remaining = status.filter(booking => booking._id !== id);
//                     console.log(remaining);
//                     const updated = status.find(booking => booking._id === id);
//                     updated.status = 'Completed';
//                     const newBookings = [updated, ...remaining];
//                     setStatus(newBookings);

//                 }
//             })
//     }






//     return (
//         <tr>
//             <td>{title}</td>
//             <td>{examinee}</td>
//             <td>{marks}</td>
//             <td>
//                 {
//                     status === 'Completed' ? (
//                         <span className="font-bold text-primary">Completed</span>
//                     ) : (
//                         <button className="btn btn-ghost btn-xs">Pending</button>

//                     )
//                 }
//             </td>
//             <td>

//                 {
//                     marks === 'marked' ? (
//                         <span className="font-bold text-primary">Marked</span>
//                     ) : (
//                         <button
//                             className="btn"
//                             onClick={() => document.getElementById('my_modal_1').showModal()}
//                         >
//                             Give Marks
//                         </button>

//                     )
//                 }


//                 <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box gap-3 m-5">
//                         <input type="text" value={pdfLink} className='input input-bordered m-2' />
//                         <input type="number" name="" id="" placeholder='Give-marks' className='input input-bordered' />
//                         <input type="text" name="" id="" placeholder="Feedback" className='input input-bordered w-full my-4' />
//                         <div className="modal-action">
//                             <form
//                                onChange={handleStatusChange(_id)}
//                                 onSubmit={(e) => {
//                                     e.preventDefault();
//                                     // handleBookingConfirm(_id);
//                                     document.getElementById('my_modal_1').close();
//                                     setStatus('Completed');
//                                     // Call the status change function when submitting marks
//                                 }}
//                             >
//                                 <button className="btn" onClick={() => handleStatusChange(_id)}>
//                                     Submit Marks
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </dialog>
//             </td>
//         </tr>
//     );
// };

// export default SubmitR;



import { useState, useEffect } from "react";

const SubmitR = ({ booking }) => {
    const { _id, pdfLink, examinee, title, marks } = booking;
    const [status, setStatus] = useState('');


    useEffect(() => {
        // Fetch the status and marks data from the server when the component mounts
        fetch(`http://localhost:5000/submit/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setStatus(data.status || ''); // Update the status state
                // Update the marked state based on marks
            });
    }, [_id]); // Make the fetch request whenever _id changes

    const handleStatusChange = () => {
        // Update the status on the client-side
        setStatus('Completed');

        fetch(`http://localhost:5000/submit/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Completed' })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <tr>
            <td>{title}</td>
            <td>{examinee}</td>
            <td>{marks}</td>
            <td>
                {status === 'Completed' ? (
                    <span className="font-bold text-primary">Completed</span>
                ) : (
                    <button className="btn btn-ghost btn-xs">Pending</button>
                )}
            </td>
            <td>
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}> Give Marks</button>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box gap-3 m-5">
                        <input type="text" value={pdfLink} className='input input-bordered m-2' />
                        <input type="number" name="" id="" placeholder='Give-marks' className='input input-bordered' />
                        <input type="text" name="" id="" placeholder="Feedback" className='input input-bordered w-full my-4' />
                        <div className="modal-action">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleStatusChange(_id);
                                    document.getElementById('my_modal_1').close(); 
                                }}
                            >
                                <button className="btn">
                                    Submit Marks
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>
        </tr>
    );
};

export default SubmitR;
