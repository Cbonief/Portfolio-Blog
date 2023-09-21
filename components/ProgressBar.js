import React from 'react';

function ProgressBar({ currentValue, maxValue }) {
  // Calculate the width of each circle and spacing

  const percentage = Math.round(100*currentValue/maxValue);
  const style = {"width": percentage+'%'};

  return (
    <>
        <div className="progress-bar">
            <div className="progress" style={style}></div>
        </div>
    </>
  );
}

export default ProgressBar;
