import React from 'react';

function ProgressBar({ currentValue, maxValue }) {
  // Calculate the width of each circle and spacing

  const percentage = Math.round(100*currentValue/maxValue);
  console.log(percentage);
  const style = {"width": percentage+'%'};
  console.log(style);

  return (
    <>
        <div className="progress-bar">
            <div className="progress" style={style}></div>
        </div>
    </>
  );
}

export default ProgressBar;
