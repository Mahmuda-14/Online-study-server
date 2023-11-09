


import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const Card = () => {
  const { difficultyLevel } = useParams();
  const all = useLoaderData();
  const [filterDifficulty, setFilteredDifficulty] = useState(all);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


  const last = currentPage * itemsPerPage;
  const first = last - itemsPerPage;
  const currentItems = filterDifficulty.slice(first, last);



  const filterTask = (difficulty) => {
    return all.filter((service) => service.difficultyLevel === difficulty);
  };

  useEffect(() => {
    if (difficultyLevel) {
      setFilteredDifficulty(filterTask(difficultyLevel));
    } else {
      setFilteredDifficulty(all);
    }


    setCurrentPage(1);
  }, [difficultyLevel, all]);



  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };




  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-medium">Lets Go for a Test</h2>
      <form className="flex">
        <select
          className="select select-info w-full max-w-md sm:ml-[6rem] md:ml-[12rem] lg:ml-[32rem] my-10"
          value={difficultyLevel || " "}

          onChange={(e) => {
            const selectedDifficulty = e.target.value;
            
            console.log("Selected Difficulty:", selectedDifficulty);
           
            setFilteredDifficulty(filterTask(selectedDifficulty));
          
          }}
        >
          <option value="" selected> All </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </form>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 ml-10 items-center my-7">
        {
         
         currentItems.map((service) =><SingleCard key={service._id} service={service}></SingleCard>)
        
        }

      </div>

      <div className="flex justify-center m-11">

        {
        Array.from({ length: Math.ceil(filterDifficulty.length / itemsPerPage) }, (_, index) => (

          <button  key={index + 1}   onClick={() => paginate(index + 1)}  className={`mx-2 px-4 py-2 border ${currentPage === index + 1 ? "btn bg-cyan-500 text-white" : "" }`}> {index + 1} </button> ))}
      </div>
    </div>
  );
};

export default Card;
