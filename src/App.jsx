import TaskDisplay from "./components/TaskDisplay";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [mainList, setMainList] = useState([
    {
      name: "Walk dog",
    },
    {
      name: "Eat meal",
    },
  ]);

  const [name, setName] = useState("");
  const id = uuidv4();
  const date = new Date().toISOString().slice(0, 10);

  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const createCards = () => {
    let cardsArray = [];
    mainList.forEach((task, index) => {
      cardsArray.push(
        <TaskDisplay
          key={index}
          task={task}
          mainList={mainList}
          setMainList={setMainList}
        />
      );
    });
    return cardsArray;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (name) {
      setMainList([
        ...mainList,
        {
          name: name,
          date: date,
          id: id,
        },
      ]);
    }
    setName("");
  };

  return (
    <body>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>To-do App</h1>
            </div>
          </div>
          <div className="row buttons-row">
            <div className="col d-flex flex-row">
              {/* Create new task form */}
              <form onSubmit={handleSubmit}>
                <button type="submit" className="button3 create-task">
                  Create task
                </button>
                <input
                  value={name}
                  placeholder="Task name"
                  onChange={(event) =>
                    setName(capitaliseFirstLetter(event.target.value))
                  }
                />
              </form>
              {/* Create new task form */}
            </div>
            <div className="col d-flex flex-row-reverse">
              <button className="button3 delete-done">Delete done</button>
              <button
                className="button3"
                onClick={() => {
                  setMainList([]);
                }}
              >
                Delete all
              </button>
            </div>
          </div>
          {/* Task cards go here */}
          <div className="row tasks">{createCards()}</div>
        </div>
      </div>
    </body>
  );
}

export default App;
