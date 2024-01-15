import React, { useRef, useEffect, useContext } from 'react';

const Whiteboard = () => {
  // to keep track the coordinates of the line
  // ref vs state: ref doesnt re render unlike state
  const canvasRef = useRef(null);
  const colorRef = useRef(null); // keep track of the colour

  useEffect(() => {
    const canvas = canvasRef.current;
    // const context = canvas.getContext('2d');

    const pickedColour = document.getElementById('colorpicker');

    const current = {
      color: '#000000',
    };

    // fix the colour thing
    // const updateColor = (e) => {
    //   current.color = e.target.value;
    // };

    const updateColor = (e) => {
      current.color = e.target.value;
      // console.log(current.color);
      colorRef.current = e.target.value;
    };

    pickedColour.addEventListener('change', updateColor);
    // hes just adding a function for an event listener that waits for a colur update
    // i think this is onchange for us

    // const drawLine = (x0, y0, x1, y1, color) => {
    //   context.beginPath();
    //   context.moveTo(x0, y0);
    //   context.lineTo(x1, y1);
    //   context.strokeStyle = color;
    //   context.stroke();
    //   context.closePath();
    //   context.save();
    // };
  });
  return (
    <div>
      <canvas id="whiteboard"></canvas>
      {/* do the onchange shit to change the colour */}
      <input
        type="color"
        id="colorpicker"
        value={colorRef.current} // this doesnt work cause ref doesnt re render it
      ></input>
    </div>
  );
};

export default Whiteboard;
