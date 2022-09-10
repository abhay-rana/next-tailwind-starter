import React, { useState } from "react";

const Create = () => {
	const [todo, setTodo] = useState({
		title: "",
		description: "",
		status: "",
	});

	const createTodo = () => {
		fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/todos/`, { method: "POST", body: JSON.stringify(todo) })
			.then((res) => (res.ok ? res.text() : Promise.reject(res)))
			.then((data) => console.log(data))
			.catch((err) => err.text().then((data) => console.log(data)));
	};

	const changeTodo = (name, value) => {
		setTodo({ ...todo, [name]: value });
	};
	return (
		<>
			<div className="m-3">Create todo</div>
			<div className="border-2 border-black p-5">
				<div className="flex justify-between m-1">
					<div>title</div>
					<input type="text" value={todo.title} name="title" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-green-700" />
				</div>
				<div className="flex justify-between m-1">
					<div>description</div>
					<input type="text" value={todo.description} name="description" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-blue-900 ml-8" />
				</div>
				<div className="flex justify-between m-1">
					<div>Status</div>
					<input type="text" value={todo.status} name="status" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-blue-900 ml-8" />
				</div>
				<button className="mt-8 cursor-pointer bg-warning p-2 rounded-md" onClick={createTodo}>
					Create
				</button>
			</div>
		</>
	);
};

export default Create;
