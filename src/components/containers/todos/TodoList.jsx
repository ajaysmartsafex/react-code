import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../../../features/todo/todoSlice";

const TodoList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const editHandler = (todo) => {
    setIsEditing(true);
    dispatch(editTodo(todo.id));
  }

  console.log("Todos:", todos);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-100">
      <div>Todos Lists</div>
      <ul className="list-none">
        {todos?.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded gap-4"
            key={todo.id}
          >
            {isEditing ? (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => {
                  dispatch(editTodo({ id: todo.id, text: e.target.value }));
                  setIsEditing(false);
                }}
                className="bg-gray-700 text-white rounded px-2 py-1"
              />
            
            ): (
              <div className="text-white">{todo.text}</div>
            )}
            
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            {isEditing ? (
              <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#ffffff"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // stroke-width="2"
                    d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={editHandler}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#ffffff"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // stroke-width="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
