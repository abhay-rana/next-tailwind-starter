import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
	const router = useRouter();
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/todos`)
			.then((res) => (res.ok ? res.json() : Promise.reject()))
			.then((data) => setTodos(data.all_todo))
			.catch((err) => console.log(err));
		return () => {};
	}, []);

	const deleteTodo = (id) => {
		fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/todos?userId=${id}`, {
			method: "DELETE",
		});
	};

	const updateUser = (id) => {
		router.push(`/view/${id}`);
	};

	console.log(todos);

	return (
		<>
			<div>
				<div className="p-6">Todos List : -</div>
				{todos.map((todo, i) => {
					return (
						<div key={todo._id} className="border-2 border-red-300 m-2 flex flex-row justify-between">
							<div>
								<div>{!!todo.description ? <span className="text-red-600">{todo.description}</span> : null}</div>
								<div>{!!todo.title ? <span>{todo.title}</span> : null}</div>
								<div>{todo.hasOwnProperty("status") ? <span className="">{todo.status.toString()}</span> : null}</div>
							</div>
							<div className="">
								<button className="mr-2 border-2 bg-blue-600 cursor-pointer" onClick={() => deleteTodo(todo._id)}>
									Delete
								</button>
								<button className="border-2 bg-blue-600 cursor-pointer" onClick={() => updateUser(todo._id)}>
									Update
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default HomePage;
