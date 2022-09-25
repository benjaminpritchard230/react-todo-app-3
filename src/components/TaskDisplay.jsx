import { useSpring, animated } from "react-spring";

const TaskDisplay = ({ task, mainList, setMainList }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const handleDeleteClick = (task) => {
    setMainList((current) =>
      current.filter((toDo) => {
        return toDo.id !== task.id;
      })
    );
  };

  const handleDoneClick = (task) => {
    let tempArray = [...mainList];
    const index = mainList.findIndex((element) => element.id === task.id);
    console.log(tempArray[index]);
    tempArray[index].done = !tempArray[index].done;
    setMainList(tempArray);
  };
  return (
    <animated.div style={props} className="col-4">
      <div className="card">
        <h3>
          <b
            style={{
              color: task.done ? "green" : "white",
            }}
          >
            {task.name}
          </b>
        </h3>
        <p>{task.date ? task.date : "No date"}</p>
        <div className="button-container">
          <button
            className="button1"
            onClick={() => {
              handleDoneClick(task);
            }}
          >
            Done
          </button>
          <button
            className="button2"
            onClick={() => {
              handleDeleteClick(task);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default TaskDisplay;
