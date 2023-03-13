import React from 'react';

const Part = ({ part, tasks }) => {
  return (
    <div>
      <p>
        {part} {tasks}
      </p>
    </div>
  );
};

export default Part;
