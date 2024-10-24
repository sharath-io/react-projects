import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [multipleSelectionToggle, setMultipleSelectionToggle] = useState(false);
  const [showIndices, setShowIndices] = useState([]);

  const handleToggle = (index) => {
    if (multipleSelectionToggle) {
      setShowIndices((prevState) =>
        prevState.includes(index)
          ? prevState.filter((i) => i !== index)
          : [...prevState, index]
      );
    } else setShowIndex(index === showIndex ? null : index);
  };

  const handleMultipleSelection = () => {
    setMultipleSelectionToggle((prevState) => !prevState);
    setShowIndex(null);
    setShowIndices([]);
  };

  return (
    <div className="h-[100vh]">
      <h1 className="text-2xl my-7">Accordian component</h1>
      <button
        onClick={handleMultipleSelection}
        className="p-4 bg-yellow-800 text-white rounded-lg"
      >
        {multipleSelectionToggle ? "Multiple Selection" : "Single Selection"}
      </button>
      <ul>
        {data.map((item, index) => (
          <li
            key={item.id}
            className="my-5 rounded-xl cursor-pointer w-[50rem]"
            onClick={() => handleToggle(index)}
          >
            <h1 className="p-4 bg-green-500  ">{item.question} </h1>
            {multipleSelectionToggle
              ? showIndices.includes(index) && <p>{item.answer}</p>
              : showIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
