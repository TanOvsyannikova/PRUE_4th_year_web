import React, {useState, useRef} from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, completeTodo, removeTodo, updateTodo }){
  const [edit, editTodo] = useState({
      id: null,
      value: ''
  });

  const submitUpdate = value => {
      updateTodo(edit.id, value)
      editTodo({
          id: null,
          value: ''
      })
  }

  if (edit.id) {
      return <FormTodo edit={edit} onSubmit={submitUpdate} />;
  }

  return (
      <div 
          className={todo.isComplete ? 'todo complete' : 'todo'} 
          key={index}>
              <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                  {todo.text}
              </div>
              <div>
              <Button class="btn" variant="outline-danger" onClick={() => removeTodo(todo.id)}>x</Button>
              <Button class="btn" variant="outline-success" onClick={() => editTodo({ id: todo.id, value: todo.text })}>EDIT</Button>
              </div>
      </div>
  )
}

function FormTodo(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null)

  const handleChange = e => {
      setInput(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      });
      setInput('');
  };


  return (
      <div>
          <Form onSubmit={handleSubmit}>
              {props.edit ? (
                  <>
                  <Form.Group>
                      <input type="text"
                          placeholder="Edit a todo item"
                          value={input}
                          name="text"
                          className="todo-input edit"
                          onChange={handleChange}
                          ref={inputRef} />
                  </Form.Group>
                      <Button variant="primary mb-3" type="submit"  onSubmit={handleSubmit} >Update</Button>
                  </>
              ) :
                  (
                      <>
                      <Form.Group>
                        
                          <input type="text"
                              placeholder="Add a todo item"
                              value={input}
                              name="text"
                              className="todo-input"
                              onChange={handleChange}
                              ref={inputRef} />
                      </Form.Group>
                          <Button variant="primary mb-3" type="submit" onSubmit={handleSubmit} >Add todo</Button>
                      </>
                  )
              }


          </Form>

      </div>
  )
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
      const newTodos = [todo, ...todos]
      
      if (!todo.text) {
          return;
      }
      setTodos(newTodos)
  };

  const updateTodo = (todoId, newValue) => {
      if (!newValue.text) {
          return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
  };

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
          }
          return todo;
      });
      setTodos(updatedTodos);
  };

  return (
      <div className="app">
        <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
          <Form.Label>What's the task for Today?</Form.Label>
          <FormTodo onSubmit={addTodo} />
          {todos.map((todo, index) => (
          <Card class="card">
          <Card.Body>
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo} 
            updateTodo={updateTodo} />
          </Card.Body>
          </Card>))}
        
      </div>
      </div>
  )
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;