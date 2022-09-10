import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const View = ({ _id, ...props }) => {
	const router = useRouter();
	const [todo, setTodo] = useState({});
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/todos/${_id}`)
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((data) => setTodo(data))
			.catch((err) => err.text().then((data) => console.log(data)));

		return () => {};
	}, []);

	const changeTodo = (name, value) => {
		setTodo({ ...todo, [name]: value });
	};

	const update = () => {
		fetch(`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/todos/${_id}`, { method: "PUT", body: JSON.stringify(todo) })
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((data) => console.log(data))
			.catch((err) => err.text().then((data) => console.log(data)));
	};

	return (
		<>
			{Object.keys(todo).length > 0 ? (
				<>
					<div>Update the user details</div>
					<div className="flex">
						<div>title</div>
						<input type="text" value={todo.title} name="title" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-green-700" />
					</div>
					<div className="flex">
						<div>description</div>
						<input type="text" value={todo.description} name="description" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-blue-900 ml-8" />
					</div>
					<div className="flex">
						<div>Status</div>
						<input type="text" value={todo.status} name="status" onChange={(e) => changeTodo(e.target.name, e.target.value)} className="border-2 border-blue-900 ml-8" />
					</div>
					<button className="mt-16 border-2 border-red-800 cursor-pointer" onClick={update}>
						Update
					</button>
				</>
			) : null}
		</>
	);
};

export const getServerSideProps = async (ctx) => {
	const params = ctx.params;
	console.log(params);
	return { props: JSON.parse(JSON.stringify(params)) };
};

export default View;
