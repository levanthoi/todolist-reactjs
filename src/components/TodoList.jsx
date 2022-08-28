import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items,id,title,status, handleCompleteButton, handleDelete, handleEdit} = this.props;
    // console.log(items);
    return (
      <ul className="h-fit m-3 p-4 bg-slate-200 rounded-md">       
        {
          items.length > 0 ? (
            items.map((item) => (
              <TodoItem key={item.id} title={item.title} status={item.status} handleCompleteButton={() => handleCompleteButton(item.id) } handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} />
            ))
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-gray-800 text-xl font-bold py-1 px-4 bg-gray-400 rounded-md uppercase">Chưa có gì</span>
            </div>
          )
        }
      </ul>
    )
  }
}
