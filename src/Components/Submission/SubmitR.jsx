/* eslint-disable react/prop-types */


import { useState, useEffect } from "react";
const SubmitR = ({ booking }) => {
    const { _id, pdfLink, examinee, title, marks } = booking;
    const [status, setStatus] = useState('');
  
    
    useEffect(() => {

        fetch(`https://online-study-server-cyan.vercel.app/submit/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setStatus(data.status || '');
            });
    }, [_id]);

    const handleStatusChange = () => {

        setStatus('Completed');

        fetch(`https://online-study-server-cyan.vercel.app/submit/${_id}`, {
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
                    <div className="modal-box gap-3 m-5" >
                        <input type="text" value={pdfLink}   className='input input-bordered m-2'  />
                       
                        
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
                                <button className="btn" >
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





