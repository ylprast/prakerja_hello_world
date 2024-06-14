import { useEffect, useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [editing, setEditing] = useState(null);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    alert("Selamat Datang");

    return () => {
      alert("Sampai Jumpa");
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'description') setDescription(value);
    if (name === 'deadline') setDeadline(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required");
      return;
    }
    const newTodo = { id: Date.now(), name, description, deadline };
    setTodos([...todos, newTodo]);
    setName('');
    setDescription('');
    setDeadline('');
    setTotalTasks(totalTasks + 1);
  };

  const handleEdit = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setName(todo.name);
    setDescription(todo.description);
    setDeadline(todo.deadline);
    setEditing(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required");
      return;
    }
    const updatedTodos = todos.map(todo =>
      todo.id === editing ? { ...todo, name, description, deadline } : todo
    );
    setTodos(updatedTodos);
    setName('');
    setDescription('');
    setDeadline('');
    setEditing(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setTotalTasks(totalTasks - 1);
  };


  return (
    <section className="padding">
      <div className="container">
        <div className="row">
        <div className="col-lg-5 col-12">
          <div className="col-lg-12 col-12 text-center">
            <h2 className="mb-lg-5 mb-4">ToDo List</h2>
          </div>
    <div>
      <h1>Todo List</h1>
      <p>Total Tasks: {totalTasks}</p>
      <form onSubmit={editing ? handleUpdate : handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          className="form-label form-control"
          value={name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="form-label form-control"
          value={description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          className="form-label form-control"
          value={deadline}
          onChange={handleChange}
        />
        <button type="submit" className="btn custom-btn">{editing ? "Update Task" : "Add Task"}</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h2>{todo.name}</h2>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}

export default TodoApp;
