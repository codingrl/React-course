import { useState } from 'react';
import './App.css';
// import Content from './components/Content/Content';
// import Course from './components/Course/Course';
// import Header from './components/Header/Header';
// import Total from './components/Total/Total';

function App() {
  // const course = [
  //   {
  //     id: 1,
  //     name: 'IT-RUN React Web Dev',
  //     tasks: [
  //       {
  //         part: 'Вводный курс по React',
  //         task: 7,
  //       },
  //       {
  //         part: 'Состояние компонента',
  //         task: 15,
  //       },
  //       {
  //         part: 'Декомпозиция компонентов',
  //         task: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'IT-RUN Python Web Dev',
  //     tasks: [
  //       {
  //         part: 'Вводный курс по Python',
  //         task: 5,
  //       },
  //       {
  //         part: 'Переменные циклы Python',
  //         task: 12,
  //       },
  //       {
  //         part: 'Фреймворк Django',
  //         task: 17,
  //       },
  //     ],
  //   },
  // ];

  const [persons, setPersons] = useState([{ name: 'Maral Latipova' }]);

  const [newName, setNewName] = useState(''); // for input

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
    };
    const existingPerson = persons.find((person) => {
      return person.name.toLowerCase() === personObj.name.toLowerCase();
    });

    if (existingPerson) {
      alert('Person already exists!');
    } else {
      setPersons([...persons, { name: personObj.name }]);
      setNewName('');
    }
  };

  return (
    <div>
      {/* {course.map((c) => {
        return ( */}
      <>
        <h1>Users</h1>
        <form onSubmit={addPerson}>
          <input
            type='text'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input type='submit' value='Add user' />
        </form>

        <div>
          {persons.map((person) => {
            return <p key={person.name}>{person.name}</p>;
          })}
        </div>

        {/* <Header course={c} />
            <Content tasks={c.tasks} />
            <Total tasks={c.tasks}/> */}
      </>
      {/* );
      })} */}
    </div>
  );
}

export default App;

// 1. Отобразить пользователей в div. Каждый пользователь в теге p
//   2. При отправке формы, добавлять нового пользователя в состояние persons.
//       2.1 Невозможно добавить пользователя с одинаковым именем и фамилией (arsen iusupov === Arsen Iusupov).
//         Отображать alert, если такой пользователь уже существует
