import React, { Component } from 'react';
import { MdClose } from "react-icons/md";

export default class TodoModal extends Component {
    render() {
        const { title,status,handleChange, showModal,handleClick,addNewTodo } = this.props;
        // console.log(title, status);
        return (
            <> 
                {
                    showModal &&
                    <div className="w-screen h-screen bg-white-rgba fixed inset-0 flex flex-col items-center justify-center duration-500">
                        <div className="relative">
                            <button className="absolute right-0 top-[-37px] w-fit bg-gray-200 rounded-sm hover:text-gray-100 hover:bg-red-500 duration-300" onClick={handleClick}>
                                <MdClose size={30} />
                            </button>
                            <div className="w-[400px] h-fit bg-gray-200 rounded-md p-4">
                                <h1 className="font-bold text-2xl text-gray-600">Thêm TODO</h1>
                                <form action="" className="flex flex-col mt-6" onSubmit={handleClick}>
                                    <label htmlFor="a" className="block text-gray-600">Tiêu đề</label>
                                    <input type="text" name="title" value={title} className="todo-modal-input" onChange={(event) =>handleChange(event)} />
                                    <label htmlFor="status" className="block text-gray-600 mt-4">Trạng thái</label>
                                    <select name="status" className="todo-modal-input" onChange={(event) =>handleChange(event)}>
                                        <option value="Incomplete">Chưa hoàn thành</option>
                                        <option value="Complete">Đã Hoàn thành</option>
                                    </select>
                                    <div className="mt-8 flex gap-2">
                                        <button className="todo-modal-btn bg-blue-500 hover:bg-blue-700" onClick={() => addNewTodo(title, status)} >thêm</button>
                                        <button className="todo-modal-btn bg-gray-500 hover:bg-gray-700" >bỏ qua</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }

            </>
        )
    }
}
