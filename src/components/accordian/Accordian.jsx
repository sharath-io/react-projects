import { useState } from "react";
import data from "./data";


const Accordion = () => {

    const [showIndex, setShowIndex] = useState(null);

    const handleToggle =(index) =>{
        setShowIndex(index ===showIndex ? null : index)
    }
  return (
    <div>
      <h1 className="text-2xl my-7">Accordian component</h1>
      <ul>
        {data.map((item,index) => (
          <li
            key={item.id}
            className="my-5 rounded-lg cursor-pointer w-[50rem]"
            onClick={()=>handleToggle(index)}
          >
            <h1  className="p-4 bg-green-500  ">{item.question } </h1>
            {showIndex===index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
