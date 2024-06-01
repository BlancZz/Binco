import React from 'react';
// import zxcvbn from 'zxcvbn';

const StrengthMeter = ({ score }) => {
  //   const testResult = zxcvbn(password);
  // score is multiplied by 100 and divided by 4
  const num = score * 25;

  const createPassLabel = () => {
    switch (score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Good';
      case 3:
        return 'Great';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const funcProgressColor = () => {
    switch (score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${Math.max(10, num - 10)}%`,
    background: funcProgressColor(),
    height: '7px',
  });

  return (
    <>
      <div className="progress" style={{ height: '7px', width: '46vw' }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
    </>
  );
};

export default StrengthMeter;
