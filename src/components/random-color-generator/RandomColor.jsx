import { useEffect, useState } from "react";

const RandomColor = () => {
  const [bgColor, setBgColor] = useState("#000000");
  const [typeOfColor, setTypeColor] = useState("hex");

  const generateRandomHEX = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomNumber = "#";
    for (let i = 0; i < 6; i++)
      randomNumber = randomNumber + arr[Math.floor(Math.random() * 16)];
    setBgColor(randomNumber);
  };

  const generateRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setBgColor(`rgb(${r},${g},${b})`);
  };

  // everytime the type of color updates => generate a random color according to the type that is updated
  useEffect(() => {
    typeOfColor === "hex" ? generateRandomHEX() : generateRandomRGB();
  }, [typeOfColor]);
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="h-[100vh] w-full text-center"
    >
      <button
        onClick={() => setTypeColor("hex")}
        className="bg-white text-black px-4 py-2 rounded-lg m-10"
      >
        HEX
      </button>
      <button
        onClick={() => setTypeColor("rgb")}
        className="bg-white text-black px-4 py-2 rounded-lg m-10"
      >
        RGB
      </button>
      <button
        onClick={() =>
          typeOfColor === "hex" ? generateRandomHEX() : generateRandomRGB()
        }
        className="bg-white text-black px-4 py-2 rounded-lg m-10"
      >
        Random Color
      </button>

      <p className=" text-white">
        {typeOfColor} Color: {bgColor}
      </p>
    </div>
  );
};

export default RandomColor;
