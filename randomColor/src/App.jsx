import { useState } from "react"

function App() {
   const [typeOfColor, setTypeOfColor] = useState('hex');
   const [color, setColor] = useState("#000000");


    const randomColorUtlity = (length) => {
      return Math.floor(Math.random() * length);
    }

   const handleCreateRandomHexColor = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';

    for(let i = 0; i < 6 ;i++){
      hexColor += hex[randomColorUtlity(hex.length)];
    }
    setColor(hexColor);
   }

   const handleCreateRandomRgbColor = () => {
    const rgbColor = `rgb(${randomColorUtlity(256)},${randomColorUtlity(256)},${randomColorUtlity(256)})`
    setColor(rgbColor);
   }

  return (
    <div className="w-full h-screen flex justify-center flex-col gap-10 items-center" style={{backgroundColor: color}}>
        <div>
          <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className="btn">Random Color</button>
          <button onClick={() => setTypeOfColor('rgb')} className="btn">RGB Color</button>
          <button onClick={() => setTypeOfColor('hex')} className="btn">Hex Code</button>
        </div>
        <div className="flex justify-center items-stretch px-6 py-3 rounded bg-green-950">
          <h1 className="text-3xl font-semibold tracking-wider text-white">{color}</h1>
        </div>
    </div>
  )
}

export default App
