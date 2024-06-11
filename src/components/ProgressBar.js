import React, { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';
import PropTypes from 'prop-types';

const ProgressBar = ({ targetPercentage, start, strokeColor }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 5000; // Duration of the animation in milliseconds
    const intervalTime = 20; // Interval time in milliseconds
    const increment = targetPercentage / (duration / intervalTime);

    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev + increment >= targetPercentage) {
          clearInterval(intervalId);
          return targetPercentage;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [start, targetPercentage]);

  return (
    <div style={{ width: 150, height: 150 }}>
      <Circle
        percent={percentage}
        strokeWidth={12}
        trailWidth={6}
        strokeColor={strokeColor}
        trailColor="#d8d8d6"
      />
    </div>
  );
};

ProgressBar.propTypes = {
  targetPercentage: PropTypes.number.isRequired,
  start: PropTypes.bool.isRequired,
};

export default ProgressBar;
