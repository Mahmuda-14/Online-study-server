/* eslint-disable react/prop-types */


import bg2 from '../../assets/asset.svg'

import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider'; 
const SingleDetail = ({ detail }) => {
    const { img, description, title, difficultyLevel, marks, startDate, dueDate, status } = detail;

    const { user } = useContext(AuthContext)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString();
    };

    const [pdfLink, setPdfLink] = useState('');
    const [examinee, setExaminee] = useState('');

    const handlePdfLinkChange = (e) => {
        setPdfLink(e.target.value);

    };

    const handleExamineChange = (e) => {
        setExaminee(e.target.value);
    };
    
    

    const handleSubmission = () => {

        const email = user?.email;
        
        
        const submissionData = {
            pdfLink,
            examinee,
            email, 
            title,
            marks,
            status
        
           
            
            
        };

        // console.log(submissionData);

       
        fetch('https://online-study-server-cyan.vercel.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
             
            });
    };

    return (
        <div>

            <div className="hero min-h-screen rounded-xl my-8" style={{ backgroundImage: `url(${bg2}` }}>


                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={img} className="w-[36rem] rounded-lg mr-10" />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl text-left mb-2"><span className=' font-serif font-semibold'>Assignment-Title : </span> {title}</h2>

                        <h1 className="text-2xl text-left mb-2"><span className=' font-serif font-semibold'>Description : </span>{description}</h1>
                        <p className="text-xl text-left mb-2"><span className=' font-serif font-semibold'>Difficulty : </span>{difficultyLevel}</p>
                        <p className="text-xl text-left mb-2"><span className=' font-serif font-semibold'>Marks : </span>{marks}</p>
                        <p className="text-xl text-left mb-2"><span className=' font-serif font-semibold'>Created at : </span>{formatDate(startDate)}</p>
                        <p className="text-xl text-left mb-2"><span className=' font-serif font-semibold'>Due : </span>{formatDate(dueDate)}</p>
                        <p className="text-xl text-left mb-2"><span className=' font-serif font-semibold'>Status : </span>{status}</p>
                        <div>


                            <button className="btn bg-orange-600 ml-24 text-white border-none" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <div className="modal-action ">
                                        <form method="dialog">

                                            <input className='text-black file-input file-input-bordered my-5'
                                                type="file"
                                                placeholder="PDF Link"
                                                value={pdfLink}
                                                onChange={handlePdfLinkChange}
                                            />
                                            <input
                                                className='text-black input input-bordered'
                                                
                                                type="text" 
                                                name="" id=""
                                                placeholder="Examinee-name"
                                                value={examinee}
                                                onChange={handleExamineChange} />

                                               


                                            <button className='btn ml-[11.7rem] my-7 items-center' onClick={handleSubmission}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetail;




