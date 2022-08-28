import React, { Component } from 'react';
import TodoModal from './TodoModal';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
    state = {
        showModal: false,
        id:"",
        title: "",
        status: "Incomplete"
        // title1: ""
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value =e.target.value;
        this.setState({ [name] : value})
        // console.log(name, value);
        // console.log(this.state.title);
    }

    handleOnclick = () =>{
        // e.preventDefault();
        this.setState({showModal:!this.state.showModal});
        // console.log('Click: ',this.state.showModal);
    }

    addNewTodo = (title, status) => {
        // console.log('AddNewTodo 1: ',this.state.showModal);
        // {this.handleOnclick()}
        if(!this.state.title){
            // console.log('AddNewTodo 2: ',this.state.showModal);
            toast.error('Vui lòng nhập tiêu đề');
            return;
        }
        else{
            let todo = {
                id: uuidv4(),
                title: title,
                status: status
            };
            this.props.addTodo(todo); 
            this.setState({
                title: "",
                status: "Incomplete"
            });
            toast.success('Đã thêm thành công');
        }
    }

    render() {
        const {showModal, id, title, status} = this.state;
        // console.log('render', showModal);
        return (
            <header className="w-full mb-4 px-4">
                <h1 className="w-full h-[150px] flex items-center justify-center uppercase text-6xl text-cyan-700 font-bold">todo list
                </h1>
                <div className="flex justify-between items-center">
                    <button className="todo-modal-btn bg-blue-500" onClick={this.handleOnclick}>Thêm mới</button>
                    <select className="w-fit h-fit p-2 bg-gray-300 rounded-md border-0 outline-0">
                        <option value="All">Tất cả</option>
                        <option value="complete">Đã hoàn thành</option>
                        <option value="Incomplete">Chưa hoàn thành</option>
                    </select>
                </div>
                <TodoModal title={title} status={status} showModal={showModal} handleChange={this.handleChange} handleClick={this.handleOnclick} addNewTodo = {() => this.addNewTodo(title,status)}/>
            </header>
        )
    }
}

export default Header;