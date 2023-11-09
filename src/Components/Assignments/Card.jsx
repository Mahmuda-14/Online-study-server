
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const Card = () => {
  const { difficultyLevel } = useParams();
  const all = useLoaderData();

  const [filteredServices, setFilteredServices] = useState(all);


  const filterTask = (difficulty) => {
    return all.filter((service) => service.difficultyLevel === difficulty);
  };

  useEffect(() => {
    if (difficultyLevel) {
      setFilteredServices(filterTask(difficultyLevel));
    }
    else {
      setFilteredServices(all);
    }

 
  }, [difficultyLevel, all]);



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
            // Filter services based on the selected difficulty
            setFilteredServices(filterTask(selectedDifficulty));

          }}
        >

          <option value selected="" >All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </form>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6  ml-10 items-center my-7">
        {filteredServices.map((service) =>
          <SingleCard key={service._id} service={service} />
        )}
      </div>
    </div>
  );
};

export default Card;

