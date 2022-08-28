import React, { Component } from 'react';
// import CheckBtn from './CheckBtn';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import TodoModal from './TodoModal';
export default class TodoItem extends Component {
  state = {
    showModal: false,
    id: this.props.id,
    title: this.props.title,
    status: this.props.status
  }

  handleOnclick = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
    console.log("aa");
  }

  // addNewTodo = (title, status) => {
  //   if (!this.state.title) {
  //     toast.error('Vui lòng nhập tiêu đề');
  //     return;
  //   }
  //   else {
  //     let todo = {
  //       id: uuidv4(),
  //       title: title,
  //       status: status
  //     };
  //     this.props.addTodo(todo);
  //     this.setState({
  //       title: "",
  //       status: "Incomplete"
  //     });
  //     toast.success('Đã thêm thành công');
  //   }
  // }


  render() {
    const { title, status, handleCompleteButton, handleDelete, handleEdit } = this.props;
    const { showModal } = this.state;
    // let todo ={
    //   id: id, title: title, status: status
    // }
    let checkComplete = "cus-btn";
    if (status === "Complete") {
      checkComplete = 'show-check';
    } else {
      checkComplete = 'cus-btn';
    }
    return (
      <>
        <li className="h-[60px] bg-white rounded flex justify-between items-center px-3 my-4">
          <div className="flex items-center justify-center gap-2">
            <button className={checkComplete} onClick={handleCompleteButton}>
              {status === "Complete" ? <GiCheckMark size={18} /> : ""}
            </button >
            <div className="">
              <div className={status === "Complete" ? "text-sm font-medium text-gray-500 line-through italic" : "text-sm font-medium"}>{title}</div>
              <time className="flex gap-1">
                <div className="text-xs">9:25 PM, </div>
                <div className="text-xs">7/6/2022</div>
              </time>
            </div>
          </div>
          <div className="ml-1 flex gap-2">
            <button className="cus-btn" onClick={handleDelete}><MdDelete /></button>
            <button className="cus-btn" onClick={handleEdit}><MdModeEditOutline /></button>
          </div>
        </li>
        <TodoModal title={this.state.title} status={this.state.status} showModal={showModal} handleChange={this.handleChange} handleClick={this.handleOnclick} addNewTodo={() => this.addNewTodo(title, status)} />
      </>
    )
  }
}
