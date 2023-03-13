import React from 'react';

const Total = ({ task1, task2, task3 }) => {
  return (
    <div>
      <p>Общее количество заданий {task1 + task2 + task3}</p>
    </div>
  );
};

export default Total;
