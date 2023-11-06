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






import { useState } from "react";

const SubmitR = ({ booking, handleBookingConfirm }) => {
    const { _id, pdfLink, examinee, title, marks } = booking;
    const [status, setStatus] = useState('Pending');

    const handleStatusChange = () => {
        setStatus('Completed'); // Update the status to 'Completed'
        // Optionally, make an API call to persist the status change on the server
        // You can call an API endpoint to update the status in your database.
    };

    return (
        <tr>
            <td>{title}</td>
            <td>{examinee}</td>
            <td>{marks}</td>
            <td>
                {
                    status === 'Completed' ? (
                        <span className="font-bold text-primary">Completed</span>
                    ) : (
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
                    )
                }
            </td>
            <td>
                <button
                    className="btn"
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                >
                    Give Marks
                </button>
                <button
                    className="btn"
                    onClick={handleStatusChange} // Call the status change function
                >
                    Submit Marks
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box gap-3 m-5">
                        <input type="text" value={pdfLink} className='input input-bordered m-2'/>
                        <input type="number" name="" id="" placeholder='Give-marks' className='input input-bordered' />
                        <input type="text" name="" id="" placeholder="Feedback" className='input input-bordered w-full my-4' />
                        <div className="modal-action">
                            <form
                                method="dialog"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleStatusChange(); // Call the status change function when submitting marks
                                }}
                            >
                                <button type="submit" className="btn">
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
