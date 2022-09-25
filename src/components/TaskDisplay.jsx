const TaskDisplay = ({ task, mainList, setMainList }) => {
  const handleDeleteClick = (item) => {
    setMainList((current) =>
      current.filter((toDo) => {
        return toDo.id !== task.id;
      })
    );
  };

  return (
    <div className="col-4">
      <div className="card">
        <h3>
          <b>{task.name}</b>
        </h3>
        <p>{task.date ? task.date : "No date"}</p>
        <div className="button-container">
          <button className="button1">Done</button>
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
    </div>
  );
};

export default TaskDisplay;
