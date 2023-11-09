/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCard = ({ service }) => {
    const {_id,title,marks,difficultyLevel,img} = service;
    return (
        <div>
            <div className="card w-96 h-[395px] bg-base-100 shadow-xl my-5 sm:left-[44px]">
                
               <img className="w-[384px] h-[200px] rounded-md" src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                   <div className="flex gap-4 my-3">
                   <p><span className=" text-start text-xl font-semibold">Marks : </span>{marks}</p>
                    <p><span className=" text-start text-lg font-semibold">Difficulty : </span> {difficultyLevel}</p>
                   </div>
                    <div className="flex gap-2">
                        <Link to={`/task/${_id}`}><button className="btn btn-success text-white px-1">View Assignment</button></Link>
                        <Link to={`/update/${_id}`}><button className="btn btn-outline btn-success">Update Assignment</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;