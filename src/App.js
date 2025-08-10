import React, { useState } from 'react';
import './App.css';

function App() {
  // --- STATE MANAGEMENT ---
  const [view, setView] = useState('list');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Finish this React project!', importance: 'High', duedate: '2025-08-11', status: 'pending' },
    { id: 2, name: 'Post project on LinkedIn', importance: 'Medium', duedate: '2025-08-12', status: 'pending' },
    { id: 3, name: 'Learn about React Hooks', importance: 'Low', duedate: '2025-08-10', status: 'completed' }
  ]);
  const [taskName, setTaskName] = useState('');
  const [taskImportance, setTaskImportance] = useState('Medium');
  const [taskDuedate, setTaskDuedate] = useState('');

  // --- HANDLER FUNCTIONS ---
  const handleAddTask = (event) => {
    event.preventDefault();
    if (!taskName || !taskDuedate) {
        alert("Please fill out the task name and due date!");
        return;
    }
    const newTask = {
      id: Date.now(), name: taskName, importance: taskImportance, duedate: taskDuedate, status: 'pending'
    };
    setTasks([...tasks, newTask]);
    setTaskName(''); setTaskImportance('Medium'); setTaskDuedate(''); setView('list');
  };
  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: 'completed' } : task));
  };
  const handleMarkAsPending = (taskId) => {
      setTasks(tasks.map(task => task.id === taskId ? { ...task, status: 'pending' } : task));
  };
  const handleRemoveTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
  };

  // --- DERIVED STATE ---
  const pendingTasks = tasks
    .filter(task => task.status === 'pending')
    .sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
  const completedTasks = tasks.filter(task => task.status === 'completed');

  // --- JSX / RENDER ---
  return (
    <div className="App">
      <main>
        {view === 'list' ? (
          // --- TASK LIST VIEW ---
          <div className="task-view">
            <div className="header">
              <h1>Today</h1>
              <button className="btn add-btn-circle" onClick={() => setView('add')}>+</button>
            </div>
            
            <div className="task-list">
              {pendingTasks.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-details">
                    <p className="task-name">{task.name}</p>
                    <p className="task-meta">Due: {task.duedate} | Importance: {task.importance}</p>
                  </div>
                  <div className="card-actions">
                    <button className="btn action-btn" onClick={() => handleCompleteTask(task.id)}>Done ✓</button>
                    <button className="btn remove-btn" onClick={() => handleRemoveTask(task.id)}>✕</button>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="completed-title">Completed</h2>
            <div className="task-list">
              {completedTasks.map(task => (
                <div key={task.id} className="task-card completed">
                  <div className="task-details">
                    <p className="task-name">{task.name}</p>
                  </div>
                  <div className="card-actions">
                    <button className="btn action-btn small" onClick={() => handleMarkAsPending(task.id)}>Undo</button>
                    <button className="btn remove-btn small" onClick={() => handleRemoveTask(task.id)}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // --- ADD TASK VIEW ---
          <div className="add-task-view">
            <div className="header">
              <h2>Create a New Task</h2>
            </div>
            <form onSubmit={handleAddTask}>
              <div className="form-group">
                <label>Task Name</label>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="e.g., Finish Dribbble shot" />
              </div>
              <div className="form-group">
                <label>Importance</label>
                <select value={taskImportance} onChange={(e) => setTaskImportance(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input type="date" value={taskDuedate} onChange={(e) => setTaskDuedate(e.target.value)} />
              </div>
              <div className="form-actions">
                <button type="button" className="btn secondary-btn" onClick={() => setView('list')}>Cancel</button>
                <button type="submit" className="btn primary-btn">Add Task</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;