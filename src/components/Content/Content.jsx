import React from 'react';
import Part from '../Part/Part';

const Content = ({part1, part2, part3, task1, task2, task3 }) => {
  return (
    <>
      <Part part={part1} tasks={task1} />
      <Part part={part2} tasks={task2}/>
      <Part part={part3} tasks={task3}/>   
    </>
  );
};

export default Content;