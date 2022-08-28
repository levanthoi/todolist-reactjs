import React, { Component } from 'react';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';
// import TodoModal from "./components/TodoModal";

class App extends Component {
  state = {
    items: [{ id: 1, title: "abc", status: "Complete" }, { id: 2, title: "abcd", status: "Incomplete" }],
    id: "",
    title: "",
    status: "Incomplete",
    // isComplete: false
  }

  addTodo = (todo) => {
    const newTodo = [...this.state.items, todo]
    this.setState({
      items: newTodo,
      id: todo.id,
      title: todo.title,
      status: todo.status
    })
  }

  handleCompleteButton = (id) => {
    const itemsNew = this.state.items.map(item => {
      if(item.id === id) {
        return {...item, status: item.status==='Complete' ? "Incomplete" : "Complete"}
      }
      return item
    })
    this.setState({items: itemsNew})
    
  }

  // =================================================================
  // handle delete
  // =================================================================
  handleDelete = id => {
    console.log("delete called");
    const itemsDel = this.state.items.filter(item => item.id != id)
    this.setState({ items: itemsDel })
  }

  // =================================================================
  // handle edit
  // =================================================================
  handleEdit = id => {
    console.log("edit called");
    // const itemsDel = this.state.items.filter(item => item.id != id)
    // this.setState({ items: itemsDel })
  }


  render() {
    const { items, id, title, status, isComplete } = this.state;
    console.log("render: ", this.state);
    return (
      <div className="max-w-[750px] mx-auto border border-solid border-slate-300 shadow-2xl">
        <Header addTodo={this.addTodo} />
        <TodoList items={items} addTodo={this.addTodo} handleCompleteButton={this.handleCompleteButton} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    )
  }
}

export default App;
