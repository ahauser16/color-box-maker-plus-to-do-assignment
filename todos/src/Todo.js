import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", removeTodo, updateTodo }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => removeTodo(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };

  // default todo view
  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  // todo view when editing
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
