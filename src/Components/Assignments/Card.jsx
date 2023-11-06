
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const Card = () => {
  const { difficultyLevel } = useParams();
  const all = useLoaderData();

  const [filteredServices, setFilteredServices] = useState(all);

  // Function to filter services by difficulty

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
    // When the component mounts or difficultyLevel changes



  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficultyLevel, all]);



  return (
    <div>
      <h2 className="text-center text-xl font-medium">Lets Go for a Test</h2>
      <form className="">
        <select
          className="select select-info w-full max-w-xs"
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
      <div className="grid grid-cols-3 gap-6 ml-10 my-7">
        {filteredServices.map((service) =>
          <SingleCard key={service._id} service={service} />
        )}
      </div>
    </div>
  );
};

export default Card;

